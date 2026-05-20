"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/constants";

export const Footer = () => {
  return (
    <footer className="bg-navy border-t border-white/10 py-12 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="relative w-72 h-32 mb-6 block">
              <Image
                src="/mp-services-2.png"
                alt="MP SERVICES IMMO"
                fill
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-sm max-w-xs font-medium">
              Expert en construction, rénovation et génie civil au Congo. Nous transformons vos visions en réalités durables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6 font-black">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-sm text-white/90 hover:text-gold transition-colors font-bold">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-white/90 hover:text-gold transition-colors font-bold">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-white/90 hover:text-gold transition-colors font-bold">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6 font-black">Contact</h4>
            <ul className="space-y-4 text-sm text-white/80 font-medium">
              <li className="text-white font-bold">{CONTACT_INFO.phone}</li>
              <li className="text-white font-bold">{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.address}</li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/60 uppercase tracking-widest font-medium"
        >
          <p>© {new Date().getFullYear()} MP SERVICES IMMO. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-gold">
              Mentions Légales
            </Link>
            <Link href="/confidentialite" className="hover:text-gold">
              Confidentialité
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};
