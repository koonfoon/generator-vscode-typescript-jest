# generator-vscode-typescript-jest [![NPM version][npm-image]][npm-url][![coverage](https://github.com/koonfoon/generator-vscode-typescript-jest/actions/workflows/node-jest-test.yml/badge.svg)](https://github.com/koonfoon/generator-vscode-typescript-jest/actions/workflows/node-jest-test.yml)

## Description

vscode with typescript and jest project generator. This package generate the project skeleton for visual studio code that use [typescript](https://www.typescriptlang.org/) as source code, and [jest](https://jestjs.io/) for unit test, [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for linting and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for prettier codes. This generator also compose with [generator-license](https://github.com/jozefizso/generator-license).

This generator will also setup [tsup](https://github.com/egoist/tsup), a tool for bundling codes into commonjs and esm at the same time.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-vscode-typescript-jest using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-vscode-typescript-jest
```

Then generate your new project:

```bash
yo vscode-typescript-jest
```

> **Note**  
> You should run `npx ncu` check and update the dependencies, as newer version may had released since the publication of this generator.

## Directory structure

- `./src` All the source codes go into this directory.
- `./dist` All built/transpile codes will output to this directory.
- `./__tests__` All test codes should go into this directory.

## cli commands

- Run jest test

  ```bash
  npm run test
  ```

- If you just want to transpile typescript with tsc

  ```bash
  npm run tsc
  ```

- Auto restart when changes are saved

  ```bash
  npm run dev
  ```

- Output codes to commonjs & esm format at the same time

  ```bash
  npm run build:tsup
  ```

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [koonfoon]()

[npm-image]: https://badge.fury.io/js/generator-vscode-typescript-jest.svg
[npm-url]: https://npmjs.org/package/generator-vscode-typescript-jest
