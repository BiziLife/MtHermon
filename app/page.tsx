"use client";
import Navbar from '../app/components/Navbar';
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-base-100">
        {/* 
          Hero Section 
          A large, visually striking section with a background image or gradient.
        */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1552265797-028d99f8eac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-60" />
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Mount Hermon Church</h1>
              <p className="mb-8 text-lg">
                Experience passionate worship, uplifting messages, and a community that 
                feels like family. We’re glad you’re here!
              </p>
              <button className="btn btn-primary">Plan a Visit</button>
            </div>
          </div>
        </div>

        

        {/* Highlight / Features Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Get Involved</h2>
            <p className="text-gray-600 mt-2">
              There’s a place for everyone at Mount Hermon—check out ways to connect and grow.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card #1: Sermons */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold">Sermons</h3>
                <p>
                  Missed a service? Catch up on all messages from our teaching team 
                  and stay rooted in God’s Word.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch Now</button>
                </div>
              </div>
            </div>

            {/* Card #2: Ministries */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold">Ministries</h3>
                <p>
                  From children and youth to adult fellowship groups, discover 
                  ministries for every stage of life.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>

            {/* Card #3: Events */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold">Upcoming Events</h3>
                <p>
                  Stay up to date on community outreach, conferences, and special 
                  gatherings happening at Mount Hermon.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Calendar</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About / Vision Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              Passionate worship, gospel-centered teaching, and unwavering love 
              for our community.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Spreading Hope & Love</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra 
                ornare, eros dolor interdum nulla.
              </p>
              <p className="text-gray-700 mt-4">
                Nulla facilisi. Pellentesque ultricies eget ex ac maximus. Vestibulum 
                ac justo euismod, fermentum orci sed, volutpat urna. Donec blandit 
                pharetra orci, id dictum purus.
              </p>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">Guided by Faith</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam 
                  rhoncus eget velit quis aliquet. Nam hendrerit dignissim purus, 
                  vel tempor metus pharetra eu.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent 
                  mollis nulla at dolor ultricies, in finibus dui bibendum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-content text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Join Us This Sunday!</h2>
          <p className="max-w-lg mx-auto mb-6">
            We cant wait to welcome you. Experience uplifting worship, 
            practical teaching, and a loving community.
          </p>
          <button className="btn btn-accent">Find a Location</button>
        </section>
      </main>
    </div>
  );
}
