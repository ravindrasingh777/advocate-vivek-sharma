"use client";

import { useRouter } from "next/navigation";
import { ReactTyped } from "react-typed";
import { useState } from "react";

type NavLink = {
  name: string;
  id?: string;
  route?: string;
};

const navLinks: NavLink[] = [
  { name: "होम", id: "home" },
  { name: "परिचय", id: "about" },
  { name: "संकल्प", id: "vision" },
  { name: "संघर्ष", id: "hardwork" },
  // { name: "गैलरी", route: "/gallery" },
  { name: "संपर्क", id: "contact" },
];

export function TypingText() {
  return (
    <span className="font-bold text-lg sm:text-xl text-[#1e4d8f] leading-tight">
      <ReactTyped
        strings={["Adv. Vivek Sharma"]}
        typeSpeed={60}
        backSpeed={30}
        loop
      />
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleScroll = (id?: string) => {
    if (!id) return;

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#1e4d8f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Brand */}
          <div className="flex flex-col leading-tight">
            <TypingText />
            <span className="text-xs sm:text-sm text-[#C9A84C] font-semibold">
              BCR 2026
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() =>
                    link.route ? router.push(link.route) : handleScroll(link.id)
                  }
                  className="text-[#1e4d8f] font-semibold text-sm lg:text-base hover:text-[#C9A84C] transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="hidden md:block bg-[#1e4d8f] text-white px-4 py-2 rounded-md text-sm lg:text-base hover:bg-[#092f49] transition">
            वोट दें →
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-[#1e4d8f]" />
            <span className="w-6 h-[2px] bg-[#1e4d8f]" />
            <span className="w-6 h-[2px] bg-[#1e4d8f]" />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-[#1e4d8f]">Menu</span>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() =>
                link.route ? router.push(link.route) : handleScroll(link.id)
              }
              className="text-left py-3 border-b text-[#1e4d8f] text-base font-medium hover:text-[#C9A84C]"
            >
              {link.name}
            </button>
          ))}

          {/* CTA */}
          <button className="mt-5 bg-[#1e4d8f] text-white py-3 rounded-md font-semibold">
            वोट दें →
          </button>
        </div>
      </div>
    </>
  );
}
