import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      icon: "/images/icon1.png",
      title: "Set up Your Wallet",
      description:
        "Create and set up your wallet to securely manage your NFTs and transactions.",
    },
    {
      icon: "/images/icon2.png",
      title: "Buy Your Collection",
      description: "Explore and purchase unique NFT collections seamlessly.",
    },
    {
      icon: "/images/icon3.png",
      title: "Sell Your NFTs",
      description: "List your NFTs on the marketplace and reach global buyers.",
    },
    {
      icon: "/images/icon4.png",
      title: "Add Your NFTs",
      description:
        "Upload and showcase your NFTs with ease, making them available to collectors.",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            data-aos="fade-right"
            data-aos-once
          >
            How It Works
          </h2>
          <p
            className="text-gray-400 mb-6 leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-once
          >
            Navigate the world of NFTs with ease. Follow these simple steps to
            set up your wallet, explore collections, and showcase your assets.
          </p>
          <button
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium shadow-lg transition"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once
          >
            Learn More
          </button>
        </div>

        {/* Steps Section */}
        <div
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8"
          data-aos="fade-left"
          data-aos-once
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-600 rounded-full mb-4">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
