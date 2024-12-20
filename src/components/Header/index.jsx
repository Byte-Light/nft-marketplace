"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const sidebarBtn = useRef(null);
  const sideBarCloser = () => {
    sidebarBtn.current.checked = false;
  };
  return (
    <header className="w-full px-5 z-50 py-5 sticky top-0 backdrop-blur bg-[#11022950]">
      <div className="flex justify-between max-w-7xl mx-auto">
        {/* Sidebar for mobile */}
        <div className="relative text-3xl md:hidden">
          <FaBars className="absolute fill-white" />
          <input
            type="checkbox"
            className="absolute top-0 left-0 w-9 h-9 peer/draft opacity-0"
            ref={sidebarBtn}
          />
          <div className="top-0 z-20 fixed left-[-300px] peer-checked/draft:left-0 bg-[#110229] h-[100vh] w-[250px] transition-all duration-300 p-4">
            <div className="flex flex-col items-center w-full">
              <nav className="w-full">
                <ul className="w-full divide-y divide-zinc-700 flex flex-col list-none m-0 p-0 text-lg">
                  <li className="flex w-full justify-between items-center pb-4">
                    <Image
                      width={80}
                      height={80}
                      src="/images/logo.png"
                      alt="Company Logo"
                      className="hover:rotate-[360deg] hover:duration-500 ease-out"
                    />
                    <button className="p-2 text-3xl" onClick={sideBarCloser} aria-label="Close Sidebar">
                      <IoMdClose />
                    </button>
                  </li>
                  {[
                    { name: "Sign Up", href: "/", gradient: true },
                    { name: "Login", href: "/" },
                    { name: "Home", href: "/" },
                    { name: "Market", href: "/" },
                    { name: "Artists", href: "/" },
                    { name: "Community", href: "/" },
                    { name: "Wallet", href: "/" },
                  ].map(({ name, href, gradient }, idx) => (
                    <li className="py-4 px-2" key={idx}>
                      <Link
                        href={href}
                        className={`w-full px-5 py-2 rounded-sm transition-colors ${
                          gradient
                            ? "bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80"
                            : "hover:text-pink-500"
                        }`}
                        onClick={sideBarCloser}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="bg-black/80 w-full h-[100vh] hidden fixed left-0 top-0 peer-checked/draft:block"
            onClick={sideBarCloser}
          ></div>
        </div>

        {/* Logo */}
        <Link href="/">
          <Image
            width={80}
            height={80}
            src="/images/logo.png"
            alt="Company Logo"
            className="hover:rotate-[360deg] hover:duration-500 ease-out"
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="max-md:hidden flex items-center space-x-6">
          {[
            "Home",
            "Market",
            "Artists",
            "Community",
            "Wallet",
          ].map((name, idx) => (
            <li key={idx}>
              <Link
                href="/"
                className="px-4 py-3 hover:text-pink-500 transition-colors"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth buttons */}
        <div className="max-md:hidden flex space-x-4">
          <Link
            className="px-5 py-2 hover:text-pink-500 transition-colors"
            href="/"
          >
            Login
          </Link>
          <Link
            className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 hover:opacity-80 transition-colors rounded-sm"
            href="/"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;