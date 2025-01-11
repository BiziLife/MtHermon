"use client";
import Navbar from '../app/components/Navbar';
import React from "react";
import Footer from '../app/components/Footer';


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-base-100">
        <div className="hero min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.7)
              ), 
              url("/images/Hero.png")
            `
          }}
        >
          <div className="hero-overlay" />
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Mt Hermon Church</h1>
              <p className="mb-8 text-lg"> A Place to Belong, A Family to Grow With </p>
              <button className="btn btn-primary bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">Plan a Visit</button>
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
      </main>
      <Footer />
    </div>
  );
}
