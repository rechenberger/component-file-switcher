'use strict';
import * as vscode from 'vscode';
import * as _ from "lodash";
import { switchTo } from "./switch";

const fileExtensions = ["html", "scss", "ts"]

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "component-file-switcher" is now active!');

    const disposables = _.map(fileExtensions, ext => vscode.commands.registerCommand(`extension.switchTo${ext}`, () => {
        switchTo(ext)
    }))

    disposables.push(vscode.commands.registerCommand('extension.switchTo', () => {
        vscode.window.showQuickPick(fileExtensions)
            .then(extension => {
               switchTo(extension); 
            });
    }));

    context.subscriptions.push(...disposables)
}

// this method is called when your extension is deactivated
export function deactivate() {
}