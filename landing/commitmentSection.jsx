"use client";

import {
  Scale,
  Users,
  ShieldCheck,
  BookOpen,
  Handshake,
  Sparkles,
} from "lucide-react";

const commitments = [
  {
    title: "न्याय सभी के लिए",
    desc: "हर अधिवक्ता को समान अवसर और सम्मान दिलाना हमारी प्राथमिकता है।",
    icon: Scale,
  },
  {
    title: "पारदर्शी व्यवस्था",
    desc: "बार काउंसिल में स्पष्ट, जवाबदेह और ईमानदार प्रशासन सुनिश्चित करना।",
    icon: ShieldCheck,
  },
  {
    title: "अधिवक्ता सहयोग",
    desc: "हर अधिवक्ता को मजबूत सहयोग और समर्थन का वातावरण प्रदान करना।",
    icon: Users,
  },
  {
    title: "कानूनी सशक्तिकरण",
    desc: "नए अधिवक्ताओं के लिए प्रशिक्षण, मार्गदर्शन और विकास के अवसर।",
    icon: BookOpen,
  },
  {
    title: "एकता और विश्वास",
    desc: "सभी अधिवक्ताओं के बीच एकता और आपसी विश्वास को बढ़ावा देना।",
    icon: Handshake,
  },
  {
    title: "नवाचार और सुधार",
    desc: "नई सोच और आधुनिक तरीकों से व्यवस्था को बेहतर बनाना।",
    icon: Sparkles,
  },
];

export default function CommitmentSection() {
  return (
    <section id="vision" className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e4d8f]">
            हमारा संकल्प
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            अधिवक्ता समाज के विकास और सम्मान के लिए हमारे वचन
          </p>

          <div className="w-16 h-[3px] bg-[#1e4d8f] mx-auto mt-3 rounded-full" />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-[#f8fbff] border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1e4d8f]/10 text-[#1e4d8f] mb-4 group-hover:bg-[#1e4d8f] group-hover:text-white transition">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-bold text-[#1e4d8f] mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* BOTTOM LINE EFFECT */}
                <div className="mt-4 h-[2px] w-0 bg-[#1e4d8f] group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
