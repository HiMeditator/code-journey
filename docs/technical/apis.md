## 说明

前端和插件通过 `vscode` 提供的接口进行通信。

### 通信方式

在插件端通过 `MessageSender.ts` 中的类发送消息给前端，通过 `RequestHandler.ts` 中实现的类接收前端消息。

在前端通过 `vscodeAPI.ts` 中 `postMessage` 函数来发送消息，在 `App.tsx` 中监听插件发送的消息，并更新到 `vscodeStore` 中。

### 消息格式

前端和插件发送的消息参数均为一个对象，且该对象必定包含 `command` 属性，用于标识消息的类型。参数中可能包含的其他属性，参考下面的内容。


## 前端可发送的消息

### `ui.init.ready`

前端组件初始化完成，可以开始工作了。

## 插件可发送的消息

### `vsc.language.set`

参数：

- `language`：当前语言，可选值为 `zh`、`en`。

设置当前界面语言。