"use client";

import { useEffect, useState } from "react";
import gallery1 from "@/public/gallery1.jpeg";
import gallery2 from "@/public/gallery2.jpeg";

const galleryItems = [
  {
    id: 1,
    type: "video",
    src: "/vedeo5.MP4",
    title: "न्याय के लिए आंदोलन",
    desc: "अधिवक्ता समाज के अधिकारों के लिए संघर्ष",
  },
  // {
  //   id: 2,
  //   type: "video",
  //   src: "/vedeo4.mp4",
  //   title: "संसद में मुद्दा उठाया गया",
  //   desc: "अधिवक्ता समाज के हितों को लेकर इस व्यक्ति का मुद्दा संसद में प्रमुखता से उठाया गया",
  // },

  // {
  //   id: 3,
  //   type: "video",
  //   src: "/vedeo2.mp4",
  //   title: "साथियों के साथ",
  // },
  // {
  //   id: 4,
  //   type: "image",
  //   src: gallery2,
  //   title: "वयस्कों के लिए मार्गदर्शन",
  // },
];

const quotes = [
  "अधिकारों की लड़ाई में जो कभी पीछे न हटे, वही असली अधिवक्ता कहलाते हैं।",
];

export default function HardworkSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hardwork" className="bg-[#1e4d8f] py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* 🔥 HEADER */}
        <div className="text-center flex flex-col items-center gap-3">
          <div className="bg-white text-[#1e4d8f] px-4 py-1 rounded-full text-xs font-bold tracking-wide">
            अधिवक्ता विवेक शर्मा
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold">
            जनहित में संघर्ष
          </h2>

          <p className="text-sm text-white/80 max-w-md">
            अधिवक्ताओं के अधिकारों के लिए प्रतिबद्ध — हर मंच पर, हर मोड़ पर
          </p>
        </div>

        {/* 🔥 GRID */}
        <div
          className={`w-full grid gap-4 ${
            isMobile ? "grid-cols-1" : "grid-cols-12 auto-rows-[180px]"
          }`}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                relative rounded-xl overflow-hidden shadow-lg cursor-pointer group
                transition duration-300
                ${
                  isMobile
                    ? "h-[500px]"
                    : index === 0
                      ? "col-span-12 md:col-span-8 row-span-2"
                      : "col-span-12 md:col-span-4"
                }
              `}
            >
              {/* MEDIA */}
              {item.type === "video" ? (
                <video
                  src={item.src}
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src.src}
                  alt=""
                  className="w-full h-full  object-cover  group-hover:scale-105 transition duration-300"
                />
              )}

              {/* OVERLAY */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-sm font-bold text-white">{item.title}</h4>

                {item.desc && (
                  <p className="text-xs text-white/80">{item.desc}</p>
                )}
              </div> */}
            </div>
          ))}
        </div>

        {/* 🔥 QUOTE */}
        <div className="bg-white/10 border border-white/20 border-l-4 border-white rounded-lg p-5 max-w-2xl w-full backdrop-blur-md">
          {/* <span className="text-3xl text-white font-serif">"</span> */}

          <div className="w-full h-44 overflow-hidden   mb-4">
            <img src="/voterMarketing.jpeg" alt="advVivek" className="object-cover rounded-md" />
          </div>

          <p className="text-sm text-white/90 italic leading-relaxed">
            {quotes[0]}
          </p>

          <p className="text-xs text-white font-semibold mt-2">
            — अधिवक्ता विवेक शर्मा
          </p>
        </div>
      </div>
    </section>
  );
}
