// app/form/page.tsx
'use client';  // Mark this as a client-side component

import { useState } from 'react';

interface FormData {
  startupName: string;
  tagline: string;
  ctaText: string;
  brandColor: string;
  buttonText: string;
  buttonLink: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    startupName: '',
    tagline: '',
    ctaText: '',
    brandColor: '#000000',
    buttonText: '',
    buttonLink: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Create Your Landing Page</h1>
      <form className="mt-4">
        <label htmlFor="startup-name">Startup Name</label>
        <input
          id="startup-name"
          name="startupName"
          className="border p-2 mb-4 w-full"
          type="text"
          value={formData.startupName}
          onChange={handleChange}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          id="tagline"
          name="tagline"
          className="border p-2 mb-4 w-full"
          type="text"
          value={formData.tagline}
          onChange={handleChange}
        />
        <label htmlFor="cta-text">Call-to-Action Text</label>
        <input
          id="cta-text"
          name="ctaText"
          className="border p-2 mb-4 w-full"
          type="text"
          value={formData.ctaText}
          onChange={handleChange}
        />
        <label htmlFor="brand-color">Brand Color</label>
        <input
          id="brand-color"
          name="brandColor"
          className="border p-2 mb-4 w-full"
          type="color"
          value={formData.brandColor}
          onChange={handleChange}
        />
        <label htmlFor="button-text">Button Text</label>
        <input
          id="button-text"
          name="buttonText"
          className="border p-2 mb-4 w-full"
          type="text"
          value={formData.buttonText}
          onChange={handleChange}
        />
        <label htmlFor="button-link">Button Link</label>
        <input
          id="button-link"
          name="buttonLink"
          className="border p-2 mb-4 w-full"
          type="url"
          value={formData.buttonLink}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
