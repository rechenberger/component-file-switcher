'use strict';
import * as vscode from 'vscode';
import * as _ from "lodash";

export function switchTo(extension:string) {

    // Get Current File
    const filename = _.get(vscode, "window.activeTextEditor.document.fileName")
    if(!filename) return;

    // Create New Filename
    const splits = filename.split('.');
    const currentExtension = splits.pop()
    const commonFilename = splits.join('.')
    const newFilename = commonFilename + '.' + extension

    // Close Active Editor

    // Open New Document
    vscode.workspace.openTextDocument(newFilename)
        .then(
            document => {
                vscode.commands.executeCommand("workbench.action.closeActiveEditor")
                    .then(() => vscode.window.showTextDocument(document))
            },
            err => null)
        // .then(console.log)
}