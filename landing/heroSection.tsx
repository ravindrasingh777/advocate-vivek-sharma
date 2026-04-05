"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#dbe3ec] to-[#f3eee7] px-4 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative rounded-2xl overflow-hidden border-4 border-[#f59e0b] shadow-xl w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
            {/* Image */}
            <Image
              src="/mainbanner.png"
              alt="profile"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#1e4d8f] to-transparent" />

            {/* Name */}
            <div className="absolute bottom-4 w-full text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-[#f59e0b]">
                विवेक शर्मा
              </h2>
              <p className="text-xs text-white">
                वरिष्ठ अधिवक्ता — राजस्थान उच्च न्यायालय(जयपुर)
              </p>
            </div>

            {/* Date Badge */}
            <div className="absolute top-2 right-2 bg-[#f59e0b] text-white text-xs px-2 py-1 rounded-md text-center leading-tight">
              चुनाव दिनांक <br />
              <span className="text-lg font-bold">22</span> <br />
              अप्रैल 2026
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-5">
          {/* Tag */}
          <div className="inline-block bg-[#3b0d2f] text-white text-xs px-4 py-2 rounded-full w-fit">
            🏛️ बार कौंसिल ऑफ राजस्थान — सदस्य पद हेतु — चुनाव 2026
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e4d8f]">
            Adv. Vivek Sharma
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            विवेक शर्मा
          </h2>

          <p className="text-sm text-gray-600">
            वरिष्ठ अधिवक्ता — Senior Advocate
          </p>

          {/* Description Box */}
          <div className="bg-gray-100 border-l-4 border-[#1e4d8f] p-4 rounded-md text-sm text-gray-700 leading-relaxed">
            समस्त आदरणीय अधिवक्ता साथियों से विनम्र निवेदन है कि मैं बार कौंसिल
            ऑफ राजस्थान के आगामी चुनाव में सदस्य पद हेतु प्रत्याशी हूँ। आपका
            प्रथम / उच्च वरीयता का वोट एवं समर्थन देकर मुझे विजयी बनाने की कृपा
            करें। मैं आपका सदैव के लिए आभारी रहूँगा।
          </div>

          {/* Contact Card */}
          <div className="bg-white shadow-md rounded-md p-4 text-sm space-y-2 border-t-4 border-[#6b3f1d]">
            <p>🏛️ Rajasthan High Court, Jaipur </p>
            {/* <p>
              📍 एफ-6, ज्योति मार्ग, नीरज यूनिवर्सिटी मार्ग, बापू नगर,
              जयपुर-302015
            </p> */}
            <p className="text-blue-600">📞 +91 9257061112</p>
            {/* <p className="text-blue-600">✉️ suranalawchamber@gmail.com</p>
            <p className="text-blue-600">🌐 suranalawchamber.com/home/</p> */}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-[#1e4d8f] text-white px-5 py-2 rounded-md font-medium hover:bg-[#163a6b] transition">
              🔍 मतदाता सूची में नाम खोजें
            </button>

            <button className="bg-[#6b3f1d] text-white px-5 py-2 rounded-md font-medium hover:bg-[#4b2b13] transition">
              📞 संपर्क करें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
