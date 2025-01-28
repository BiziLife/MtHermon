"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // ✅ Mobile menu state

  return (
    <nav className="navbar bg-base-100 shadow-md border-b border-base-300 sticky top-0 z-50 px-6 py-3">
      
      {/* Left Side - Brand Name */}
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-2xl font-semibold">
          Mount Hermon
        </Link>
      </div>

      {/* Center - Navigation Links (Desktop) */}
      <div className="navbar-center hidden lg:flex space-x-6 font-medium text-gray-700">
        <Link href="/" className="hover:text-gray-900 transition">Home</Link>
        <Link href="/About" className="hover:text-gray-900 transition">About</Link>
        <Link href="/Events" className="hover:text-gray-900 transition">Events</Link>
        <Link href="/Sermons" className="hover:text-gray-900 transition">Sermons</Link>
        <Link href="/Services" className="hover:text-gray-900 transition">Services</Link>
        <Link href="/Contact" className="hover:text-gray-900 transition">Contact</Link>
      </div>

      {/* Right Side - Giving Button & Mobile Menu */}
      <div className="navbar-end flex items-center">
        {/* Giving Button */}
        <Link href="/giving">
          <button className="btn bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full px-5 py-2 shadow-md hover:scale-105 transition">
            Giving
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="btn btn-ghost lg:hidden ml-3"
          onClick={() => setIsOpen(!isOpen)} // ✅ Toggles menu
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && ( // ✅ Conditionally render when state is true
        <div className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-lg p-3 flex flex-col space-y-2 lg:hidden">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/About" className="block px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Events" className="block px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>Events</Link>
          <Link href="/Sermons" className="block px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>Sermons</Link>
          <Link href="/Services" className="block px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/Contact" className="block px-4 py-2 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
      
    </nav>
  );
}
