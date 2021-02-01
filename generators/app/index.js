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
        message: "Project description",
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // Copying all config files to project root directory
    this.fs.copy(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath(".prettierignore"),
      this.destinationPath(".prettierignore")
    );
    this.fs.copy(
      this.templatePath(".prettierrc.js"),
      this.destinationPath(".prettierrc.js")
    );
    this.fs.copy(
      this.templatePath("jest.config.js"),
      this.destinationPath("jest.config.js")
    );
    // This.fs.copy(
    //   this.templatePath("package-lock.json"),
    //   this.destinationPath("package-lock.json")
    // );
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      { packageAppName: this.props.appName }
    );
    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
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
