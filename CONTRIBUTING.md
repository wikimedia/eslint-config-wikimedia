Contributing
===================

## Release process

1. Draft release commit. You can automate this by running [release.sh](./release.sh).
   * Create a new branch with a clean checkout out origin/master
   * Set next version in [package.json](./package.json).
   * Add release notes section to [CHANGELOG.md](./CHANGELOG.md)
     Use `npm run -s changelog` to generate it, and improve it
     as you see fit.
   * Commit as "Release vX.Y.Z"
2. Merge release commit
   * Push branch to remote.
   * Create pull request.
   * Wait for CI and code review approval.
   * Merge into main branch.
3. Publish git tag and npm package.
   * Make sure a clean checkout of origin/master, with the merged release commit
     as its head, e.g. `git show`
   * Run `git tag -s vX.Y.Z -m "Release"`
   * Run `git push --follow-tags`
   * Run `npm publish`
