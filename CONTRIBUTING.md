# Contributing Guide

## Getting Started

1. Install latest version of `git-mob`
   ```
   npm i -g git-mob
   ```
1. Run tests (Uses Jest)
   ```
   npm test
   npm test -- --watch
   ```
1. Debug extension:
   Press F5 in VS Code to launch the extension into a sandbox and you can place break points
1. Debug tests: In the debug tab you can change to `jest` from the dropdown

## Releasing

This section is for maintainers with push access to git-mob-vs-code on the extension marketplace.

1. Add release notes at https://github.com/rkotze/git-mob-vs-code/releases and update the CHANGELOG https://github.com/rkotze/git-mob-vs-code/blob/master/CHANGELOG.md
1. Bump the version at the appropriate level (major, minor, patch); e.g.
   ```
   npm version patch
   ```
1. Push the version commit and tag
   ```
   git push --follow-tags
   ```
1. New releases need to be manually triggered
   [Azure release pipeline](https://dev.azure.com/TinkerTaylor/VS%20code%20extensions/_release?view=all&_a=releases&definitionId=1)

1. **Never to be used** only for reference: Manually release the package
   ```
   vsce publish -p <secret key>
   ```
