import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import NavBar from '@/sections/NavBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'VisualDSA',
  description: 'Visualize Data Structures And Algorithms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased p-6 flex flex-col items-center',
          inter.variable,
        )}
      >
        <div className="w-4/5">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
