"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-vscode-typescript-jest:app", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      someAnswer: true,
      appName: "App test name",
      appStartVersion: "1.0.1",
      appDescription: "App test description",
      license: "MIT",
    });
  });

  it("creates files", () => {
    assert.file([
      ".eslintrc.json",
      ".prettierignore",
      ".prettierrc.json",
      "jest.config.js",
      "package.json",
      "tsconfig.json",
    ]);
  });
});
