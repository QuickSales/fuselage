<!--header-->

<p align="center">
  <a href="https://quickchat.vn" title="QuickSales.Vn">
    <img src="https://github.com/QuickSales/QuickSales.Vn.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="QuickSales.Vn" />
  </a>
</p>

# `@quickchat.vn/onboarding-ui`

> Set of components and functions for the onboarding experience on QuickSales.Vn

---

[![npm@latest](https://img.shields.io/npm/v/@quickchat.vn/onboarding-ui/latest?style=flat-square)](https://www.npmjs.com/package/@quickchat.vn/onboarding-ui/v/latest) [![npm@next](https://img.shields.io/npm/v/@quickchat.vn/onboarding-ui/next?style=flat-square)](https://www.npmjs.com/package/@quickchat.vn/onboarding-ui/v/next) ![react version](https://img.shields.io/npm/dependency-version/@quickchat.vn/onboarding-ui/peer/react?style=flat-square) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://rocketchat.github.io/fuselage/onboarding-ui) ![npm downloads](https://img.shields.io/npm/dw/@quickchat.vn/onboarding-ui?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@quickchat.vn/onboarding-ui?style=flat-square)

![deps](https://img.shields.io/librariesio/release/npm/@quickchat.vn/onboarding-ui?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@quickchat.vn/onboarding-ui?style=flat-square)

<!--/header-->

## Install

<!--install-->

Firstly, install the peer dependencies (prerequisites):

```sh
npm i @quickchat.vn/fuselage @quickchat.vn/fuselage-hooks @quickchat.vn/fuselage-polyfills @quickchat.vn/icons @quickchat.vn/layout @quickchat.vn/logo @quickchat.vn/styled react react-dom react-i18next

# or, if you are using yarn:

yarn add @quickchat.vn/fuselage @quickchat.vn/fuselage-hooks @quickchat.vn/fuselage-polyfills @quickchat.vn/icons @quickchat.vn/layout @quickchat.vn/logo @quickchat.vn/styled react react-dom react-i18next
```

Add `@quickchat.vn/onboarding-ui` as a dependency:

```sh
npm i @quickchat.vn/onboarding-ui

# or, if you are using yarn:

yarn add @quickchat.vn/onboarding-ui
```

<!--/install-->

## Contributing

<!--contributing(msg)-->

Contributions, issues, and feature requests are welcome!<br />
Feel free to check the [issues](https://github.com/QuickSales/fuselage/issues).

<!--/contributing(msg)-->

### Building

As this package dependends on others in this monorepo, before anything run the following at the root directory:

<!--yarn(build)-->

```sh
yarn build
```

<!--/yarn(build)-->

### Linting

To ensure the source is matching our coding style, we perform [linting](<https://en.wikipedia.org/wiki/Lint_(software)>).
Before commiting, check if your code fits our style by running:

<!--yarn(lint)-->

```sh
yarn lint
```

<!--/yarn(lint)-->

Some linter warnings and errors can be automatically fixed:

<!--yarn(lint-and-fix)-->

```sh
yarn lint-and-fix
```

<!--/yarn(lint-and-fix)-->

### Running tests

Whenever possible, add tests to describe exactly what your code do. You can run them by yourself:

<!--yarn(test)-->

```sh
yarn test
```

<!--/yarn(test)-->
