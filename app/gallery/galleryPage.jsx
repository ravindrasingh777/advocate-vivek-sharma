"use client";

import gallery1 from "@/public/gallery1.jpeg";
import gallery2 from "@/public/gallery2.jpeg";
import gallery3 from "@/public/gallery3.jpeg";
import gallery4 from "@/public/gallery4.jpeg";
import gallery5 from "@/public/gallery5.jpeg";
import gallery6 from "@/public/gallery6.jpeg";
import gallery7 from "@/public/gallery7.jpeg";
import gallery8 from "@/public/gallery8.jpeg";
import gallery9 from "@/public/gallery9.jpeg";
import gallery10 from "@/public/gallery10.jpeg";
import gallery11 from "@/public/gallery11.jpeg";
import gallery12 from "@/public/gallery12.jpeg";
import gallery13 from "@/public/gallery13.jpeg";
import Link from "next/link";

const images = [
  { id: 9, src: gallery9 },
  { id: 10, src: gallery10 },
  { id: 11, src: gallery11 },
  { id: 12, src: gallery12 },
  { id: 13, src: gallery13 },
   { id: 1, src: gallery1 },
  { id: 2, src: gallery2 },
  { id: 3, src: gallery3 },
  { id: 4, src: gallery4 },
  { id: 5, src: gallery5 },
  { id: 6, src: gallery6 },
  { id: 7, src: gallery7 },
  { id: 8, src: gallery8 }
];

export default function GalleryPage() {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* 🔥 TITLE */}
        <h2 className="text-center mb-8 text-2xl font-bold text-[#0B3C5D]">
          Gallery
        </h2>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="rounded-xl overflow-hidden bg-white shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img.src.src}
                alt="gallery"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* 🔥 BACK BUTTON */}
        <div className="w-full flex justify-center mt-10">
          <Link
            href="/"
            className="border-2 border-[#0B3C5D] text-[#0B3C5D] px-6 py-2 rounded-lg hover:bg-[#0B3C5D] hover:text-white transition"
          >
            Back
          </Link>
        </div>
      </div>
    </section>
  );
}