// // The module 'vscode' contains the VS Code extensibility API
// // Import the module and reference it with the alias vscode in your code belowhttps://www.youtube.com/watch?v=_K-eupuDVEc
// import * as vscode from 'vscode';
// import { HelloWorldPanel } from './HelloWorldPanel';
// import { SidebarProvider } from './SidebarProvider';
// import { authenticate } from './authenticate';
// import { TokenManager, UserManager } from './TokenManager';
// import { checkCommand } from './checkCommand';


const GITHUB_AUTH_PROVIDER_ID = 'github';
const SCOPES = ['user:email', 'gist'];


// export function activate(context: vscode.ExtensionContext) {
	
// 	const sidebarProvider = new SidebarProvider(context.extensionUri);
//     TokenManager.globalState = context.globalState;
// 	UserManager.globalState = context.globalState;
	
// 	const item  = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
// 	item.text = "Add todo";
// 	item.command = 'zest-b.addSnippet';
// 	item.show();

// 	context.subscriptions.push(vscode.languages.registerCompletionItemProvider(
// 		{ pattern: '**' }, // For all files
// 		{
// 			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position,) {
// 				const line = document.lineAt(position).text;
// 				const prefix = line.slice(0, position.character);

// 				if (prefix.endsWith('/zist')) {
// 					return fetchGists(); // You'll define this next
// 				}

// 				return undefined;
// 			},
// 			triggerCharacters: [':']
// 		},
// 		{
// 			':'
// 		}
// 	));


// 	// context.subscriptions.push(vscode.commands.registerCommand('zest-b.helloWorld', () => {
// 	// 	// HelloWorldPanel.createOrShow(context.extensionUri);
// 	// 	vscode.window.showInformationMessage('your token is: '+ TokenManager.getToken());
// 	// 	vscode.window.showInformationMessage('your user is' + UserManager.getUser());
// 	// }));

// 	// context.subscriptions.push(vscode.commands.registerCommand('zest-b.authenticate', () => {
// 	// 		try{
// 	// 			authenticate();
// 	// 		} catch{
// 	// 			// TODO: handle this gracefully
// 	// 			console.error('Failed to initiate authentication');
// 	// 		}
// 	// }));

// 	// context.subscriptions.push(vscode.commands.registerCommand("zest-b.addSnippet", () => {
// 	// 	const { activeTextEditor } = vscode.window;

// 	// 	if(!activeTextEditor){
// 	// 		vscode.window.showInformationMessage("no active text editor");
// 	// 	}
	
// 	// 	const text = activeTextEditor?.document.getText(activeTextEditor.selection);
// 	// 	if(text){
// 	// 		vscode.window.showInformationMessage("Text: " + text);
// 	// 	}
// 	// 	sidebarProvider._view?.webview.postMessage({
// 	// 		type: 'new-todo',
// 	// 		value: text
// 	// 	});
// 	// 	// activeTextEditor?.document.getText(); 
// 	// 	//to get all the text in file
// 	// }
// 	// ));

// 	// context.subscriptions.push(vscode.commands.registerCommand('zest-b.askQuestion', async () => {
// 	// 	const answer = await vscode.window.showInformationMessage('How was your day?', "good", "bad");
// 	// 	if(answer === "good"){
// 	// 		vscode.window.showInformationMessage("Great nice to know about it ");
// 	// 	}
// 	// 	else{
// 	// 		vscode.window.showInformationMessage("How can your day be ");
// 	// 	}
// 	// }));
// }

// // This method is called when your extension is deactivated
// export function deactivate() {}


// async function fetchGists(): Promise<vscode.CompletionItem[]> {
//     // Fetch gists from GitHub
//     // const gists = await getGistsFromGitHub(); // Implement this function to fetch gists from GitHub
// 	console.log('THIS CALLED')
//     return [].map(gist => {
//         const completionItem = new vscode.CompletionItem(gist);
//         completionItem.insertText = gist; // Or however you want to structure the insert text
//         return completionItem;
//     });
// }


// import * as vscode from 'vscode';
// import { StubData, getSeperator, stubData } from './stubContent';
// // import axios from 'axios'

// function provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] | Thenable<vscode.CompletionItem[]> {
//     const data: StubData = stubData();
//     const seperator = getSeperator();


