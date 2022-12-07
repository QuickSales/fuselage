<!--header-->

<p align="center">
  <a href="https://quickchat.vn" title="QuickSales.Vn">
    <img src="https://github.com/QuickSales/QuickSales.Vn.Artwork/raw/master/Logos/2020/png/logo-horizontal-red.png" alt="QuickSales.Vn" />
  </a>
</p>

# `@quickchat.vn/message-parser`

> QuickSales.Vn parser for messages

---

[![npm@latest](https://img.shields.io/npm/v/@quickchat.vn/message-parser/latest?style=flat-square)](https://www.npmjs.com/package/@quickchat.vn/message-parser/v/latest) [![npm@next](https://img.shields.io/npm/v/@quickchat.vn/message-parser/next?style=flat-square)](https://www.npmjs.com/package/@quickchat.vn/message-parser/v/next) ![npm downloads](https://img.shields.io/npm/dw/@quickchat.vn/message-parser?style=flat-square) ![License: MIT](https://img.shields.io/npm/l/@quickchat.vn/message-parser?style=flat-square)

![deps](https://img.shields.io/librariesio/release/npm/@quickchat.vn/message-parser?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@quickchat.vn/message-parser?style=flat-square)

<!--/header-->

## Description

QuickSales.Vn grammar with the purpose of parsing the messages of the quickchat.vn, converting text to an AST tree.

The grammar provides support for markdown, mentions and emojis.

## Supported markup

- quotes
- bold/italic/strike
- ordered lists
- unordered lists
- task lists
- phone numbers
- mentions
- emoji
- colors
- URI's
- mentions users/channels

## Contributing

<!--contributing(msg)-->

Contributions, issues, and feature requests are welcome!<br />
Feel free to check the [issues](https://github.com/QuickSales/fuselage/issues).

<!--/contributing(msg)-->

Whenever you find a grammar-related bug, start by inserting the test case.

We are open to other tags/markups, as long as they don't generate unexpected behavior.

## Observations and known issues

- Nested lists are unsupported
- `URL` rule doesn't allow whitespace, `(`, or `)`
