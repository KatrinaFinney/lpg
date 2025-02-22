'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to SaaS Landing Page Generator</h1>
      <Link href="/form">
        <a className="text-blue-500">Get Started</a>
      </Link>
    </div>
  );
}
