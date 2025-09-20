<div align="center" >
  <img src="./packages/extension/assets/icons/code-journey.svg" width="90px" height="90px"/>
  <h1 align="center">code-journey</h1>
  <p>Code Journey 是一个用于记录和可视化你的编程经历的 VS Code 插件。</p>
  <p>
    <a href="https://github.com/HiMeditator/code-journey/releases"><img src="https://img.shields.io/badge/release-none-blue"></a>
    <a href="https://github.com/HiMeditator/code-journey/issues"><img src="https://img.shields.io/github/issues/HiMeditator/code-journey?color=orange"></a>
    <img src="https://img.shields.io/github/languages/top/HiMeditator/code-journey?color=royalblue">
    <img src="https://img.shields.io/github/repo-size/HiMeditator/code-journey?color=green">
  </p>
  <p>
    | <b>简体中文</b>
    | <a href="./README_en.md">English</a> |
  </p>
  <p><i>该项目正在初步开发中，尚未正式发布...</i></p>
</div>

## ✨ 特性

> 这些特性为计划中的特性，尚未正式实现

- [ ] 数据统计
  - [ ] 记录编程时间
  - [ ] 记录编程行为
  - [ ] 记录编程语言
  - [ ] 代码仓库统计
- [ ] 数据可视化
  - [ ] 编程时间可视化
  - [ ] 编程行为可视化
  - [ ] 编程语言可视化
  - [ ] 代码仓库可视化
- [ ] 额外功能
  - [ ] 统计当前仓库的代码行数

## 🔒 数据隐私说明

插件会收集和处理用户在 IDE 中的行为数据，所有收集的数据都只会被保存在用户本地，不会被上传到任何服务器。

数据将会保存在用户目录下的 `.code-journey` 文件夹中，用户可以自行处理该文件夹中的数据。不同操作系统数据的保存路径：
- Windows: `C:\Users\Username\.code-journey`
- macOS: `/Users/Username/.code-journey`
- Linux: `/home/Username/.code-journey`

该插件可以在多种基于 VS Code 的 IDE 中使用（Cursor、Windsurf、Trae、Codebuddy 等），保存的数据在这些 IDE 中是通用的。

## ⚛️ 技术栈

- TypeScript
- Node.js
- VS Code Extension API
- React
- Tailwind CSS

## 🚀 项目运行

### 安装依赖

如果环境没有 `pnpm` 先执行 `npm install -g pnpm` 安装 `pnpm`。

```bash
pnpm install
```

### 运行前端

通过此命令运行的前端没有接入 VS Code，无法进行交互。

```bash
pnpm dev
```

### 打包前端内容到插件

每次修改完前端部分需要执行该命令才能将内容更新到插件中。

```bash
pnpm build
```

### 运行插件

使用 VS Code，找到 `运行 > 启动调试` 运行插件。Windows 用户可以通过快捷键 `F5` 运行插件。

### 打包插件

打包前请确保前端更改已经通过 `pnpm build` 更新到插件中。

```bash
pnpm package
```