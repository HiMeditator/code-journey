import * as vscode from 'vscode';
import { MessageSender } from './MessageSender';

export class RequestHandler {
  static handleRequest(message: any) {
    console.log('Plugin receive:', JSON.stringify(message));
    switch(message.command) {
      case 'ui.init.ready':
        RequestHandler.ready();
        break;
    }
  }

  static ready() {
    MessageSender.send({
      command: 'vsc.language.set',
      language: vscode.env.language === 'zh-cn' ? 'zh' : 'en',
    });
  }
}