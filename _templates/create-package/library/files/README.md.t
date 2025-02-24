---
to: packages/<%=package%>/README.md
---

<!--header-->

<p align="center">
  <a href="https://quickchat.vn" title="QuickSales.Vn">
    <img src="https://github.com/QuickSales/QuickSales.Vn.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="QuickSales.Vn" />
  </a>
</p>

# `@quickchat.vn/<%=package%>`

> <%=description%>

---

![npm@latest](https://img.shields.io/npm/v/@quickchat.vn/<%=package%>/latest?style=flat-square) ![npm@next](https://img.shields.io/npm/v/@quickchat.vn/<%=package%>/next?style=flat-square) ![npm downloads](https://img.shields.io/npm/dw/@quickchat.vn/<%=package%>?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@quickchat.vn/<%=package%>?style=flat-square)

![deps](https://img.shields.io/david/QuickSales/fuselage?path=packages%2F<%=package%>&style=flat-square) ![peer deps](https://img.shields.io/david/peer/QuickSales/fuselage?path=packages%2F<%=package%>&style=flat-square) ![dev deps](https://img.shields.io/david/dev/QuickSales/fuselage?path=packages%2F<%=package%>&style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@quickchat.vn/<%=package%>?style=flat-square)

<!--/header-->

## Install

<!--install-->

Add `@quickchat.vn/<%=package%>` as a dependency:

```sh
npm i @quickchat.vn/<%=package%>

# or, if you are using yarn:

yarn add @quickchat.vn/<%=package%>
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
