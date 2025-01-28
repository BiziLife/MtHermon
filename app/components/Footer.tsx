"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Top Row: Links / Logo / Socials */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Church Info / Logo */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Mount Hermon Church</h2>
            <p className="text-sm text-gray-600">
              171 Mt Hermon Rd, Lynch Station, VA, 24571
            </p>
            <p className="text-sm text-gray-600">
              (434) 369 - 7020
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-4">
            <Link href="/About" className="hover:underline">
              About
            </Link>
            <Link href="/Sermons" className="hover:underline">
              Sermons
            </Link>
            <Link href="/Events" className="hover:underline">
              Events
            </Link>
            <Link href="/Services" className="hover:underline">
              Services
            </Link>
            <Link href="/Contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/Giving" className="hover:underline">
              Giving
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-base-300" />

        {/* Bottom Row: Social icons and Copyright */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          {/* Social Media Icons (Optional) */}
          <div className="mb-4 md:mb-0 flex gap-4">
            {/* Replace # with your links and add icons as needed */}
            <a
              href="https://www.facebook.com/MountHermonUMC"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 320 512"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V128c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S267.91 0 225.36 0c-73.22 0-121.15 44.38-121.15 124.72V192H22.89V288h81.32v224h100.17V288z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@MtHermonChurch"
              aria-label="Youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 576 512"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.676-24.808-42.21-48.491-48.503C454.018 64 288 64 288 64S121.982 64 74.836 75.58c-23.683 6.293-42.21 24.827-48.491 48.503C16 171.015 16 256 16 256s0 84.985 10.345 131.917c6.281 23.676 24.808 42.21 48.491 48.503C121.982 448 288 448 288 448s166.018 0 213.164-11.58c23.683-6.293 42.21-24.827 48.491-48.503C560 340.985 560 256 560 256s0-84.985-10.345-131.917zM230.779 330.607V181.393l142.857 74.607-142.857 74.607z" />
              </svg>
            </a>
            
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Mount Hermon Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
