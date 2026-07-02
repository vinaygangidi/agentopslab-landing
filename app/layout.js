import './globals.css'

export const metadata = {
  title: 'AgentOpsLab — Production AI Agents for the Enterprise',
  description: 'AgentOpsLab: a working catalog of production AI agents across GTM, Finance, HR, Legal, and Operations — with the governance to run them safely at scale.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
