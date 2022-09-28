# etude-firebase

<!-- Badges -->

[![Last Commit](https://img.shields.io/github/last-commit/shin-sforzando/etude-firebase)](https://github.com/shin-sforzando/etude-firebase/graphs/commit-activity)
[![CI](https://github.com/shin-sforzando/etude-firebase/actions/workflows/ci.yml/badge.svg)](https://github.com/shin-sforzando/etude-firebase/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!-- Screenshots -->

| ![Screenshot 1](https://placehold.jp/32/3d4070/ffffff/720x480.png?text=Screenshot%201) | ![Screenshot 2](https://placehold.jp/32/703d40/ffffff/720x480.png?text=Screenshot%202) |
|:--------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------:|
|                                      Screenshot 1                                      |                                      Screenshot 2                                      |

<!-- Synopsis -->

Etude for Firebase w/ Next.js.

## **Use this template**

- [x] Replace the string `shin-sforzando` with the actual project owner
- [x] Replace the string `etude-firebase` with the actual project name
- [x] Create an issue `#1` for assets
- [ ] `yarn install` to install dependencies
- [ ] Check the [repository secrets](https://github.com/shin-sforzando/etude-firebase/settings/secrets/actions)
  - [ ] `git secret reveal` to reveal secrets
- [ ] Prepare [Vercel](https://vercel.com/)
- [ ] Integrate with Slack: `/github subscribe shin-sforzando/etude-firebase reviews comments branches commits:*`
- [ ] **Delete this section!**

----

<!-- TOC -->

- [**Use this template**](#use-this-template)
- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Setup](#setup)
    - [Reveal secrets](#reveal-secrets)
    - [Environment Variables](#environment-variables)
  - [Develop](#develop)
  - [Test](#test)
  - [Storybook](#storybook)
  - [Document](#document)
    - [CHANGELOG.md](#changelogmd)
  - [Deploy](#deploy)
- [Misc](#misc)
  - [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- Node.js
  - Next.js
    - [next-axiom](https://github.com/axiomhq/next-axiom) as **Logger**
  - ESLint
  - Prettier
  - Stylelint
  - Playwright
  - Storybook
- Tailwind CSS v3+
  - Tailwind UI
- [git-secret](https://git-secret.io)

## How to

```shell
$ yarn run
<snip>
   - build
      next build
   - build-storybook
      build-storybook
   - chromatic
      npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN
   - dev
      NODE_OPTIONS='--inspect' next dev
   - hide
      git secret hide
   - lint
      next lint --dir src
   - lint:fix
      yarn lint --fix
   - prepare
      husky install
   - prettier
      prettier --write './**/*.{js,jsx,ts,tsx,json}'
   - reveal
      git secret reveal
   - start
      next start
   - storybook
      start-storybook -p 6006
   - stylelint
      stylelint --fix './**/*.{css,scss,sass}'
   - test
      yarn test:vitest && yarn test:e2e
   - test:e2e
      playwright test
   - test:vitest
      vitest run --update --coverage
```

### Setup

#### Reveal secrets

To reveal secret files, `yarn reveal`.

To hide secret files,  `yarn hide`.

#### Environment Variables

```.env
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT=xxxxxxxxxxxxxxxx
CHROMATIC_PROJECT_TOKEN=xxxxxxxxxxxxxxxx
```

### Develop

`yarn dev` to start development server.

### Test

To test using (T. B. D.), `yarn test:(T. B. D.)`.

To test using Playwright, `yarn test:e2e`.

To test both, `yarn test`.

### Storybook

Every time you push to GitHub, it is automatically deployed to Chromatic.

`yarn storybook` to open Storybook manually.

### Document

#### CHANGELOG.md

To update CHANGELOG.md, `git cliff --unreleased --output CHANGELOG.md`.

### Deploy

Every time you push to GitHub, it is automatically deployed to Vercel.

## Misc

### Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) for details.

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)
