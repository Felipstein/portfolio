import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Felipe Oliveira',
  description: 'Full-Stack & Mobile Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col bg-background bg-main bg-contain bg-no-repeat text-[#F0F0F0] antialiased`}
      >
        <Toaster richColors />

        {children}

        <Footer />
      </body>
    </html>
  );
}
