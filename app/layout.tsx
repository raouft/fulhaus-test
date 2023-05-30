import './globals.css'
import localFont from 'next/font/local'

const niveau = localFont({
  src: [
    {
      path: '../public/Niveau/Niveau Grotesk Regular.ttf',
      weight: '300',
    },
    {
      path: '../public/Niveau/Niveau Grotesk Bold.ttf',
      weight: '600',
    },
  ],
  display: 'swap',
  fallback: ['Helvetica', 'Arial'],
})

export const metadata = {
  title: 'Fülhaus Test',
  description:
    'Turnkey furnishing for vacation rental properties, short-term rentals and hotels. Improve your Airbnb with professional interior design and full service installation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={niveau.className + ' min-h-screen'}>{children}</body>
    </html>
  )
}
