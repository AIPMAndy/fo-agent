# 🤖 fo-agent

> 打造你的 AI Twin，让 AI 替你发声、涨粉、赚钱

[演示 Demo](https://aipmandy.github.io/fo-agent/) · [English](README_EN.md) · [快速开始](#快速开始) · [特性](#核心特性) · [接入 AI 模型](#接入-ai-模型)

---

## 😡 你受够了这些吗？

- **AI 写出来的内容永远"AI 味"太重**，一眼假
- 每次做账号运营都要**自己手动提问、自己回答**，累死
- 多个 AI 平台来回切换，**Prompt 模板散落一地**
- 想做一个能"**替你思考、替你输出**"的 AI 分身，却不知道怎么下手

**fo-agent 就是来解决这些问题的。**

---

## 💡 fo-agent 是什么？

一个**浏览器端 AI Agent 可视化工作台**，让你在本地快速构建、调试、部署 AI 分身。

- 零门槛：不需要写代码，**打开浏览器就能用**
- 支持多模型：OpenAI / Claude / Gemini / 本地模型（Ollama）
- **Dify 同步**：一键推送 Agent 到 Dify 作为后端服务
- 可交互 Playground：所见即所得的 AI 对话调试界面

---

## ⚡ 快速开始

### 方式一：直接打开演示（无需安装）

👉 **[点击打开 fo-agent 在线演示](https://aipmandy.github.io/fo-agent/)**

> 适合快速体验，无需配置任何 API Key

### 方式二：本地部署

```bash
# 克隆仓库
git clone https://github.com/AIPMAndy/fo-agent.git
cd fo-agent

# 用浏览器直接打开 index.html
open index.html
```

### 接入自己的 AI 模型

1. 打开 fo-agent 界面
2. 进入 **设置（Settings）**
3. 选择你的 AI 提供商（OpenAI / Claude / Gemini / Ollama）
4. 填入你的 API Key
5. 开始使用！

> ⚠️ **隐私声明**：你的 API Key 仅在本地浏览器中使用，**不会上传到任何第三方服务器**。

---

## 🔥 核心特性

| 特性 | 说明 |
|------|------|
| 🌐 **纯前端实现** | 无需后端服务，一个 HTML 文件完整运行 |
| 🔄 **多模型支持** | OpenAI / Claude / Gemini / Ollama |
| 🎭 **Agent 可视化** | 拖拽式构建你的 AI 分身 |
| 🔗 **Dify 同步** | 一键将 Agent 部署到 Dify |
| 🎨 **对话式 Playground** | 所见即所得的调试界面 |
| 🔒 **隐私优先** | API Key 完全在本地使用 |

---

## 🎯 适用场景

- **内容创作者**：打造一个 AI 分身帮你生产内容
- **开发者**：快速调试 AI Prompt，不用每次都调 API
- **产品经理**：原型验证 AI 产品思路
- **独立开发者**：用 fo-agent + Dify 快速搭建 AI 应用

---

## 🆚 对比其他工具

| 工具 | 部署难度 | 多模型 | Dify 同步 | 纯前端 |
|------|---------|--------|----------|--------|
| fo-agent | ⭐ 零门槛 | ✅ | ✅ | ✅ |
| Dify | 需要服务器 | ✅ | — | ❌ |
| LangFlow | 需要 Python 环境 | ✅ | ❌ | ❌ |
| OpenAI Playground | 需要联机 | 仅 OpenAI | ❌ | ❌ |

---

## 🛠️ 技术栈

- **前端**：原生 HTML + CSS + JavaScript（零依赖）
- **AI**：OpenAI API / Anthropic Claude / Google Gemini / Ollama
- **部署**：GitHub Pages（免费托管）

---

## 📦 部署到 GitHub Pages

```bash
# 1. Fork 本项目
# 2. 进入 Settings → Pages → Source → main branch
# 3. 等待 2-3 分钟，你的站点就上线了
```

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

## 📄 许可证

本项目采用 **Apache-2.0** 许可证 - 详见 [LICENSE](LICENSE) 文件

---

## 👤 作者

**Andy** · AI 产品专家 · 前腾讯/百度 AI 产品专家

- GitHub: [@AIPMAndy](https://github.com/AIPMAndy)
- 公众号：AI 产品圈

---

## 📌 关注我

如果你觉得 fo-agent 有用，欢迎：

- ⭐ **Star** 本项目
- 🍴 **Fork** 进行二次开发
- 🐛 提交 **Issue** 反馈问题
- 🙋 提 **PR** 贡献代码

你的支持是我持续维护的动力！
