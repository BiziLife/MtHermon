"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GivingPage() {
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
            url("https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")
          `
        }}
      >
        <div className="hero-content text-center text-neutral-content py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-5 text-5xl font-bold">Giving</h1>
            <p className="mb-5 text-lg">
              Your generosity makes the ministry of Mount Hermon possible. 
              Thank you for partnering with us to share God’s love.
            </p>
            <a
              href="#waysToGive"
              className="btn btn-primary bg-gradient-to-r from-purple-500 to-indigo-600 
                         text-white font-semibold rounded-full px-8 py-3 
                         transition duration-300 transform hover:scale-105"
            >
              Ways to Give
            </a>
          </div>
        </div>
      </div>

      <main className="bg-base-100 px-4 py-8 min-h-screen">
        {/* Ways to Give Section */}
        <section id="waysToGive" className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Ways to Give</h2>
          
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card #1: Online Giving */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">Online Giving</h3>
                <p className="text-gray-700">
                  Give securely through our online portal. It’s fast, easy, and 
                  accessible from anywhere.
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="#"
                    className="btn btn-primary bg-gradient-to-r from-purple-500 to-indigo-600 
                               text-white rounded-full px-6 py-2 
                               transition duration-300 transform hover:scale-105"
                  >
                    Give Online
                  </a>
                </div>
              </div>
            </div>
            
            {/* Card #2: Text to Give */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">Text to Give</h3>
                <p className="text-gray-700">
                  Simply text the amount you’d like to give to our dedicated number. 
                  After a quick setup, it’s as easy as sending a text.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary bg-gradient-to-r from-purple-500 to-indigo-600 
                               text-white rounded-full px-6 py-2 
                               transition duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            
            {/* Card #3: Checks & In-Person */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">Checks & In-Person</h3>
                <p className="text-gray-700">
                  Prefer to give by check or in-person? You can drop off your 
                  offering during service or mail it to our church office.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary bg-gradient-to-r from-purple-500 to-indigo-600 
                               text-white rounded-full px-6 py-2 
                               transition duration-300 transform hover:scale-105"
                  >
                    Get Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Giving Info */}
        <section className="max-w-6xl mx-auto mt-12">
          <div className="bg-base-200 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Why We Give</h2>
            <p className="text-gray-700 leading-relaxed">
              Giving is part of our worship to God. It’s an expression of our 
              gratitude and trust, and a way to invest in the work that God is 
              doing in our community and around the world. 
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Your faithful giving supports church ministries, outreach efforts, 
              missions, and day-to-day operations, helping us bring the light 
              of the gospel to those in need.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
