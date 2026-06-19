import './globals.css'

export const metadata = {
  title: 'Vinay Gangidi — Enterprise AI & Automation Architect',
  description: 'Portfolio of Vinay Gangidi. 15+ years building enterprise AI, automation, and analytics across Finance, HR, GTM, and Operations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
