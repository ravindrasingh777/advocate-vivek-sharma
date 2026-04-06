"use client";

import aboutImage from "@/public/aboutUs.jpeg";

const bioPoints = [
  "Candidate for Member, Bar Council of Rajasthan 2026",
  "Dedicated to upholding the dignity and traditions of the legal fraternity",
  "Actively working for the rights, welfare, and unity of advocates",
  "A strong and fearless voice on every issue concerning the Bar Council",
  "Committed to transparency, growth, and modernization of legal systems",
  "Standing firmly with advocates — in court and beyond",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f8f5f0] py-10 px-4 border-b">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="flex col-span-1 justify-center items-center">
          <img
            src={aboutImage.src}
            alt="Election Banner"
            className="w-full  rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-5">
          {/* Tag */}
          <div className="bg-white border border-[#1e4d8f] text-[#1e4d8f] rounded-full px-4 py-1 text-xs font-bold w-fit tracking-wide">
            परिचय
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug">
            अधिवक्ता विवेक शर्मा — एक परिचय
          </h2>

          {/* Bio List */}
          <ul className="flex flex-col gap-3">
            {bioPoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
              >
                <span className="text-[#1e4d8f] font-bold mt-[2px]">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Quote */}
          <blockquote className="bg-white  border-l-4 border-[#1e4d8f] rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-700 italic leading-relaxed">
              अधिवक्ताओं को चेन से नहीं बाँधा जा सकता। अपनी आवाज़ उठाना हमारा हक
              भी है, कर्तव्य भी है।
            </p>

            <cite className="text-xs text-[#1e4d8f] font-semibold mt-2 block">
              — Adv. Vivek Sharma
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
