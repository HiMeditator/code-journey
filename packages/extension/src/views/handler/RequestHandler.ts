import * as vscode from 'vscode';
import { MessageSender } from './MessageSender';

export class RequestHandler {
  static handleRequest(message: any) {
    console.log('Plugin receive:', JSON.stringify(message));
    switch(message.command) {
      case 'info.show':
        vscode.window.showInformationMessage(message.text);
        break;
      case 'time.get':
        MessageSender.send({
          command: 'time.send',
          time: new Date().toLocaleTimeString(),
        });
        break;
    }
  }
}