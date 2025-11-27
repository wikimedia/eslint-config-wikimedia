#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

# == Helpers ==

get_version_from_package_json() {
	node -e "console.log(require('./package.json').version)" 2>/dev/null || return 1
}

get_version_from_git_tag() {
	git describe --tags --abbrev=0 2>/dev/null | sed 's/^v//'
}

# == Get current version ==

if CURRENT_VERSION=$(get_version_from_package_json); then
	echo "Current version from package.json: $CURRENT_VERSION"
else
	CURRENT_VERSION=$(get_version_from_git_tag)
	echo "Current version from git tag: $CURRENT_VERSION"
fi

IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

# == Release type ==

read -rp "Release type? (major/minor/patch): " RELEASE_TYPE

case "$RELEASE_TYPE" in
	major)
		NEW_MAJOR=$((MAJOR + 1))
		NEW_MINOR=0
		NEW_PATCH=0
		;;
	minor)
		NEW_MAJOR=$MAJOR
		NEW_MINOR=$((MINOR + 1))
		NEW_PATCH=0
		;;
	patch)
		NEW_MAJOR=$MAJOR
		NEW_MINOR=$MINOR
		NEW_PATCH=$((PATCH + 1))
		;;
	*)
		echo "Invalid choice. Use 'major', 'minor', or 'patch'."
		exit 1
		;;
esac

NEW_VERSION="${NEW_MAJOR}.${NEW_MINOR}.${NEW_PATCH}"
BRANCH="v${NEW_VERSION}"

echo "Releasing version: $NEW_VERSION"

git fetch --tags
git checkout -b "$BRANCH"

# == Update package.json ==

node - <<EOF
const fs = require('fs');
const pkg = require('./package.json');
pkg.version = '$NEW_VERSION';
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, "\t") + '\n');
EOF

npm install --package-lock-only

# == Generate CHANGELOG ==

LAST_TAG=$(get_version_from_git_tag || echo "")
DATE=$(date +"%Y-%m-%d")

if [ -n "$LAST_TAG" ]; then
	RAW_COMMITS=$(git log "v$LAST_TAG"..HEAD --pretty=format:'* %s (%an)')
else
	RAW_COMMITS=$(git log --pretty=format:'* %s (%an)')
fi

COMMITS=$(printf "%s\n" "$RAW_COMMITS" |
	sed -E 's/\s*\(#([0-9]+)\)//g' |             # remove github ticket (#123)
	sed -E 's/\(Ed S\)/(Ed Sanders)/g'           # expand names
)

HEADLINE="$NEW_VERSION / $DATE"
# Create an underline of '=' matching the headline length
UNDERLINE=$(printf '%*s' "${#HEADLINE}" '' | tr ' ' '=')

CHANGELOG_SECTION=$(cat <<EOF
$HEADLINE
$UNDERLINE

$COMMITS

EOF
)

echo "Updating CHANGELOG.md"
{
	printf "%s\n\n" "$CHANGELOG_SECTION"
	cat CHANGELOG.md
} > CHANGELOG.md.tmp
mv CHANGELOG.md.tmp CHANGELOG.md

git add package.json package-lock.json CHANGELOG.md
git commit -m "Release v$NEW_VERSION"

echo "Release branch '$BRANCH' created and committed."
