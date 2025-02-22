// app/layout.js
import './globals.css';
import { ReactNode } from 'react';


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <header>
        <h1>SaaS Landing Page Generator</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
}

