"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "À Propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="relative w-80 h-24">
          <Image
            src="/mp-services-2.png"
            alt="MP SERVICES IMMO"
            fill
            className={`object-contain transition-all duration-300 ${isScrolled ? "brightness-0" : ""}`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-widest transition-colors font-black ${
                isScrolled ? "text-navy hover:text-gold" : "text-white hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className={`px-6 py-2.5 border-2 text-xs uppercase tracking-widest transition-all duration-300 font-black ${
              isScrolled 
                ? "border-navy text-navy hover:bg-navy hover:text-white" 
                : "border-white text-white hover:bg-white hover:text-navy"
            }`}
          >
            Devis
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-navy" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-concrete/10 py-8 px-6 md:hidden shadow-xl"
          >
            <nav className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-navy font-bold hover:text-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="inline-block text-center px-6 py-3 bg-navy text-white text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demander un devis
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
