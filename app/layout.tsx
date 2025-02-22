// app/layout.tsx
'use client';  // Ensures this file is treated as a client-side component

import React from 'react';
import { ReactNode } from 'react';  // Import ReactNode for typing
import './globals.css';  // Import global styles

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <header>
        <h1 className="text-4xl font-bold p-4 text-center">SaaS Landing Page Generator</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p className="text-center py-4">© 2025 SaaS Landing Page Generator</p>
      </footer>
    </div>
  );
}
