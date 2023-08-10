import * as vscode from 'vscode';
export const checkCommand =(context: vscode.ExtensionContext) => {
    const decorationType = vscode.window.createTextEditorDecorationType({
        backgroundColor: 'yellow',
        overviewRulerColor: 'red'
    });

    const activeEditor = vscode.window.activeTextEditor;
    console.log('ACTIVE EDITOR', activeEditor)
    if (activeEditor) {
        highlightTodoItems(activeEditor.document, decorationType);
    }

    vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            highlightTodoItems(editor.document, decorationType);
        }
    });

    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            highlightTodoItems(event.document, decorationType);
        }
    });
};

function highlightTodoItems(document: vscode.TextDocument, decorationType: vscode.TextEditorDecorationType) {
    const regex= /(^|\s)todo:/gi;
        const text = document.getText();
    console.log('TEXT',text);
    const todoMatches: vscode.DecorationOptions[] = [];
    let match;

    while ((match = regex.exec(text))) {
        const startPos = document.positionAt(match.index);
        const endPos = document.positionAt(match.index + match[0].length);
        const decoration = { range: new vscode.Range(startPos, endPos), hoverMessage: 'Todo Item' };
        todoMatches.push(decoration);
    }

    vscode.window.activeTextEditor?.setDecorations(decorationType, todoMatches);
}
