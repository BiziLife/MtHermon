"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-50">
      
      {/* -- Navbar Start (Left) -- */}
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Mount Hermon</a>
      </div>

      {/* -- Navbar Center (Desktop Links) -- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Events">Events</Link>
          </li>
          <li>
            <Link href="/Sermons">Sermons</Link>
          </li>
          <li>
            <Link href="/Services">Services</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* -- Navbar End (Right) -- */}
      <div className="navbar-end">
        {/* Mobile Menu Toggle */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Events">Events</Link>
            </li>
            <li>
              <Link href="/Sermons">Sermons</Link>
            </li>
            <li>
              <Link href="/Services">Services</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Giving Button with Matching Style */}
        <Link href="/Giving">
          <button
            className="
              btn 
              bg-gradient-to-r from-purple-500 to-indigo-600
              text-white 
              font-semibold 
              rounded-full 
              transition 
              duration-300 
              ease-in-out 
              transform 
              hover:scale-105
            "
          >
            Giving
          </button>
        </Link>
      </div>
    </div>
  );
}
