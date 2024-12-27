"use client";
import React from "react";
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div>
        <Navbar />
        <main className="min-h-screen bg-base-100">
          {/* Hero / Banner Section */}
          <div className="hero mt-0 mb-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1596902189283-b01bf57b2ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")` }}>
              <div className="hero-overlay bg-opacity-60 bg-black"></div>
              <div className="hero-content text-center text-neutral-content py-20">
              <div className="max-w-xl">
                  <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                  <p className="mb-5">Welcome to Mt Hermon</p>
              </div>
              </div>
          </div>

          <section className="w-full max-w-5xl px-4 py-10 md:px-6 lg:px-8 mx-auto">
            <div className="bg-base-100 px-4 py-8 flex flex-col items-center" >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-semibold">Our Mission & Vision</h2>

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
            </div>
           </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Our Mission</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur…
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Our Vision</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In bibendum nulla at ultricies aliquam…
                  </p>
                </div>
              </div>
            </div>
        </section>

        {/* Additional Section */}
        <section className="w-full max-w-5xl px-4 py-10 md:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold">What We Believe</h2>
              <p className="text-gray-600 mt-2">
                Another placeholder for your church’s core beliefs or doctrinal statement.
              </p>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
                <p>Cras a fermentum nunc. Morbi in metus luctus…</p>
                <p>Aliquam erat volutpat. Nullam viverra augue…</p>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
