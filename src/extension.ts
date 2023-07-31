// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code belowhttps://www.youtube.com/watch?v=_K-eupuDVEc
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';
import { SidebarProvider } from './SidebarProvider';
import { authenticate } from './authenticate';
import { TokenManager } from './TokenManager';

export function activate(context: vscode.ExtensionContext) {
	
	const sidebarProvider = new SidebarProvider(context.extensionUri);
    TokenManager.globalState = context.globalState;
	
	const item  = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
	item.text = "Add todo";
	item.command = 'zest-b.addSnippet';
	item.show();

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("zest-b-sidebar", sidebarProvider)
	  );

	context.subscriptions.push(vscode.commands.registerCommand('zest-b.helloWorld', () => {
		// HelloWorldPanel.createOrShow(context.extensionUri);
		vscode.window.showInformationMessage('your token is: '+ TokenManager.getToken());
	}));

	context.subscriptions.push(vscode.commands.registerCommand('zest-b.authenticate', () => {
			try{
				authenticate();
			} catch{
				// TODO: handle this gracefully
				console.error('Failed to initiate authentication');
			}
	}));

	context.subscriptions.push(vscode.commands.registerCommand("zest-b.addSnippet", () => {
		const { activeTextEditor } = vscode.window;

		if(!activeTextEditor){
			vscode.window.showInformationMessage("no active text editor");
		}

		const text = activeTextEditor?.document.getText(activeTextEditor.selection);
		if(text){
			vscode.window.showInformationMessage("Text: " + text);
		}
		sidebarProvider._view?.webview.postMessage({
			type: 'new-todo',
			value: text
		});
		// activeTextEditor?.document.getText(); 
		//to get all the text in file
	}
	));

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
