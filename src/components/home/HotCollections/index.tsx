import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HotCollections() {
  return (
    <section className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-12">
      <h2
        className="text-4xl lg:text-5xl font-bold text-center"
        data-aos="fade-right"
        data-aos-once
      >
        Hot Collections
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <p
          className="text-white/70 text-center md:text-left max-w-2xl"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-once
        >
          Discover trending collections in the marketplace, curated for art
          enthusiasts and collectors.
        </p>
        <Link
          href="/"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-once
          className="flex items-center gap-2 text-lg text-pink-500 hover:text-pink-600 transition"
        >
          View All <FaArrowRight />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="relative border border-gray-700 rounded-lg overflow-hidden shadow-lg bg-gray-900"
            data-aos="fade-up"
            data-aos-once
          >
            <Image
              src={`/images/c${idx + 1}.png`}
              alt={`Collection ${idx + 1}`}
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <div className="p-5 space-y-3">
              <div className="flex justify-between">
                {Array.from({ length: 3 }).map((__, imgIdx) => (
                  <Image
                    key={imgIdx}
                    src={`/images/c${idx + 1}-${imgIdx + 1}.png`}
                    alt={`Subimage ${imgIdx + 1}`}
                    width={78}
                    height={78}
                    className="rounded-md hover:opacity-90 transition"
                  />
                ))}
              </div>
              <div className="flex justify-between items-center mt-3">
                <h5 className="text-xl font-semibold">Art Item</h5>
                <button className="px-6 py-2 rounded bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:opacity-90">
                  35+ items
                </button>
              </div>
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Image
                src={`/images/user${idx + 1}.png`}
                alt={`User ${idx + 1}`}
                width={60}
                height={60}
                className="rounded-full border-2 border-gray-700 shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
