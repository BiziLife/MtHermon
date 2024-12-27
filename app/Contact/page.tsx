"use client"; 
import React from "react";
import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <div>
        <Navbar />
        <main className="min-h-screen bg-base-100">
        {/* Hero / Banner */}
        <div 
            className="hero mb-10" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")' }}
        >
            <div className="hero-overlay bg-opacity-60 bg-black" />
            <div className="hero-content text-center text-neutral-content py-20">
            <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">Get in Touch</h1>
                <p className="mb-5">
                We love to hear from you! Reach out with questions, prayer requests,
                or learn more about upcoming events at Mount Hermon Church.
                </p>
            </div>
            </div>
        </div>

        {/* Contact Form Section */}
        <section className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="text-gray-600 mt-2">
                Fill out the form below, and we’ll respond as soon as possible.
            </p>
            </div>

            <div className="card shadow-xl bg-base-100">
            <div className="card-body">
                <form>
                {/* Name field */}
                <div className="form-control mb-4">
                    <label className="label" htmlFor="name">
                    <span className="label-text">Name</span>
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    />
                </div>

                {/* Email field */}
                <div className="form-control mb-4">
                    <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    />
                </div>

                {/* Message field */}
                <div className="form-control mb-4">
                    <label className="label" htmlFor="message">
                    <span className="label-text">Message</span>
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    className="textarea textarea-bordered"
                    placeholder="How can we pray for you, or how can we help?"
                    rows={5}
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                    Send Message
                    </button>
                </div>
                </form>
            </div>
            </div>
        </section>
        </main>
    </div>
  );
}
