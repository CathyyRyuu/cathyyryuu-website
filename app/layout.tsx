import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
