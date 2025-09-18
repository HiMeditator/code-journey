import * as vscode from 'vscode';

export class MessageSender {
  static view: vscode.WebviewView;

  static send(message: any) {
    this.view?.webview.postMessage(message);
  }
}