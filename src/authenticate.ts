import * as vscode from "vscode";
import { apiBaseUrl } from "./constants";
import * as polka from 'polka';
import { TokenManager } from "./TokenManager";

export const authenticate = () => {

    // we only want to run the server when authenticate is prompted, else its idle server
    const app = polka();

    app.get(`/auth/:token`, async(req, res)=>{
        const { token } = req.params;
        if(!token){
            res.end('<h1>Something went wrong</h1>');
            return;
        }
            await TokenManager.setToken(token);

            res.end('<h1>Authenticated successfully, please close this now</h1>');

            // after the auth is done, we don't want the server to run
            (app as any).server.close();

    });
    
    app.listen(54321, (err: Error) => {
        if(err){
            vscode.window.showErrorMessage(err.message);
        } else {
            vscode.commands.executeCommand(
                "vscode.open",
                vscode.Uri.parse(`${apiBaseUrl}/auth/github`)
                );
            }            
        
            
    });
};