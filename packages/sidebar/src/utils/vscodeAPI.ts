declare const acquireVsCodeApi: () => {
  postMessage: (data: unknown) => unknown;
};

export const vscode = (typeof acquireVsCodeApi === 'function') ? acquireVsCodeApi() : undefined;

export function postMessage(message: unknown) {
  if (vscode) {
    vscode.postMessage(message);
  }
  else {
    console.log('acquireVsCodeApi is not ready');
  }
}