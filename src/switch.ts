'use strict';
import * as vscode from 'vscode';
import * as _ from "lodash";

export function switchTo(extension:string) {
    const filename = _.get(vscode, "window.activeTextEditor.document.fileName")
    vscode.window.showInformationMessage("openfile " + filename)
}