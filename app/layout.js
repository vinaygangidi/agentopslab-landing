import './globals.css'

export const metadata = {
  title: 'AgentOpsLab',
  description: 'AI Agent Operations Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
