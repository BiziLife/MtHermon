"use client";
import Navbar from "../app/components/Navbar";
import React from "react";
import Footer from "../app/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <div
          className="hero min-h-screen bg-cover bg-center flex items-center justify-center text-center"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.7)
              ), 
              url("/images/Hero.png")
            `,
          }}
        >
          <div className="max-w-3xl px-4">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
              Welcome to Mt Hermon Church
            </h1>
            <p className="mb-8 text-lg text-gray-200 leading-relaxed">
              A Place to Belong, A Family to Grow With
            </p>
          </div>
        </div>

        {/* Get Involved Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold">Get Involved</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            There is a place for everyone at Mount Hermon. Check out ways to
            connect and grow.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {/* Card Components */}
            {[
              {
                title: "Sermons",
                description:
                  "Missed a service? Catch up on all messages from our teaching team and stay rooted in God's Word.",
                link: "/Sermons",
                buttonText: "Watch Now",
              },
              {
                title: "Ministries",
                description:
                  "From children and youth to adult fellowship groups, discover ministries for every stage of life.",
                link: "/Services",
                buttonText: "Learn More",
              },
              {
                title: "Upcoming Events",
                description:
                  "Stay up to date on community outreach, conferences, and special gatherings happening at Mount Hermon.",
                link: "/Events",
                buttonText: "View Calendar",
              },
            ].map(({ title, description, link, buttonText }, index) => (
              <div key={index} className="card bg-base-100 shadow-xl p-6">
                <h3 className="card-title text-xl font-bold">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
                <div className="card-actions justify-end mt-4">
                  <Link href={link}>
                    <button className="btn btn-primary hover:bg-purple-700 transition">
                      {buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Passionate worship, gospel-centered teaching, and unwavering love
              for our community.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mission Cards */}
            {[
              {
                title: "Worship",
                content: [
                  "At Mount Hermon, worship is at the heart of who we are and what we do. We believe that worship is not just a weekly routine, but a transformative encounter with the presence of God.",
                  "Whether through heartfelt singing, reflective prayer, or moments of quiet reverence, our aim is to honor and exalt Christ above all else. Our worship gatherings are designed to bring people closer to God, fostering an atmosphere where faith is renewed and hearts are encouraged.",
                ],
              },
              {
                title: "Gospel-Centered Teaching",
                content: [
                  "Everything we do at Mount Hermon is rooted in the truth and hope of the gospel. Our messages and teachings focus on the life-changing power of God's Word, equipping believers to grow deeper in faith and live out biblical principles daily.",
                  "Through clear, relevant, and Christ-centered sermons, we strive to illuminate Scripture so it speaks into the real challenges and joys we face. We want everyone who attends to leave with greater clarity about who God is and how His unchanging Word applies to their lives.",
                ],
              },
              {
                title: "Love for our Community",
                content: [
                  "We believe the church is called to be a beacon of light and love in the world. At Mount Hermon, this begins in our own neighborhood and extends to the furthest corners of the globe.",
                  "We actively seek ways to serve our local community through outreach programs, compassion initiatives, and partnerships with other organizations. Our desire is to reflect Christ's love by meeting needs, sharing hope, and building genuine relationships because we believe that a church's impact is measured not just by the size of its services but by the depth of its love.",
                ],
              },
            ].map(({ title, content }, index) => (
              <div key={index} className="card bg-base-200 shadow-xl p-6">
                <h3 className="card-title text-xl font-bold">{title}</h3>
                {content.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mt-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
