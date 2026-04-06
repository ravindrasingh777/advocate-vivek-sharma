"use client";

import { useEffect, useRef } from "react";

export default function MustViewedSection() {
  const videoRef = useRef(null);

  // 👇 Auto play / pause on scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e4d8f]">
            Must Watch Video
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
           इस वीडियो को मिस मत कीजिए — यह आपको अधिवक्ता सुरक्षा से जुड़ी पूरी जानकारी आसान और स्पष्ट तरीके से समझाएगा।
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            src="/vedeo4.mp4" // 👈 apna video path
            controls
            muted
            loop
            playsInline
            className="w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[500px] object-cover"
          />

          {/* Optional overlay gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