//         const completionItems: vscode.CompletionItem[] = (seperator).map(task => {
//             const item = new vscode.CompletionItem(task);
//             item.kind = vscode.CompletionItemKind.Text; // Set the kind of completion item (e.g., Text)

//             // Define a command that will be executed when the completion item is selected
//             item.command = {
//                 title: 'Insert and Call API',
//                 command: 'zest-b.insertAndCallAPI', // This should match the command defined below
//                 arguments: [task] // Pass the task name as an argument to the command
//             };

//             return item;
//         });

//         return completionItems;
    
// }

// export function activate(context: vscode.ExtensionContext) {
//     // Register the completion provider with trigger characters ['t', 'o', 'd', 'o', ':']
//     const completionProvider = vscode.languages.registerCompletionItemProvider(
// 		{ scheme: 'file', language: '*' },
// 		        {
//             provideCompletionItems,
// 			...['z','i','s','t']
//         },
//         ':'
//     );

//     context.subscriptions.push(completionProvider);

//     const insertAndCallAPICommand = vscode.commands.registerCommand('extension.insertAndCallAPI', async (task: string) => {
//         const editor = vscode.window.activeTextEditor;

//         if (editor) {
//             // Insert the selected task in the editor
//             editor.insertSnippet(new vscode.SnippetString(task), editor.selection.active);

//             // Call an API (replace with your actual API endpoint)
//             // try {
//             //     const response = await axios.get('https://api.example.com/todo', {
//             //         params: { task }
//             //     });
//             //     vscode.window.showInformationMessage(`API Response: ${response.data}`);
//             // } catch (error) {
//             //     vscode.window.showErrorMessage('Error calling API: ' + error.message);
//             // }
//         }
//     });
    
    
    // const callApiCommand = vscode.commands.registerCommand('extension.callApi', async () => {
    //     try {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    //         vscode.window.showInformationMessage(`API Response: ${JSON.stringify(response.data)}`);
    //     } catch (error) {
    //         vscode.window.showErrorMessage(`API Error: ${error}`);
    //     }
    // });
    
//     context.subscriptions.push(completionProvider);
// }


import * as vscode from 'vscode';
// import { HelloWorldPanel } from './HelloWorldPanel';
import { SidebarProvider } from './SidebarProvider';
// import { authenticate } from './authenticate';
import { UserManager } from './TokenManager';
import { ColorsViewProvider } from './ColorsViewProvider';
                    
export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	const colorProvider = new ColorsViewProvider(context.extensionUri);
    UserManager.globalState = context.globalState;

	const item  = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
	item.text = "Add todo";
	item.command = 'zest-b.addSnippet';
	item.show();
                    
    context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("zest-b-sidebar", sidebarProvider)
	  );

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(ColorsViewProvider.viewType, colorProvider)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('calicoColors.addColor', () => {
			colorProvider.addColor();
		}));

	context.subscriptions.push(
		vscode.commands.registerCommand('calicoColors.clearColors', () => {
			colorProvider.clearColors();
		}));

	  context.subscriptions.push(vscode.commands.registerCommand(
		'zest-b.getGitHubUser',
		async () => {
			const session = await vscode.authentication.getSession(
				GITHUB_AUTH_PROVIDER_ID,
				SCOPES,
				{ createIfNone: true }
			);
            if(session){

                UserManager.setUserObject({
                    accessToken: session.accessToken,
                    name: session.account.label,
                    scopes: session.scopes,
                });
            }
            else{
                const callbackMessage = await vscode.window.showErrorMessage('Failed to authenticate with github, Please try again', 'Retry');
                if(callbackMessage === 'Retry'){
                    vscode.commands.executeCommand('zest-b.getGitHubUser');
                }
                else{
                    return null;
                }
            }
                
		}
	));
                
	context.subscriptions.push(vscode.commands.registerCommand('zest-b.helloWorld', () => {
		// HelloWorldPanel.createOrShow(context.extensionUri);
		vscode.window.showInformationMessage('your token is: '+ JSON.stringify(UserManager.getUserObject()));
	}));

// 	context.subscriptions.push(vscode.commands.registerCommand('zest-b.authenticate', () => {
// 			try{
// 				authenticate();
// 			} catch{
// 				// TODO: handle this gracefully
// 				console.error('Failed to initiate authentication');
// }
// 	}));

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
