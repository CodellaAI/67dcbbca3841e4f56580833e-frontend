
import './globals.css'

export const metadata = {
  title: 'Simple Data Recorder',
  description: 'A simple application to record data in MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
