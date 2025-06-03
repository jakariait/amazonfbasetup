"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="border-b border-orange-500 px-4 pt-10 pb-10 bg-gray-50">
      <div className="xl:container xl:mx-auto gap-6 grid md:grid-cols-2 items-center">
        {/* Right: Content */}
        <div className="w-full text-center md:text-left ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Get Your Products Discovered & Selling on Amazon
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Amazing product but not seeing enough traction? Our Amazon experts
            help you get visibility, boost rankings, and grow sales without the
            guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/contact-us">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">
                Boost My Amazon Sales
              </button>
            </Link>

            <Link href="/amazon-help">
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
                Solve My Amazon Problem
              </button>
            </Link>
          </div>
        </div>
        {/* Left: Video */}
        <div className="w-full ">
          <video
            src="/tessagencyfba.mp4" // Place your video in public/ directory
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-lg aspect-auto"
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
