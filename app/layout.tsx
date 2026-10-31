import React from 'react';
import type { Metadata } from 'next';
import { Klee_One, Nunito, Zen_Maru_Gothic } from 'next/font/google';
import './globals.css';

const body = Nunito({ subsets: ['latin'], variable: '--font-body' });
const display = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  variable: '--font-display',
});
const hand = Klee_One({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-hand',
});

export const metadata: Metadata = {
  title: 'Cathy Liu | AI Solutions Architect',
  description: 'Portfolio of Cathy Liu, an AI Solutions Architect designing production-ready AI systems for legal, finance, and accounting teams.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${hand.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
