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
        `Welcome to the praiseworthy ${chalk.red(
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
      // Ask user for project name
      {
        type: "input",
        name: "appName",
        message: "Your project name",
        default: this.appname,
      },
      {
        type: "input",
        name: "appStartVersion",
        message: "Project version",
        default: "0.0.0",
      },
      {
        type: "input",
        name: "appDescription",
        message: "Project description:",
      },
      {
        type: "input",
        name: "appAuthorName",
        message: "Your name:",
        default: this.user.git.name,
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.composeWith(require.resolve("generator-license"), {
        name: this.props.appAuthorName,
      });
    });
  }

  writing() {
    // Copying all config files to project root directory
    this.fs.copy(
      this.templatePath(".eslintrc.json.temp"),
      this.destinationPath(".eslintrc.json")
    );
    this.fs.copy(
      this.templatePath(".prettierignoreTemp"),
      this.destinationPath(".prettierignore")
    );
    this.fs.copy(
      this.templatePath(".prettierrc.json.temp"),
      this.destinationPath(".prettierrc.json")
    );
    this.fs.copy(
      this.templatePath("jest.config.js.temp"),
      this.destinationPath("jest.config.js")
    );
    this.fs.copyTpl(
      this.templatePath("package.json.temp"),
      this.destinationPath("package.json"),
      {
        packageAppName: this.props.appName,
        packageAppStartVersion: this.props.appStartVersion,
        packageAppDescription: this.props.appDescription,
        packageAppAuthor: this.props.appAuthorName,
      }
    );
    this.fs.copy(
      this.templatePath("tsconfig.json.temp"),
      this.destinationPath("tsconfig.json")
    );
    this.fs.copy(
      this.templatePath("tsc-multi.json.temp"),
      this.destinationPath("tsc-multi.json")
    );
    // Creating project directory
    fse.ensureDir("./src");
    fse.ensureDir("./build");
    fse.ensureDir("./__tests__");
  }

  install() {
    this.installDependencies({
      bower: false,
    });
  }
};
