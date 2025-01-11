"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SermonsPage() {
  const sermons = [
    {
      id: 1,
      videoId: "VIDEO_ID_1",
      title: "Sermon Title #1",
      description: "Optional short description or sermon summary here."
    },
    {
      id: 2,
      videoId: "VIDEO_ID_2",
      title: "Sermon Title #2",
      description: "Another short description or sermon summary here."
    },
    {
      id: 3,
      videoId: "VIDEO_ID_3",
      title: "Sermon Title #3",
      description: "Short description or sermon summary here."
    },
    {
      id: 4,
      videoId: "VIDEO_ID_4",
      title: "Sermon Title #4",
      description: "Short description or sermon summary here."
    },
    {
      id: 5,
      videoId: "VIDEO_ID_5",
      title: "Sermon Title #5",
      description: "Short description or sermon summary here."
    },
    {
      id: 6,
      videoId: "VIDEO_ID_6",
      title: "Sermon Title #6",
      description: "Short description or sermon summary here."
    }
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Banner */}
      <div
        className="hero min-h-[40vh] bg-cover bg-center mb-10"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.5)
            ),
            url("https://images.unsplash.com/photo-1499824920520-bc82083d7c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")
          `
        }}
      >
        <div className="hero-content text-center text-neutral-content py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Sermons</h1>
            <p className="mb-5 text-lg">
              Catch up on our latest teachings and messages.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="min-h-screen bg-base-100 px-4 py-8">
        {/* Sermons Grid */}
        <div className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="card w-full bg-base-100 shadow-xl">
              <figure className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${sermon.videoId}`}
                  title={sermon.title}
                  allowFullScreen
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">
                  {sermon.title}
                </h2>
                <p className="text-gray-700">
                  {sermon.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
