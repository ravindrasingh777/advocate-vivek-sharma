"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const images = [
  "/carouselsocial2.jpeg",
  "/carouselsocial1.jpeg",
  "/carouselsocial3.jpeg",
  "/carouselsocial4.jpeg",
  "/carouselsocial5.jpeg",
  "/carouselsocial6.jpeg",
  "/carouselsocial7.jpeg",

];

export default function SocialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const cardWidth = container.firstElementChild?.clientWidth || 300;

      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      // 👉 Loop back (infinite feel)
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }, 800);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">

         <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#1e4d8f]">
            प्रचार अभियान — पोस्टर व वीडियो
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            चुनाव प्रचार के दौरान ली गई कुछ तस्वीरें और वीडियो।
          </p>
          
        </div>
     
      {/* 🔥 CAROUSEL */}
      <div
        ref={containerRef}
        className="flex gap-4  overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[23%]"
          >
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={img}
                alt="slide"
                className="w-full h-[400px] md:h-[420px] object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
