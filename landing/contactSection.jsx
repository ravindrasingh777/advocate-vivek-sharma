"use client";

import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f8f5f0] py-14 px-4">
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-10">
        {/* HEADER */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e4d8f]">
            संपर्क करें
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            हमसे जुड़ें — आपका समर्थन हमारे लिए महत्वपूर्ण है
          </p>

          <div className="w-16 h-[3px] bg-[#1e4d8f] mx-auto mt-3 rounded-full" />
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-6 items-center">
          {/* Phone */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1e4d8f]/10 text-[#1e4d8f]">
              <Phone size={26} />
            </div>

            <h3 className="font-semibold text-lg text-[#1e4d8f]">कॉल करें</h3>

            <p className="text-gray-600 text-sm">9829462535 / 9351870075</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <a
              href="tel:9829462535"
              className="flex items-center justify-center gap-2 bg-[#1e4d8f] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#163a6b] transition w-full sm:w-auto"
            >
              <Phone size={18} />
              कॉल करें
            </a>

            <a
              href="https://chat.whatsapp.com/FdJGdP3zG3nGpZi41z5Y1T?mode=gi_t"
              target="_blank"
              className="flex items-center justify-center gap-2 border border-[#1e4d8f] text-[#1e4d8f] px-6 py-3 rounded-lg font-medium hover:bg-[#1e4d8f] hover:text-white transition w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              WhatsApp करें
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-2" />

          {/* Social */}
          <div className="flex gap-4">
            <a className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1e4d8f]/10 text-[#1e4d8f] hover:bg-[#1e4d8f] hover:text-white transition">
              <Link href="https://www.facebook.com/vivek.sharma.728253?mibextid=wwXIfr&rdid=Ot5GPk8xBLPhXvRb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1TLWgtAoRf%2F%3Fmibextid%3DwwXIfr#">
                <FaFacebook />
              </Link>
            </a>

            <a className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1e4d8f]/10 text-[#1e4d8f] hover:bg-[#1e4d8f] hover:text-white transition">
              <Link href="https://www.instagram.com/adv_viveksharma21?igsh=cXB4bWRsN2dobXY1">
                <FaInstagram />
              </Link>
            </a>
          </div>
        </div>

        {/* 🔥 EXTRA CTA BANNER */}
        <div className="bg-[#1e4d8f] text-white rounded-xl p-6 shadow-md">
          <p className="text-sm sm:text-base font-medium">
            आपका एक वोट — अधिवक्ताओं की आवाज़ को मजबूत बनाएगा।
          </p>
        </div>
      </div>
    </section>
  );
}
