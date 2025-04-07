"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-10 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold">Logo</span>
          </div>
          <h1 className="text-2xl font-bold tracking-wide">M3AM Garage</h1>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-300">
            Accueil
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 text-sm font-medium">
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/services"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;