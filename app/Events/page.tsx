"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EventsPage() {
  // Sample array of events; replace with your actual data or dynamic fetch calls
  const events = [
    {
      id: 1,
      title: "Community Outreach",
      date: "March 10, 2025",
      location: "Church Parking Lot",
      description:
        "Join us as we serve our community with food distribution, prayer, and fellowship.",
      image:
        "https://images.unsplash.com/photo-1588731234152-29bca82d09d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 2,
      title: "Youth Conference",
      date: "April 2-4, 2025",
      location: "Fellowship Hall",
      description:
        "A weekend for our youth to grow in faith, worship, and leadership. Open to ages 12-18.",
      image:
        "https://images.unsplash.com/photo-1530143311091-4c595a1ffca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 3,
      title: "Easter Sunday",
      date: "April 20, 2025",
      location: "Main Sanctuary",
      description:
        "Celebrate the resurrection of Christ with a special worship service and family activities.",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 4,
      title: 'Mens Retreat',
      date: "May 15-17, 2025",
      location: "Camp Mount Hermon",
      description:
        "A time for fellowship, reflection, and spiritual growth for the men of our church.",
      image:
        "https://images.unsplash.com/photo-1588691072559-924e1f727db0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 5,
      title: "Vacation Bible School",
      date: "June 8-12, 2025",
      location: "Children Wing",
      description:
        "Kids will enjoy a fun-filled week of Bible lessons, games, crafts, and music.",
      image:
        "https://images.unsplash.com/photo-1525110392764-1c45d0e46fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 6,
      title: "Worship Night",
      date: "July 9, 2025",
      location: "Main Sanctuary",
      description:
        "An evening of contemporary worship music and prayer, open to everyone.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="hero min-h-[40vh] bg-cover bg-center mb-10"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.5)
            ),
            url("https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")
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
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </figure>

                {/* Content */}
                <div className="card-body">
                  <h3 className="card-title text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span> {event.location}
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
