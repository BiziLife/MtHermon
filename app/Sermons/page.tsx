"use client";
import React from "react";
import Navbar from '../components/Navbar';

export default function SermonsPage() {
  return (
    <div>
    <Navbar />
        <main className="min-h-screen bg-base-100 px-4 py-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Sermons</h1>
        
        {/* Sermon #1 (replace VIDEO_ID_1 with your actual YouTube video ID) */}
        <div className="card w-full max-w-3xl shadow-xl mb-8">
            <figure className="aspect-video w-full">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="Sermon #1"
                allowFullScreen
            />
            </figure>
            <div className="card-body">
            <h2 className="card-title">Sermon Title #1</h2>
            <p>Optional short description or sermon summary here.</p>
            </div>
        </div>

        {/* Sermon #2 (replace VIDEO_ID_2 with your actual YouTube video ID) */}
        <div className="card w-full max-w-3xl shadow-xl mb-8">
            <figure className="aspect-video w-full">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_2"
                title="Sermon #2"
                allowFullScreen
            />
            </figure>
            <div className="card-body">
            <h2 className="card-title">Sermon Title #2</h2>
            <p>Another short description or sermon summary here.</p>
            </div>
        </div>
        
        {/* If you want more, copy/paste additional cards or embed a playlist. */}
        </main>
    </div>
  );
}
