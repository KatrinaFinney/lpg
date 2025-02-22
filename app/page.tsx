// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to SaaS Landing Page Generator</h1>
      <Link href="/form">
        <a className="text-blue-500 hover:underline">Get Started</a>
      </Link>
    </div>
  );
}
