"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the lovely ${chalk.red(
          "generator-vscode-typescript-jest"
        )} generator!`
      )
    );

    const prompts = [];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath(".eslintrc.temp.json"),
      this.destinationPath(".eslintrc.json")
    );
    this.fs.copy(
      this.templatePath(".prettierrc.temp.json"),
      this.destinationPath(".prettierrc.json")
    );

    const pkgJson = {
      devDependencies: {
        "@typescript-eslint/eslint-plugin": "^5.38.0",
        "@typescript-eslint/parser": "^5.38.0",
        eslint: "^8.23.1",
        "eslint-config-prettier": "^8.5.0",
        "eslint-plugin-prettier": "^4.2.1",
        prettier: "^2.7.1"
      }
    };

    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }
};
