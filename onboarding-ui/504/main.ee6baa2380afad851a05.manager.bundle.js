(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1050:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13);var colors=__webpack_require__(360),esm=__webpack_require__(138),create=__webpack_require__(253),package_0=__webpack_require__(361),logo=__webpack_require__.p+"static/media/logo.d78c4948.svg";esm.a.setConfig({theme:Object(create.a)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.b500})})},360:function(module){module.exports=JSON.parse('{"n100":"#f7f8fa","n200":"#f2f3f5","n300":"#eeeff1","n400":"#e4e7ea","n500":"#cbced1","n600":"#9ea2a8","n700":"#6c727a","n800":"#2f343d","n900":"#1f2329","b100":"#e8f2ff","b200":"#d1ebfe","b300":"#76b7fc","b400":"#549df9","b500":"#1d74f5","b600":"#095ad2","b700":"#10529e","b800":"#01336b","b900":"#012247","g100":"#e5fbf4","g200":"#c0f6e4","g300":"#96f0d2","g400":"#6ce9c0","g500":"#2de0a5","g600":"#1ecb92","g700":"#19ac7c","g800":"#158d65","g900":"#106d4f","r100":"#fddade","r200":"#fbb5be","r300":"#f98f9d","r400":"#f76a7d","r500":"#f5455c","r600":"#db0c27","r700":"#b30a20","r800":"#8b0719","r900":"#630512","y100":"#fff6d6","y200":"#ffecad","y300":"#ffe383","y400":"#ffd95a","y500":"#ffd031","y600":"#f3be08","y700":"#dfac00","y800":"#b68d00","y900":"#8e6d00","p100":"#f9effc","p200":"#edd0f7","p300":"#dca0ef","p400":"#ca71e7","p500":"#9f22c7","p600":"#7f1b9f","p700":"#5f1477","p800":"#4a105d","p900":"#350b42","o100":"#fde8d7","o200":"#fad1b0","o300":"#f7b27b","o400":"#f59b53","o500":"#f38c39","o600":"#e26d0e","o700":"#bd5a0b","o800":"#974809","o900":"#713607","white":"#ffffff"}')},361:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/onboarding-ui","version":"0.27.0","description":"Set of components and functions for the onboarding experience on Rocket.Chat","keywords":["rocketchat"],"author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"homepage":"https://github.com/QuickSales/Rocket.Chat.Fuselage#readme","license":"MIT","publishConfig":{"access":"public"},"repository":{"type":"git","url":"git+https://github.com/QuickSales/Rocket.Chat.Fuselage.git","directory":"packages/onboarding-ui"},"main":"dist/cjs/index.js","module":"dist/esm/index.js","types":"dist/ts3.4/index.d.ts","files":["/dist"],"scripts":{"build":"run-s .:build:clean .:build:esm .:build:cjs .:build:ts3.4",".:build:clean":"rimraf dist",".:build:esm":"tsc -p tsconfig-esm.json",".:build:cjs":"tsc -p tsconfig-cjs.json",".:build:ts3.4":"downlevel-dts dist/esm/ dist/ts3.4/ --to=3.4","lint":"run-s .:lint:eslint .:lint:tsc",".:lint:eslint":"eslint src",".:lint:tsc":"tsc -p tsconfig.json --noEmit","lint-fix":"eslint --fix src","lint-staged":"lint-staged","test":"jest --runInBand","docs":"typedoc","storybook":"start-storybook -p 6006","build-storybook":"build-storybook","update-storybook":"run-s .:update-storybook:build-storybook .:update-storybook:loki-update",".:update-storybook:build-storybook":"run-s build-storybook",".:update-storybook:loki-update":"loki update --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static","loki:test":"loki test --chromeDockerImage=chinello/alpine-chrome:latest --chromeFlags=\\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\\" --verboseRenderer --requireReference --reactUri file:./storybook-static"},"bugs":{"url":"https://github.com/QuickSales/Rocket.Chat.Fuselage/issues"},"devDependencies":{"@rocket.chat/eslint-config-alt":"^0.27.0","@rocket.chat/fuselage-polyfills":"^0.27.0","@rocket.chat/fuselage-tokens":"^0.27.0","@rocket.chat/prettier-config":"^0.27.0","@storybook/addon-essentials":"^6.3.4","@storybook/addons":"^6.3.4","@storybook/react":"^6.3.4","@storybook/source-loader":"^6.3.4","@storybook/theming":"^6.3.4","@types/jest":"^26.0.24","@types/react":"^17.0.14","@types/react-dom":"^17.0.9","countries-list":"^2.6.1","downlevel-dts":"^0.7.0","eslint":"^7.29.0","jest":"^27.0.6","lint-staged":"^11.0.0","loki":"^0.28.1","npm-run-all":"^4.1.5","prettier":"^2.3.2","react":"^17.0.2","react-dom":"^17.0.2","rimraf":"^3.0.2","ts-jest":"^27.0.3","typedoc":"^0.21.2","typescript":"^4.3.4"},"dependencies":{"@rocket.chat/fuselage":"^0.27.0","@rocket.chat/fuselage-hooks":"^0.27.0","@rocket.chat/icons":"^0.27.0","@rocket.chat/styled":"workspace:packages/styled","i18next":"^20.3.2","react-hook-form":"^7.10.1","react-i18next":"^11.11.0","tslib":"^2.3.0"},"peerDependencies":{"@rocket.chat/fuselage-polyfills":"^0.27.0","react":"17.0.2","react-dom":"17.0.2"},"loki":{"configurations":{"desktop":{"target":"chrome.docker","width":1440,"height":896,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"tablet":{"target":"chrome.docker","width":768,"height":970,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"mobile":{"target":"chrome.docker","preset":"iPhone 7"}}}}')},575:function(module,exports,__webpack_require__){__webpack_require__(576),__webpack_require__(1050),__webpack_require__(1042),__webpack_require__(1051),__webpack_require__(1043),__webpack_require__(1046),__webpack_require__(1045),__webpack_require__(1047),__webpack_require__(1044),__webpack_require__(1048),module.exports=__webpack_require__(1049)},652:function(module,exports){}},[[575,2,3]]]);