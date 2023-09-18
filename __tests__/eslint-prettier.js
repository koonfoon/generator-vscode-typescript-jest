"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-vscode-typescript-jest:eslint-prettier", () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/eslint-prettier"));
  });

  it("creates files", () => {
    assert.file([".eslintrc.json", ".prettierrc.json", "package.json"]);
  });
});
