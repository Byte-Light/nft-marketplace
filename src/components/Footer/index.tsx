import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto mt-24 pt-12 pb-6 px-6 flex flex-col items-center bg-gray-900 text-gray-300">
      <div className="w-full flex flex-wrap justify-between gap-8 mb-8">
        <ul className="w-full sm:w-auto text-center sm:text-left">
          <li className="text-2xl text-white mb-4">Marketplace</li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              All NFTs
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Art
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Music
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Domain Names
            </Link>
          </li>
        </ul>

        <ul className="w-full sm:w-auto text-center sm:text-left">
          <li className="text-2xl text-white mb-4">Resources</li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Partners
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Suggestions
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Discord
            </Link>
          </li>
        </ul>

        <ul className="w-full sm:w-auto text-center sm:text-left">
          <li className="text-2xl text-white mb-4">Community</li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Documentation
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Brand Assets
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-indigo-400 transition">
              Blog
            </Link>
          </li>
        </ul>

        <div className="w-full sm:w-auto text-center sm:text-left">
          <h3 className="text-2xl text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with our latest news, articles, and updates directly in your inbox.
          </p>
          <div className="flex justify-center sm:justify-start gap-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 hover:opacity-80 rounded-full">
              <FaFacebook />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 hover:opacity-80 rounded-full">
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-500 hover:opacity-80 rounded-full">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full text-center border-t border-gray-700 pt-4">
        <p className="text-gray-500 text-sm">Bytelight. All Rights Reserved 2025©</p>
      </div>
    </footer>
  );
}
