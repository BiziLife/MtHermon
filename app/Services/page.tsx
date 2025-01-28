"use client";
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <div>
        <Navbar />
        <main className="min-h-screen bg-base-100">
        {/* Hero / Banner Section */}
        <div className="hero mb-10" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1596902189283-b01bf57b2ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")` }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero-content text-center text-neutral-content py-20">
            <div className="max-w-xl">
                <h1 className="mb-5 text-5xl font-bold">Our Ministries & Services</h1>
                <p className="mb-5">
                Whether you are a student a parent, or simply seeking fellowship, 
                Mount Hermon Church offers groups and ministries for every stage of life.
                </p>
                <button className="btn btn-primary">Join Us</button>
            </div>
            </div>
        </div>

        {/* Services/Groups Section */}
        <section className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Explore Our Ministries</h2>
            <p className="text-gray-600 mt-2">Below is some placeholder text—replace with details about your church ministries</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Youth Group */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <h3 className="card-title text-xl font-bold">Youth Group</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Each week, our youth meet for fun activities, prayer, 
                    and encouraging lessons to grow in faith.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
                </div>
            </div>

            {/* Adult Groups */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <h3 className="card-title text-xl font-bold">Adult Fellowship</h3>
                <p>
                    Join our adult small groups to study the Bible,
                    share life experiences, and build authentic relationships.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
                </div>
            </div>

            {/* Church Ministry */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <h3 className="card-title text-xl font-bold">Church Ministry</h3>
                <p>
                    Whether you feel called to serve in worship, hospitality,
                    teaching, or other areas, we have diverse ministries to get involved in.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
                </div>
            </div>

            {/* Children’s Ministry (Optional) */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <h3 className="card-title text-xl font-bold">Childrens Ministry</h3>
                <p>
                    Our dedicated childrens ministry team offers interactive programs 
                    and lessons to help young hearts grow in their faith.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
                </div>
            </div>

            {/* Worship Ministry (Optional) */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <h3 className="card-title text-xl font-bold">Worship Ministry</h3>
                <p>
                    Passionate about music and praise? Join our worship team to lead the congregation
                    in uplifting worship each week.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
                </div>
            </div>

            {/* Missions or Outreach (Optional) */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                <h3 className="card-title text-xl font-bold">Missions and Outreach</h3>
                <p>
                    From local community service to global missions,
                    be part of sharing Gods love beyond the walls of the church.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
                </div>
            </div>
            </div>
        </section>
        </main>
        <Footer />
    </div>
  );
}
