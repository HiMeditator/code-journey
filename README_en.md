<div align="center">
  <img src="./packages/extension/assets/icons/code-journey.svg" width="90px" height="90px"/>
  <h1 align="center">code-journey</h1>
  <p>Code Journey is a VS Code extension for recording and visualizing your coding journey.</p>
  <p>
    <a href="https://github.com/HiMeditator/code-journey/releases"><img src="https://img.shields.io/badge/release-none-blue"></a>
    <a href="https://github.com/HiMeditator/code-journey/issues"><img src="https://img.shields.io/github/issues/HiMeditator/code-journey?color=orange"></a>
    <img src="https://img.shields.io/github/languages/top/HiMeditator/code-journey?color=royalblue">
    <img src="https://img.shields.io/github/repo-size/HiMeditator/code-journey?color=green">
  </p>
  <p>
    | <a href="./README.md">简体中文</a>
    | <b>English</b> |
  </p>
  <p><i>This project is in early development and has not been released yet...</i></p>
</div>

## ✨ Features

> These features are planned but not yet implemented

- [ ] Data Statistics
  - [ ] Record programming time
  - [ ] Record programming behaviors
  - [ ] Record programming languages
  - [ ] Code repository statistics
- [ ] Data Visualization
  - [ ] Programming time visualization
  - [ ] Programming behavior visualization
  - [ ] Programming language visualization
  - [ ] Code repository visualization
- [ ] Additional Features
  - [ ] Count lines of code in the current repository

## 🔒 Data Privacy Statement

The extension will collect and process user behavior data in the IDE, and all collected data will only be stored locally on the user's device and will not be uploaded to any server.

Data will be saved in the `.code-journey` folder under the user's directory, and users can handle the data in this folder by themselves. Data storage paths for different operating systems:
- Windows: `C:\Users\Username\.code-journey`
- macOS: `/Users/Username/.code-journey`
- Linux: `/home/Username/.code-journey`

This extension can be used in various VS Code-based IDEs (Cursor, Windsurf, Trae, Codebuddy, etc.), and the saved data is compatible across these IDEs.

## ⚛️ Tech Stack

- TypeScript
- Node.js
- VS Code Extension API
- React
- Tailwind CSS

## 🚀 Project Setup

### Install Dependencies

If you don't have `pnpm` installed, first run `npm install -g pnpm` to install `pnpm`.

```bash
pnpm install
```

### Run Front-end

The front-end run with this command is not connected to VS Code and cannot interact.

```bash
pnpm dev
```

### Build Front-end Content into Extension

Each time you modify the front-end part, you need to run this command to update the content in the extension.

```bash
pnpm build
```

### Run Extension

Using VS Code, find `Run > Start Debugging` to run the extension. Windows users can use the `F5` shortcut to run the extension.

### Package Extension

Before packaging, make sure front-end changes have been updated to the extension via `pnpm build`.

```bash
pnpm package
```