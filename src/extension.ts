// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code belowhttps://www.youtube.com/watch?v=_K-eupuDVEc
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

export function activate(context: vscode.ExtensionContext) {
console.log('Congratulations, your extension "zest-b" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('zest-b.helloWorld', () => {
		HelloWorldPanel.createOrShow(context.extensionUri);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('zest-b.askQuestion', async () => {
		const answer = await vscode.window.showInformationMessage('How was your day?', "good", "bad");
		if(answer === "good"){
			vscode.window.showInformationMessage("Great nice to know about it ");
		}
		else{
			vscode.window.showInformationMessage("How can your day be ");
		}
	}));
}

// This method is called when your extension is deactivated
export function deactivate() {}

//     "watch": "webpack --watch",

// "vscode:prepublish": "npm run package",
// "compile": "webpack --config ./build/node-extension.webpack.config.js",
// "watch": "concurrently \"rollup -c -w\" \"webpack --watch --config ./build/node-extension.webpack.config.js\"",
// "package": "webpack --mode production --devtool hidden-source-map --config ./build/node-extension.webpack.config.js",
// "compile-tests": "tsc -p . --outDir out",
// "watch-tests": "tsc -p . -w --outDir out",
// "pretest": "npm run compile-tests && npm run compile && npm run lint",
// "lint": "eslint src --ext ts",
// "test": "node ./out/test/runTest.js",