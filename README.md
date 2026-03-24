# Fo-Agent: Your AI Twin That Engages Your Audience While You Sleep

<p align="center">
  <a href="https://github.com/AIPMAndy/fo-agent/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/AIPMAndy/fo-agent/ci.yml?branch=main&label=Build" alt="Build">
  </a>
  <a href="https://github.com/AIPMAndy/fo-agent/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
  <a href="https://github.com/AIPMAndy/fo-agent/stargazers">
    <img src="https://img.shields.io/github/stars/AIPMAndy/fo-agent?style=flat" alt="Stars">
  </a>
  <img src="https://img.shields.io/badge/AI-Agent-FF6B35?style=flat&logo=robot" alt="AI Agent">
</p>

---

## The Problem

You're a creator, founder, or thought leader. People want your attention — comments, follows, DMs — and you physically cannot respond to everyone.

So you do nothing. And that hurts your growth.

Existing "engagement tools" make it worse: spammy auto-bots that fire 50 likes per minute, generic auto-replies that feel like spam, or AI helpers that reply to the same person ten times a day until the recipient unfollows in frustration.

**You don't need more engagement. You need smarter engagement.**

---

## The Solution: One Shot, Daily

Fo-Agent is an AI agent that engages with each person **exactly once per day** — thoughtfully, in your voice, at scale.

Think of it as your digital twin. While you sleep, it:

- ✅ Follows back the people who followed you today
- ✅ Likes and comments on their recent posts — in a way that sounds like you
- ✅ Engages across Twitter/X, LinkedIn, Facebook, Instagram, GitHub, YouTube
- 🚫 Never spams the same person twice in one day
- 🚫 Never sends the same generic reply twice

**The result: your audience feels genuinely seen. Not botted.**

---

## Why "One Shot" Matters

Most engagement tools operate on volume: follow 500 people/hour, like 1000 posts/day. This is just noise.

Fo-Agent's one-shot constraint is a design decision, not a limitation:

| Approach | What happens | How it feels |
|----------|-------------|--------------|
| Manual | You engage with everyone (impossible at scale) | Burned out, inconsistent |
| Auto-bot | Mass follow/like (obvious spam) | Receivers feel used |
| **Fo-Agent** | One meaningful interaction/day/person | Receivers feel genuinely seen |

One genuine interaction is worth more than ten generic likes.

---

## How It Works

```
┌─────────────────────────────────────────────────────────┐
│                     Fo-Agent Flow                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   1. You connect your social accounts (OAuth)            │
│                    ↓                                      │
│   2. Set your preferences & voice style                  │
│                    ↓                                      │
│   3. Agent discovers today's new followers/engagements    │
│                    ↓                                      │
│   4. For each person:                                    │
│      ┌──────────────────────────────────┐               │
│      │ LLM analyzes their profile &     │               │
│      │ recent posts → decides WHAT to   │               │
│      │ say and HOW to say it            │               │
│      │ (in YOUR voice, not a bot)       │               │
│      └──────────────────────────────────┘               │
│                    ↓                                      │
│   5. Executes: follow + like + optional comment           │
│      → All in one shot, never repeats today            │
│                    ↓                                      │
│   6. Logs activity, consumes 1 credit                    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Key Features

### 🤖 AI-Powered, Not Scripted
Uses LLMs (OpenAI / Anthropic / Groq / DeepSeek) to understand each person's profile and generate contextually appropriate responses — not keyword-matched templates.

### 🎯 One Shot, Daily
Built-in one-shot constraint ensures each person gets exactly one quality interaction per day. No spam. No repetition.

### 🗣️ Your Voice, Not a Bot's
Trained on your preferences, Fo-Agent comments and engages in a way that sounds like you — not ChatGPT.

### 🌐 Multi-Platform
Currently supports:
- **Twitter/X** — Follow, Like, Retweet, Comment
- **LinkedIn** — Connect, Like, Comment
- **Facebook** — Friend Request, Like, Comment
- **Instagram** — Follow, Like, Comment
- **GitHub** — Follow, Star, React
- **YouTube** — Subscribe, Like, Comment

### 💳 Credit-Based Economy
Simple pay-per-engagement model. Each unique engagement costs 1 credit. No monthly subscriptions, no lock-in.

### 🛠️ Admin Dashboard
Monitor agent activity, adjust platform settings, track credit usage, and review engagement history — all from a clean Next.js dashboard.

---

## Quick Start

### Prerequisites

- Node.js 20+
- npm or pnpm
- API keys for at least one LLM provider (OpenAI, Anthropic, Groq, or DeepSeek)

### Installation

```bash
# Clone the repo
git clone https://github.com/AIPMAndy/fo-agent.git
cd fo-agent

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env with your API keys and settings

# Start the agent
npm run start:agent

# (Optional) Start the admin dashboard
npm run start:web
```

### Configuration

Set the following environment variables:

```env
# At least one LLM provider
OPENAI_API_KEY=sk-...
# OR
ANTHROPIC_API_KEY=sk-...
# OR
GROQ_API_KEY=...
# OR
DEEPSEEK_API_KEY=...

# Admin credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password

# Platform sessions (Puppeteer)
TWITTER_SESSION=your-twitter-session-cookie
LINKEDIN_SESSION=your-linkedin-session-cookie
# ... other platforms
```

See [`.env.example`](.env.example) for the full variable list.

---

## Architecture

```
fo-agent/
├── src/
│   ├── agent/
│   │   ├── agent.ts          # Core agent loop & orchestration
│   │   ├── once-daily.ts     # One-shot-per-day constraint logic
│   │   ├── llm.ts            # LLM abstraction & prompt templates
│   │   └── providers/        # Per-platform engagement logic
│   │       ├── twitter.ts
│   │       ├── linkedin.ts
│   │       └── ...
│   ├── web/                  # Next.js admin dashboard
│   └── shared/               # Shared types, DB, utilities
├── scripts/
│   └── key-manager.ts        # Session/key management utilities
└── tests/
```

**Agent Loop:**
1. `agent.ts` — Main loop, calls `once-daily.ts` filter, then `llm.ts` to decide action, then `providers/` to execute
2. `once-daily.ts` — In-memory + DB deduplication (DynamoDB compatible, SQLite for local)
3. `llm.ts` — Unified interface across OpenAI / Anthropic / Groq / DeepSeek

---

## Why Fork / Contribute?

This project is personally built and maintained by [@AIPMAndy](https://github.com/AIPMAndy) — an AI product leader who runs Fo-Agent for his own audience.

If you find it useful:
- ⭐ Star this repo
- 🐛 Report bugs via GitHub Issues
- 🔀 Submit PRs for new platform support or features
- 📢 Share your use case

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for development setup and PR guidelines.

---

## Related Reading

- [The Case for One-Shot Engagement](https://github.com/AIPMAndy/fo-agent/discussions) — Why volume-based engagement tools fail
- [Fo-Agent vs. Existing Solutions](https://github.com/AIPMAndy/fo-agent/discussions/2) — Comparison table

---

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/AIPMAndy">@AIPMAndy</a> · MIT License</sub>
</p>
