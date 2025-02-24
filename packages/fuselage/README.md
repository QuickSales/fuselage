<!--header-->

<p align="center">
  <a href="https://quickchat.vn" title="QuickSales.Vn">
    <img src="https://github.com/QuickSales/QuickSales.Vn.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="QuickSales.Vn" />
  </a>
</p>

# `@quickchat.vn/fuselage`

> QuickSales.Vn's React Components Library

---

[![npm@latest](https://img.shields.io/npm/v/@quickchat.vn/fuselage/latest?style=flat-square)](https://www.npmjs.com/package/@quickchat.vn/fuselage/v/latest) [![npm@next](https://img.shields.io/npm/v/@quickchat.vn/fuselage/next?style=flat-square)](https://www.npmjs.com/package/@quickchat.vn/fuselage/v/next) ![react version](https://img.shields.io/npm/dependency-version/@quickchat.vn/fuselage/peer/react?style=flat-square) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://rocketchat.github.io/fuselage/fuselage) ![npm downloads](https://img.shields.io/npm/dw/@quickchat.vn/fuselage?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@quickchat.vn/fuselage?style=flat-square)

![deps](https://img.shields.io/librariesio/release/npm/@quickchat.vn/fuselage?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@quickchat.vn/fuselage?style=flat-square)

<!--/header-->

## Install

<!--install-->

Firstly, install the peer dependencies (prerequisites):

```sh
npm i @quickchat.vn/fuselage-hooks @quickchat.vn/fuselage-polyfills @quickchat.vn/icons react react-dom react-virtuoso

# or, if you are using yarn:

yarn add @quickchat.vn/fuselage-hooks @quickchat.vn/fuselage-polyfills @quickchat.vn/icons react react-dom react-virtuoso
```

Add `@quickchat.vn/fuselage` as a dependency:

```sh
npm i @quickchat.vn/fuselage

# or, if you are using yarn:

yarn add @quickchat.vn/fuselage
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

### Component stories

We develop and describe our visual components in the form of stories, manage by a tool called [Storybook](https://storybook.js.org/).
To start developing with Storybook, run:

<!--yarn(storybook)-->

```sh
yarn storybook
```

<!--/yarn(storybook)-->

### Usage

Note: If you are using Next.js for development and wish to use QuickSales.Vn Fuselage components, you need to dynamically import the component. More on this can be found [here](https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97#3-third-solution-dynamic-loading).

Usage Example:

```javascript
import dynamic from 'next/dynamic';

export const TextInput = dynamic(
  () => import('@quickchat.vn/fuselage').then((module) => module.TextInput),
  { ssr: false }
);
```
