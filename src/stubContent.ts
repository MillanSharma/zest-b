import axios from 'axios';
import * as vscode from 'vscode';
export interface StubData {
    tags:  string[];
    languages: string[];
    shortcuts: string[];
    filesize: string[];
    frequent: string[];
    zest: string[];
}

export type StubContentKeys = keyof StubData;

export const stubData = (): StubData => {
    return {
        tags: ['short_snippet','code_block'],
        languages: ['css','jsx','js','cjs','node','python','react'],
        shortcuts: ['trick','cheatsheet'],
        filesize: ['small','large','oneliner'],
        frequent: ['jsx','node','react'],
        zest: ['tags','languages','shortcuts','filesize','frequent'],
};
};

export const getSeperator = () =>{
    function getObjectKeysAsArray(obj: any): string[] {
        return Object.keys(obj);
    }
    const keysArray = getObjectKeysAsArray(stubData());
    return keysArray;
};

export const getValueForKey = (keyName: StubContentKeys): string[] => {
    const stubContent = stubData();
    return stubContent[keyName] || [];
};

export const generateCompletionItems = (prefix: StubContentKeys): vscode.CompletionItem[] => {

    const data = getValueForKey(prefix);
    const completionItems: vscode.CompletionItem[] = (data).map(item => 
        new vscode.CompletionItem(item, vscode.CompletionItemKind.File)
    );
    return completionItems;
};



// export async function fetchDataFromApi(): Promise<any[]> {
//     try {
//         const response = await axios.get('https://dummyjson.com/products/1');
//         const apiData: any[] = response.data;
//         return { 
//             'meta': { filesize: '40kb'}, 
//             snippets: [
//             {
//                 content:'async function generateSubgroupItems(subgroup: string): Promise<vscode.CompletionItem[]> {}'
//             },
//             {
//                 content: 'function generateBaseItems(baseLabels: string[]): vscode.CompletionItem[] { return baseLabels.map(label => new vscode.CompletionItem(label, vscode.CompletionItemKind.Snippet'
                
//             },
//             {
//                 content: "import * as vscode from vscode import axios from 'axios'; "
//             }
//         ]}
//     } catch (error) {
//         console.error('Error fetching data from API:', error);
//         return [];
//     }
// }