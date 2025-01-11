"use client"; 
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-base-100">
        
        {/* Hero / Banner Section */}
        <div
          className="hero min-h-[50vh] bg-cover bg-center mb-10"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.7)
              ), 
              url("https://images.unsplash.com/photo-1596902189283-b01bf57b2ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")
            `
          }}
        >
          <div className="hero-content text-center text-neutral-content py-20">
            <div className="max-w-xl mx-auto">
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
            </div>
          </div>
        </div>

        {/* Our Mission & Vision Section */}
        <section className="max-w-6xl mx-auto px-4 py-8 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Our Mission & Vision</h2>
          </div>

          {/* Optional Sermon/Video Embed */}
          <div className="card w-full max-w-3xl mx-auto shadow-xl mb-8">
            <figure className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="Welcome Video"
                allowFullScreen
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Welcome Video</h2>
              <p>Welcome to Mount Hermon Church</p>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">Our Mission</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Pellentesque euismod, urna eu tincidunt consectetur, nisl sapien 
                  tempus mauris, vitae convallis justo justo eget enim.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">Our Vision</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  In bibendum nulla at ultricies aliquam. Donec luctus, mi sit 
                  amet rhoncus fermentum, magna nulla lobortis justo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Beliefs / Doctrinal Statement Section */}
        <section className="max-w-6xl mx-auto px-4 py-8 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">What We Believe</h2>
            <p className="text-gray-600 mt-2">
              Another placeholder for your churchs core beliefs or doctrinal statement.
            </p>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body leading-relaxed text-gray-800">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus 
                viverra lacus, quis posuere nisl dignissim ac. 
              </p>
              <p>
                Cras a fermentum nunc. Morbi in metus luctus, condimentum nisl at, 
                congue sem.
              </p>
              <p>
                Aliquam erat volutpat. Nullam viverra augue in lorem viverra, vel mattis 
                massa pellentesque. 
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
