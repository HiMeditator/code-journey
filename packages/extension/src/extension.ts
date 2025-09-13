import * as vscode from 'vscode';
import { SidebarViewProvider } from './views/SidebarViewProvider';

export function activate(context: vscode.ExtensionContext) {

  const sidebarViewProvider = new SidebarViewProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      SidebarViewProvider.viewType,
      sidebarViewProvider,
      { webviewOptions: { retainContextWhenHidden: true } }
    )
  );

  const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from extension!');
  });
  context.subscriptions.push(disposable);

}

export function deactivate() { }