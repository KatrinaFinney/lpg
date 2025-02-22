// app/preview/page.tsx
'use client';

export default function Preview() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Landing Page Preview</h1>
      {/* Here you can dynamically generate the landing page preview */}
      <div className="bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold">Startup Name</h2>
        <p className="text-xl">Tagline goes here</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">CTA Button</button>
      </div>
    </div>
  );
}
