"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EventsPage() {
  // Sample array of events; replace with your actual data or dynamic fetch calls
  const events = [
    {
      id: 1,
      title: "Worship Night",
      date: "July 9, 2025",
      location: "Main Sanctuary",
      description:
        "An evening of contemporary worship music and prayer, open to everyone.",
      image:
        "/images/hero.png",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero min-h-[40vh] bg-cover bg-center bg-no-repeat mb-10"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.5)
            ),
            url("/images/Hero.png")
          `,
        }}
      >
        <div className="hero-content text-center text-neutral-content py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Upcoming Events</h1>
            <p className="mb-5 text-lg">
              Stay connected and get involved in our upcoming gatherings,
              workshops, and outreach opportunities.
            </p>
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-base-100 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Mark Your Calendar
          </h2>

          {/* Events Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="card bg-base-100 shadow-xl">
                {/* Image */}
                <figure className="aspect-video">
                <Image
                    src={event.image}
                    alt={event.title}
                    width={500}      
                    height={300}       
                    className="object-cover w-full h-full"
                />
                </figure>

                {/* Content */}
                <div className="card-body">
                  <h3 className="card-title text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600">
                    <span className="font-semibold">Date</span> {event.date}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location</span> {event.location}
                  </p>
                  <p className="mt-2 text-gray-700">{event.description}</p>
                  <div className="card-actions justify-end mt-4">
                    <button
                      className="btn btn-primary bg-gradient-to-r 
                                 from-purple-500 to-indigo-600 text-white 
                                 rounded-full px-6 py-2 
                                 transition duration-300 transform hover:scale-105"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
