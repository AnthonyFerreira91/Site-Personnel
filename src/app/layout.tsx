import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/themes/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import '@/styles/globals.css';
import { ThemeToggle } from '@/components/themes/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio NextJs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggle />
          <ToastContainer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
