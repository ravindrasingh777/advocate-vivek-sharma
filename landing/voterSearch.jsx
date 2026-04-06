"use client";

import { useState } from "react";
import data from "@/public/All_Data.json";
import { ArrowDown } from "lucide-react";

export default function VoterSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const allVoters = data.rows || [];

  const handleSearch = () => {
    if (!query.trim()) return;

    const filtered = allVoters.filter(
      (voter) =>
        (voter["Name as on the Roll"] || "")
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        (voter["Number on the Roll"] || "")
          .toLowerCase()
          .includes(query.toLowerCase()),
    );

    setResults(filtered);
    setVisibleCount(10);
    setSearched(true);
  };

  return (
    <section id="voter-search" className="bg-[#f8f5f0] py-10 px-4 border-b">
      <div className="max-w-2xl mx-auto flex flex-col gap-5 items-center">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-center text-gray-900">
          मतदाता सूची में अपना नाम खोजें
        </h2>
        <h4 className="text-sm font-semibold text-center text-gray-900">
          BCR Preliminary Electoral Roll 2026 — Search by Name or Enrolment Number.
        </h4>

        {/* Search */}
        <div className="flex w-full rounded-lg overflow-hidden shadow-md border">
          <input
            type="text"
            placeholder="🔍 अपना नाम या Enrolment Number यहाँ टाइप करें..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 px-4 py-3 text-sm outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-[#1e4d8f] text-white px-5 text-sm font-semibold hover:bg-[#092f49] transition"
          >
            🔍 खोजें
          </button>
        </div>

        {/* Result Count */}
        {searched && (
          <p className="w-full text-sm text-gray-600">
            🔎 कुल परिणाम:{" "}
            <span className="text-[#1e4d8f] font-bold">{results.length}</span>
          </p>
        )}

        {/* No Result */}
        {searched && results.length === 0 && (
          <p className="text-sm text-gray-500">❌ आपका नाम नहीं मिला</p>
        )}

        {/* Cards */}
        {results.length > 0 && (
          <>
            <div className="w-full grid gap-4 mt-2">
              {results.slice(0, visibleCount).map((voter, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md border hover:shadow-lg transition"
                >
                  <h3 className="text-base font-bold text-gray-800 mb-2">
                    {voter["Name as on the Roll"]}
                  </h3>

                  <div className="grid  grid-cols-[1fr_auto] gap-4 text-sm text-gray-600">
                    {/* LEFT SIDE (Details) */}
                    <div className="flex flex-col gap-2">
                      <p>
                        <span className="font-semibold text-black">
                          Roll No:
                        </span>{" "}
                        {voter["Number on the Roll"]}
                      </p>

                      <p>
                        <span className="font-semibold text-black">
                          Electoral No:
                        </span>{" "}
                        {voter["Electoral Number"]}
                      </p>

                      <p>
                        <span className="font-semibold text-black">
                          Judgship:
                        </span>{" "}
                        {voter["Judgship"]}
                      </p>

                      <p>
                        <span className="font-semibold text-black">Bar:</span>{" "}
                        {voter["Bar Association"]}
                      </p>

                      <p>
                        <span className="font-semibold text-black">
                          Enrolled:
                        </span>{" "}
                        {voter["Date of Enrolment"]}
                      </p>

                      <p className="text-red-500 text-xs">
                        Note:- Vote For Adv. Vivek Sharma
                      </p>
                    </div>

                    {/* RIGHT SIDE (Ballot Circle) */}
                    <div className="flex justify-center sm:justify-end items-start">
                      <div className="h-20 w-20 rounded-full bg-[#1e4d8f] text-white flex flex-col items-center justify-center border-2 border-white/20">
                        <span className="text-[10px]">BALLOT NO.</span>
                        <span className="text-2xl font-bold">192</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Banner */}
              <div className="bg-white rounded-xl p-4 shadow-md border">
                <img
                  src="/votingsuggestion.jpeg"
                  alt="banner"
                  className="w-full h-[180px] object-cover object-top"
                />
              </div>
            </div>

            {/* Load More */}
            {visibleCount < results.length && (
              <button
                onClick={() => setVisibleCount((prev) => prev + 10)}
                className="mt-4 px-6 py-2 bg-[#1e4d8f] text-white rounded-lg flex items-center gap-2 font-semibold hover:bg-[#092f49] transition"
              >
                Load More <ArrowDown size={20} />
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
