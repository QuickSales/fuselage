(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1027:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13);var colors=__webpack_require__(356),esm=__webpack_require__(137),create=__webpack_require__(247),package_0=__webpack_require__(357),logo=__webpack_require__.p+"static/media/logo.d570bdd1.svg";esm.a.setConfig({theme:Object(create.a)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.p500})})},356:function(module){module.exports=JSON.parse('{"d100":"#FFE9EC","d200":"#FFC1C9","d300":"#F98F9D","d400":"#F5495F","d500":"#EC0D2A","d600":"#D40C26","d700":"#BB0B21","d800":"#9B1325","d900":"#8B0719","i100":"#E8F2FF","i200":"#D1EBFE","i300":"#76B7FC","i400":"#549DF9","i500":"#156FF5","i600":"#095AD2","i700":"#10529E","i800":"#01336B","i900":"#012247","n100":"#f7f8fa","n200":"#f2f3f5","n300":"#eeeff1","n400":"#e4e7ea","n500":"#cbced1","n600":"#9ea2a8","n700":"#6c727a","n800":"#2f343d","n900":"#1f2329","p100":"#E8F2FF","p200":"#D1EBFE","p300":"#76B7FC","p400":"#549DF9","p500":"#156FF5","p600":"#095AD2","p700":"#10529E","p800":"#01336B","p900":"#012247","s100":"#E5FBF4","s200":"#C0F6E4","s300":"#96F0D2","s400":"#6CE9C0","s500":"#2DE0A5","s600":"#1ECB92","s700":"#19AC7C","s800":"#148660","s900":"#106D4F","s1-100":"#FDE8D7","s1-200":"#FAD1B0","s1-300":"#F7B27B","s1-400":"#F59B53","s1-500":"#F38C39","s1-600":"#E26D0E","s1-700":"#BD5A0B","s1-800":"#974809","s1-900":"#713607","s2-100":"#F9EFFC","s2-200":"#EDD0F7","s2-300":"#DCA0EF","s2-400":"#CA71E7","s2-500":"#9F22C7","s2-600":"#7F1B9F","s2-700":"#5F1477","s2-800":"#4A105D","s2-900":"#350B42","w100":"#FFF6D6","w200":"#FFECAD","w300":"#FFE383","w400":"#FFD95A","w500":"#FFD031","w600":"#F3BE08","w700":"#DFAC00","w800":"#B68D00","w900":"#8E6300","white":"#ffffff","b100":"#e8f2ff","b200":"#d1ebfe","b300":"#76b7fc","b400":"#549df9","b500":"#1d74f5","b600":"#095ad2","b700":"#10529e","b800":"#01336b","b900":"#012247","g100":"#e5fbf4","g200":"#c0f6e4","g300":"#96f0d2","g400":"#6ce9c0","g500":"#2de0a5","g600":"#1ecb92","g700":"#19ac7c","g800":"#158d65","g900":"#106d4f","r100":"#fddade","r200":"#fbb5be","r300":"#f98f9d","r400":"#f76a7d","r500":"#f5455c","r600":"#db0c27","r700":"#b30a20","r800":"#8b0719","r900":"#630512","y100":"#fff6d6","y200":"#ffecad","y300":"#ffe383","y400":"#ffd95a","y500":"#ffd031","y600":"#f3be08","y700":"#dfac00","y800":"#b68d00","y900":"#8e6d00","o100":"#fde8d7","o200":"#fad1b0","o300":"#f7b27b","o400":"#f59b53","o500":"#f38c39","o600":"#e26d0e","o700":"#bd5a0b","o800":"#974809","o900":"#713607"}')},357:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/fuselage-ui-kit","version":"0.31.18","description":"UiKit elements for Rocket.Chat Apps built under Fuselage design system","homepage":"https://rocketchat.github.io/Rocket.Chat.Fuselage/","author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"license":"MIT","repository":{"type":"git","url":"git+https://github.com/QuickSales/fuselage.git","directory":"packages/fuselage-ui-kit"},"bugs":{"url":"https://github.com/QuickSales/fuselage/issues"},"main":"dist/cjs/index.js","module":"dist/esm/index.js","types":"dist/esm/index.d.ts","files":["/dist"],"publishConfig":{"access":"public"},"scripts":{"build":"run-s .:build:clean .:build:esm .:build:cjs",".:build:clean":"rimraf dist",".:build:esm":"tsc -p tsconfig-esm.json",".:build:cjs":"tsc -p tsconfig-cjs.json","lint":"lint","lint-and-fix":"lint-and-fix","lint-staged":"lint-staged","docs":"cross-env NODE_ENV=production build-storybook -o ../../static/fuselage-ui-kit","storybook":"start-storybook -p 6006","build-storybook":"cross-env NODE_ENV=production build-storybook","bump-next":"bump-next"},"peerDependencies":{"@rocket.chat/fuselage":"*","@rocket.chat/fuselage-hooks":"*","@rocket.chat/fuselage-polyfills":"*","@rocket.chat/icons":"*","@rocket.chat/styled":"*","react":"^17.0.2","react-dom":"^17.0.2"},"devDependencies":{"@rocket.chat/apps-engine":"~1.30.0","@rocket.chat/eslint-config-alt":"workspace:~","@rocket.chat/fuselage":"workspace:~","@rocket.chat/fuselage-hooks":"workspace:~","@rocket.chat/fuselage-polyfills":"workspace:~","@rocket.chat/icons":"workspace:~","@rocket.chat/prettier-config":"workspace:~","@rocket.chat/styled":"workspace:~","@storybook/addon-essentials":"~6.4.18","@storybook/addons":"~6.4.18","@storybook/builder-webpack5":"~6.4.18","@storybook/manager-webpack5":"~6.4.18","@storybook/react":"~6.4.18","@storybook/source-loader":"~6.4.18","@storybook/theming":"~6.4.18","@types/react":"~17.0.39","@types/react-dom":"^17.0.11","babel-loader":"~8.2.3","bump":"workspace:~","cross-env":"^7.0.3","eslint":"~8.8.0","lint-all":"workspace:~","lint-staged":"~12.3.3","normalize.css":"^8.0.1","npm-run-all":"^4.1.5","prettier":"~2.5.1","react":"^17.0.2","react-dom":"^17.0.2","rimraf":"^3.0.2","typescript":"~4.3.5","webpack":"~5.68.0","write-version-module":"workspace:~"},"dependencies":{"@rocket.chat/ui-kit":"workspace:~","tslib":"^2.3.1"}}')},572:function(module,exports,__webpack_require__){__webpack_require__(573),__webpack_require__(1027),__webpack_require__(1019),__webpack_require__(1028),__webpack_require__(1020),__webpack_require__(1023),__webpack_require__(1022),__webpack_require__(1024),__webpack_require__(1021),__webpack_require__(1025),module.exports=__webpack_require__(1026)},658:function(module,exports){}},[[572,2,3]]]);