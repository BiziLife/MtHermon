"use client";
import Navbar from '../app/components/Navbar';
import React from "react";
import Footer from '../app/components/Footer';
import Link from "next/link";


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
              <p className="mb-8 text-lg"> A Place to Belong A Family to Grow With </p>
            </div>
          </div>
        </div>

        

        {/* Highlight / Features Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Get Involved</h2>
            <p className="text-gray-600 mt-2">There is a place for everyone at Mount Hermon check out ways to connect and grow.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card #1: Sermons */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold">Sermons</h3>
                <p>
                  Missed a service Catch up on all messages from our teaching team 
                  and stay rooted in Gods Word.
                </p>
                <div className="card-actions justify-end">
                  <Link href="/Sermons">
                    <button className="btn btn-primary">Watch Now</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card #2: Ministries */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold">Ministries</h3>
                <p>
                  From children and youth to adult fellowship groups discover 
                  ministries for every stage of life.
                </p>
                <div className="card-actions justify-end">
                  <Link href="/Services">
                    <button className="btn btn-primary">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card #3: Events */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold">Upcoming Events</h3>
                <p>
                  Stay up to date on community outreach conferences and special 
                  gatherings happening at Mount Hermon.
                </p>
                <div className="card-actions justify-end">
                  <Link href="/Events">
                    <button className="btn btn-primary">View Calendar</button>
                  </Link>
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
              Passionate worship gospel centered teaching and unwavering love 
              for our community.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">Worship</h3>
                <p>
                 At Mount Hermon worship is at the heart of who we 
                 are and what we do. We believe that worship is not 
                 just a weekly routine, but a transformative encounter 
                 with the presence of God.
                </p>
                <p>
                 Whether through heartfelt singing 
                 reflective prayer or moments of quiet reverence, our aim is 
                 to honor and exalt Christ above all else. Our worship gatherings are 
                 designed to bring people closer to God fostering an atmosphere where faith is 
                 renewed and hearts are encouraged.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">Gospel Centered Teaching</h3>
                <p>
                Everything we do at Mount Hermon is rooted in the truth and hope of the gospel.
                Our messages and teachings focus on the life changing power of Gods Word equipping 
                believers to grow deeper in faith and to live out biblical principles daily. Through clear 
                relevant and Christ centered sermons we strive to illuminate Scripture so it speaks into the real 
                challenges and joys we face.
                </p>
                <p>
                We want everyone who attends to leave with greater clarity about who God
                is and how His unchanging Word applies to their lives.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl">Love for our Community</h3>
                <p>
                We believe the church is called to be a beacon of light and 
                love in the world. At Mount Hermon this begins in our own 
                neighborhood and extends to the furthest corners of the globe. 
                We actively seek ways to serve our local community through 
                outreach programs compassion initiatives and partnerships 
                with other organizations.
                </p>
                <p>
                 Our desire is to reflect Christs love by meeting needs 
                 sharing hope and building genuine relationships because 
                 we believe that a churchs impact is measured not just by 
                 the size of its services but by the depth of its love.
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
