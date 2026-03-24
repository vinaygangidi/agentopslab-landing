# AgentOpsLab Landing Page

**Live Site:** [https://agentopslab-landing.vercel.app/](https://agentopslab-landing.vercel.app/)

Landing page for AgentOpsLab - an open-source educational portfolio demonstrating how to rapidly build production-ready AI automation with Claude Sonnet 4. Showcases 33+ example agents across Sales, Revenue, Finance, HR, and Legal operations.

---

## 🚀 Overview

This is the marketing and documentation landing page for the AgentOpsLab project. It provides:

- **Agent Showcase**: Visual catalog of all 33+ AI agents with direct links to source code
- **Category Organization**: Agents grouped by business function (Sales, RevOps, Finance, HR, Legal)
- **Live Examples**: Working implementations with GitHub integration
- **Educational Resource**: Learning materials for developers building enterprise AI agents

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.1](https://nextjs.org/) (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.294.0
- **Deployment**: Vercel (auto-deploy from `main` branch)
- **Package Manager**: npm

---

## 📦 Project Structure

```
agentopslab-landing/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AgentCard.tsx      # Individual agent showcase cards
│   ├── CategorySection.tsx # Agent category sections
│   ├── Header.tsx         # Site header/navigation
│   └── Footer.tsx         # Site footer
├── lib/                   # Utilities and helpers
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

---

## 🏃 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vinaygangidi/agentopslab-landing.git
   cd agentopslab-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment

This site is automatically deployed to Vercel:

- **Production URL**: https://agentopslab-landing.vercel.app/
- **Auto-Deploy**: Every push to `main` branch triggers automatic deployment
- **Preview Deployments**: Pull requests get preview URLs

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vinaygangidi/agentopslab-landing)

---

## 🔗 Related Repositories

This landing page showcases agents from multiple repositories:

| Repository | Description | Link |
|------------|-------------|------|
| **AgentOpsLab** | Core Python agents (Sales, HR, Legal) | [View Repo](https://github.com/vinaygangidi/AgentOpsLab) |
| **revops-ai-agents** | Claude Code RevOps agents | [View Repo](https://github.com/vinaygangidi/revops-ai-agents) |
| **n8n-enterprise-ai-agents** | N8n workflow agents (GTM, Finance) | [View Repo](https://github.com/vinaygangidi/n8n-enterprise-ai-agents) |

---

## 📋 Agent Categories

### Sales Operations (6 Agents)
- Email Intelligence
- Pipeline Orchestrator
- Contact Creator
- Account Creator
- Deal Intelligence
- CPQ Agent

### Revenue Operations (6 Agents)
- Churn Detector
- Competitive Intel
- Deal Risk Assessor
- ICP Analyst
- Objection Mapper
- Win-Loss Analyst

### Enterprise Operations (9 Agents)
- GTM Account 360 Copilot
- ICP Segmentation
- GTM Win-Loss Analysis
- Cash Reconciliation
- ERP Copilot
- ERP Customer Orders
- Tax Agent
- Loan Fraud Detection
- Loan Underwriting

### HR Operations (6 Agents)
- Resume Screening
- Onboarding Workflow
- Performance Review Analyzer
- Employee Offboarding
- Benefits Enrollment
- Training Compliance

### Legal Operations (6 Agents)
- Contract Review
- NDA Generator
- Contract Risk Analyzer
- Document Classifier
- Compliance Checker
- Legal Research

---

## 🎨 Customization

### Updating Agent Information

Edit the agent data in `components/AgentCard.tsx` or create a centralized data file:

```typescript
// lib/agents-data.ts
export const agents = [
  {
    category: "Sales Operations",
    name: "Email Intelligence",
    description: "Extract contacts, companies, deals from emails",
    badge: "95%+ accuracy",
    githubUrl: "https://github.com/vinaygangidi/AgentOpsLab/blob/main/agents/email_intelligence_agent.py"
  },
  // ... more agents
];
```

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update `app/layout.tsx` for custom fonts
- **Components**: All UI components are in `components/` directory

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

This is an educational portfolio project. Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author

**Vinay Gangidi**

- Email: vinay.gangidi@gmail.com
- GitHub: [@vinaygangidi](https://github.com/vinaygangidi)
- Landing Page: [agentopslab-landing.vercel.app](https://agentopslab-landing.vercel.app/)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Deployed on [Vercel](https://vercel.com)
- Powered by [Claude Sonnet 4](https://www.anthropic.com/claude) (Anthropic)
- Icons from [Lucide](https://lucide.dev/)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/vinaygangidi/agentopslab-landing?style=social)
![GitHub forks](https://img.shields.io/github/forks/vinaygangidi/agentopslab-landing?style=social)
![GitHub issues](https://img.shields.io/github/issues/vinaygangidi/agentopslab-landing)
![GitHub license](https://img.shields.io/github/license/vinaygangidi/agentopslab-landing)

---

## 📝 Educational Purpose

This project is built for **educational purposes** to demonstrate:
- Enterprise AI agent development patterns
- Production-ready code architecture
- Integration with modern AI APIs (Claude, OpenAI)
- Real-world automation workflows

**Not intended for commercial sale.** All code is open-source and free to use for learning.

---

**⭐ If you find this project helpful, please consider giving it a star on GitHub!**
