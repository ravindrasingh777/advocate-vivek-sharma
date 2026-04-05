"use client";

import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const links = [
    { name: "होम", id: "home" },
    { name: "परिचय", id: "about" },
    { name: "संकल्प", id: "vision" },
    // { name: "गैलरी", route: "/gallery" },
    { name: "संपर्क", id: "contact" },
  ];

  const handleScroll = (id) => {
    if (!id) return;
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b0b0b] text-white py-10 px-4 border-t border-[#1e4d8f]/30">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
        {/* NAME */}
        <h2 className="text-lg sm:text-xl font-semibold">Adv. Vivek Sharma</h2>

        {/* SUBTEXT */}
        <p className="text-sm text-[#C9A84C]">
          Bar Council of Rajasthan — Member 2026
        </p>

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-300">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() =>
                link.route ? router.push(link.route) : handleScroll(link.id)
              }
              className="hover:text-white transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-700" />

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-400">
          © 2026 Adv. Vivek Sharma | BCR 2026. सर्वाधिकार सुरक्षित।
        </p>
      </div>
    </footer>
  );
}
