// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code belowhttps://www.youtube.com/watch?v=_K-eupuDVEc
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {
	const sidebarProvider = new SidebarProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("zest-b-sidebar", sidebarProvider)
	  );

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
