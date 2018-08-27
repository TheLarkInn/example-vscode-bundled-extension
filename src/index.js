import * as vscode from "vscode";

/**
 * @param {vscode.ExtensionContext} context
 * @returns {void}
 */
const activate = context => {
  console.log(context);
  vscode.window.showInformationMessage("Hello world!");
};

const deactivate = () => {
  console.log("some disposable");
};

export { activate, deactivate };
