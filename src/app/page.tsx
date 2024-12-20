import ComponySection from "@/components/home/ComponySection";
import Contact from "@/components/home/Contact";
import HotCollections from "@/components/home/HotCollections";
import HowItWorks from "@/components/home/HowItWorks";
import TopSeller from "@/components/home/TopSeller";
import TreningAuctions from "@/components/home/TreningAuctions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto space-y-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="w-[30rem] h-[30rem] bg-indigo-500/50 blur-[300px] animate-pulse absolute top-0 left-0"></div>
        <div className="w-[30rem] h-[30rem] bg-pink-500/50 blur-[300px] animate-pulse absolute top-0 right-0"></div>
        <div className="w-[30rem] h-[30rem] bg-yellow-500/50 blur-[300px] animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 relative">
        <div className="flex flex-col justify-center gap-6 lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight" data-aos="fade-right" data-aos-delay="100">
            Discover, Collect and Sell Dope <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">NFTs</span>
          </h1>
          <p className="text-lg text-white/80" data-aos="fade-right" data-aos-delay="150">
            Explore the best NFTs in the marketplace and join a vibrant community of artists and collectors.
          </p>
          <div className="flex gap-5" data-aos="fade-right" data-aos-delay="200">
            <button className="px-8 py-3 rounded-md text-lg font-medium bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-90">
              Explore
            </button>
            <button className="rounded-md p-px bg-gradient-to-r from-indigo-500 to-pink-500">
              <div className="bg-[#110229] rounded-md px-8 py-3 hover:bg-opacity-80 text-lg font-medium">
                Create
              </div>
            </button>
          </div>
          <div className="flex rounded-lg bg-white/10 justify-around text-center p-6 shadow-lg" data-aos="fade-right" data-aos-delay="300">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">80K+</span>
              <span className="text-white/70 text-sm">Active Users</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold">27K+</span>
              <span className="text-white/70 text-sm">Artworks</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold">3.5K+</span>
              <span className="text-white/70 text-sm">Artists</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2" data-aos="fade-up">
          <Image
            width={600}
            height={600}
            src="/images/mainimage.jpg"
            alt="Explore the vibrant NFT Marketplace"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <ComponySection />
      <HowItWorks />
      <TreningAuctions />
      <TopSeller />
      <HotCollections />
      <Contact />
    </main>
  );
}