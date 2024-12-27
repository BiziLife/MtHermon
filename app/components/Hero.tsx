"use client"; 
// Only needed if you want client-side features in Next.js

import React from "react";

export default function HeroSection() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        /* Replace with your own image or remove inline styles 
           and use a Tailwind class for your background. */
        backgroundImage:
          'url("https://images.unsplash.com/photo-1586853951516-03c46b7238a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Mount Hermon Church</h1>
          <p className="mb-5">
            We are a community of believers dedicated to loving God and serving people. Join
            us for uplifting worship, meaningful connections, and spiritual growth.
          </p>
          <button className="btn btn-primary">Plan a Visit</button>
        </div>
      </div>
    </div>
  );
}
