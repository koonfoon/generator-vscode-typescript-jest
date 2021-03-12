# generator-vscode-typescript-jest [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Description

vscode with typescript and jest project generator. This package generate the project skeleton for visual studio code that use [typescript](https://www.typescriptlang.org/) as source code, and [jest](https://jestjs.io/) for unit test, [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for linting and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for prettier codes. This generator also compose with [generator-license](https://github.com/jozefizso/generator-license).

## Prerequisite

Install the following extensions to vscode:

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Usage

#### Method 1:

In the project root directory, run [npm](https://www.npmjs.com/) command (we assume you have pre-installed latest [node.js](https://nodejs.org/)).

```bash
npm init yo vscode-typescript-jest
```

Or

#### Method 2:

Install [Yeoman](http://yeoman.io) and generator-vscode-typescript-jest using [npm](https://www.npmjs.com/).

```bash
npm install -g yo
npm install -g generator-vscode-typescript-jest
```

Then on project root directory generate your new project:

```bash
yo vscode-typescript-jest
```

#### The following will be generated on the project root directory:

Files:

- .eslintrc.json
- .prettierignore
- .prettierrc.json
- jest.config.js
- package.json
- tsconfig.json
- LICENSE

Directories:

- ./src (typescript source codes go here)
- ./\_\_tests\_\_ (test codes go here)
- ./build (auto transpiled javascript generate here)

## No .git

This generator will not generate .git. Please run `git init` command yourself.

## Recommended actions after project skeleton is generated

- Execute `git init`. As mentioned above, no .git is generated
- Use [GitVersion](https://gitversion.net/docs/why) along side with git.

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## Change logs

- v0.2.38
  - change .eslintrc.js to json file (work better with vscode v1.53)
  - change .prettierrc.js to json file (work better with vscode v1.53)

## License

MIT © [koonfoon]()

[npm-image]: https://badge.fury.io/js/generator-vscode-typescript-jest.svg
[npm-url]: https://npmjs.org/package/generator-vscode-typescript-jest
[travis-image]: https://travis-ci.com/koonfoon/generator-vscode-typescript-jest.svg?token=yJgkyS3HsipTuKYxttC9&branch=develop
[travis-url]: https://travis-ci.com/koonfoon/generator-vscode-typescript-jest
[daviddm-image]: https://david-dm.org/koonfoon/generator-vscode-typescript-jest.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/koonfoon/generator-vscode-typescript-jest
[coveralls-image]: https://coveralls.io/repos/github/koonfoon/generator-vscode-typescript-jest/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/koonfoon/generator-vscode-typescript-jest
