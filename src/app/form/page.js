'use client';
// app/form/page.js
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    startupName: '',
    tagline: '',
    ctaText: '',
    brandColor: '#000000',
    buttonText: '',
    buttonLink: '',
  });

  const handleChange = (e) => {
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
        {/* Repeat for other form fields */}
      </form>
    </div>
  );
}
