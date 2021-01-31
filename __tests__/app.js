"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-vscode-typescript-jest:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file([
      ".eslintrc.js",
      ".gitignore",
      ".prettierignore",
      ".prettierrc.js",
      "jest.config.js",
      "package.json",
      "tsconfig.json",
    ]);
  });
});
