"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const fse = require("fs-extra");

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

    const prompts = [
      // {
      //   type: "confirm",
      //   name: "someAnswer",
      //   message: "Would you like to enable this option?",
      //   default: true,
      // },

      // ASk for project/app name
      {
        type: "input",
        name: "appName",
        message: "Your project name",
        default: this.appname
      },

      // Project staring version
      {
        type: "input",
        name: "appStartVersion",
        message: "Project version",
        default: "0.0.0"
      },

      // Project description
      {
        type: "input",
        name: "appDescription",
        message: "Project description:"
      },

      // Project author name
      {
        type: "input",
        name: "appAuthorName",
        message: "Your name:",
        default: this.user.git.name
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.composeWith(require.resolve("generator-license"), {
        name: this.props.appAuthorName
      });
    });
  }

  writing() {
    // Cresting project directory
    fse.ensureDir("./src");
    fse.ensureDir("./dist");
    fse.ensureDir("./__tests__");

    this.fs.copy(
      this.templatePath(".eslintrc.temp.json"),
      this.destinationPath(".eslintrc.json")
    );
    this.fs.copy(
      this.templatePath(".gitignore.temp"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath(".prettierrc.temp.json"),
      this.destinationPath(".prettierrc.json")
    );
    this.fs.copy(
      this.templatePath("index.temp.ts"),
      this.destinationPath("./src/index.ts")
    );
    this.fs.copy(
      this.templatePath("jest.config.temp.js"),
      this.destinationPath("jest.config.js")
    );
    this.fs.copyTpl(
      this.templatePath("package.temp.json"),
      this.destinationPath("package.json"),
      {
        packageAppName: this.props.appName,
        packageAppStartVersion: this.props.appStartVersion,
        packageAppDescription: this.props.appDescription,
        packageAppAuthor: this.props.appAuthorName
      }
    );
    this.fs.copy(
      this.templatePath("tsconfig.temp.json"),
      this.destinationPath("tsconfig.json")
    );
  }
};
