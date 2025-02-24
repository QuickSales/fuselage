---
to: packages/<%=package%>/package.json
---
{
  "name": "@quickchat.vn/<%=package%>",
  "version": "<%=version%>",
  "description": "<%=description%>",
  "author": {
    "name": "QuickSales.Vn",
    "url": "https://quickchat.vn/"
  },
  "homepage": "https://github.com/QuickSales/fuselage#readme",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/QuickSales/fuselage.git",
    "directory": "packages/<%=package%>"
  },
  "bugs": {
    "url": "https://github.com/QuickSales/fuselage/issues"
  },
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "types": "dist/esm/index.d.ts",
  "files": [
    "/dist"
  ],
  "scripts": {
    "clean": "rimraf dist",
    "build": "run .:build:esm && run .:build:cjs",
    ".:build:esm": "tsc -p tsconfig-esm.json",
    ".:build:cjs": "tsc -p tsconfig-cjs.json",
    "lint": "lint",
    "lint-and-fix": "lint-and-fix",
    "lint-staged": "lint-staged",
    "test": "jest --runInBand",
    "docs": "typedoc"
  },
  "devDependencies": {
    "@quickchat.vn/eslint-config-alt": "workspace:~",
    "@quickchat.vn/prettier-config": "workspace:~",
    "@types/jest": "~27.4.0",
    "eslint": "~8.8.0",
    "jest": "~27.5.1",
    "lint-all": "workspace:~",
    "lint-staged": "~12.3.3",
    "prettier": "~2.5.1",
    "rimraf": "~3.0.2",
    "ts-jest": "~27.1.3",
    "typedoc": "~0.22.11",
    "typescript": "~4.3.5"
  },
  "eslintConfig": {
    "extends": "@quickchat.vn/eslint-config-alt/typescript",
    "env": {
      "jest": true
    }
  },
  "prettier": "@quickchat.vn/prettier-config/fuselage",
  "jest": {
    "preset": "ts-jest",
    "errorOnDeprecated": true,
    "testMatch": [
      "<rootDir>/src/**/*.spec.[jt]s?(x)"
    ],
    "globals": {
      "ts-jest": {
        "tsconfig": {
          "noUnusedLocals": false,
          "noUnusedParameters": false
        }
      }
    }
  }
}
