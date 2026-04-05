"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const images = [
  "/gallery1.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.png",
  "/gallery7.jpeg",
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ Auto Scroll (smooth)
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
      {/* 🔥 HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src="/instabanner.jpeg"
            className="w-12 h-12 rounded-full object-cover"
            alt="profile"
          />

          <div>
            <h3 className="font-semibold text-[#1e4d8f]">adv_viveksharma21</h3>
            <p className="text-xs text-gray-500">
              551 posts · 26K followers · 55 following
            </p>
          </div>
        </div>

        <button className="bg-[#1e4d8f] text-white px-4 py-1.5 rounded-full text-sm">
          <Link href="https://www.instagram.com/adv_viveksharma21/">
            Follow
          </Link>
        </button>
      </div>

      {/* 🔥 CAROUSEL */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
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
                className="w-full h-[250px] sm:h-[280px] md:h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
