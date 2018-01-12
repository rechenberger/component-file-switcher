'use strict';
import * as vscode from 'vscode';
import * as _ from "lodash";
import { switchTo } from "./switch";
import { window, ThemeColor } from 'vscode';

const fileExtensions = ["html", "scss", "ts"]
const colors = ['#ff9800', '#c594ce', '#71d9e6']

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

    _.each(fileExtensions, (ext, index) => {
        const htmlBarItem = window.createStatusBarItem(vscode.StatusBarAlignment.Left);
        htmlBarItem.color = colors[index];
        htmlBarItem.command = `extension.switchTo${ext}`;
        htmlBarItem.text = ext.toUpperCase();
        htmlBarItem.tooltip = `Switch to ${ext.toUpperCase()}`;
        htmlBarItem.show();
    })
}

// this method is called when your extension is deactivated
export function deactivate() {
}
