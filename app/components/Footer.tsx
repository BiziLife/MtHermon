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
              171 Mt Hermon Rd&comma;  Lynch Station&comma;  VA&comma;  24571
            </p>
            <p className="text-sm text-gray-600">
              (434) 369 7020
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
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M18.896 2H5.104A3.104 3.104 0 002 5.104v13.792A3.104 3.104 0 005.104 22h13.792A3.104 3.104 0 0022 18.896V5.104A3.104 3.104 0 0018.896 2zm-2.32 6.417h-1.167c-.915 0-1.09.435-1.09 1.07v1.402h2.179l-.284 2.196h-1.895v5.64H13.3v-5.64H11v-2.196h2.299v-1.62c0-2.277 1.392-3.52 3.426-3.52.972 0 1.806.072 2.049.105v2.293z"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M24 4.556a9.93 9.93 0 01-2.825.775 4.932 4.932 0 002.164-2.723 9.868 9.868 0 01-3.13 1.197 4.918 4.918 0 00-8.381 4.482A13.957 13.957 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.886 4.886 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.928 4.928 0 004.598 3.417A9.873 9.873 0 010 19.54a13.939 13.939 0 007.548 2.212c9.056 0 14.009-7.514 13.999-14.266a9.93 9.93 0 002.453-2.53z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.058 2.124.24 2.606.403a5.275 5.275 0 011.908 1.24 5.238 5.238 0 011.24 1.908c.163.482.345 1.347.403 2.606.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.259-.24 2.124-.403 2.606a5.265 5.265 0 01-1.24 1.908 5.264 5.264 0 01-1.908 1.24c-.482.163-1.347.345-2.606.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.124-.24-2.606-.403a5.285 5.285 0 01-1.908-1.24 5.245 5.245 0 01-1.24-1.908c-.163-.482-.345-1.347-.403-2.606C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.058-1.259.24-2.124.403-2.606A5.287 5.287 0 013.876 2.637a5.232 5.232 0 011.908-1.24c.482-.163 1.347-.345 2.606-.403C8.649 1.875 9.029 1.863 12 1.863m0-1.863C8.756 0 8.35.013 7.083.07c-1.343.062-2.266.275-3.063.588A7.18 7.18 0 001.658 2.66C1.345 3.457 1.132 4.379 1.07 5.722.013 6.99 0 7.394 0 12c0 4.606.013 5.01.07 6.277.062 1.343.275 2.266.588 3.063.32.797.796 1.52 1.443 2.168a7.155 7.155 0 002.168 1.443c.797.313 1.72.526 3.063.588C8.35 23.987 8.756 24 12 24s3.65-.013 4.917-.07c1.343-.062 2.266-.275 3.063-.588a7.18 7.18 0 002.168-1.443 7.197 7.197 0 001.443-2.168c.313-.797.526-1.72.588-3.063C23.987 17.65 24 17.244 24 12c0-4.606-.013-5.01-.07-6.277-.062-1.343-.275-2.266-.588-3.063A7.132 7.132 0 0019.34 1.658C18.543 1.345 17.621 1.132 16.278 1.07 15.01.013 14.606 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.177a4.015 4.015 0 110-8.03 4.015 4.015 0 010 8.03z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
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
