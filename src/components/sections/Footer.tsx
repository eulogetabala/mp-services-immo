"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO, getMapsDirectionsUrl, getMapsPlaceUrl } from "@/constants";

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
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 shrink-0 border border-white/20 flex items-center justify-center">
                  <Phone size={16} className="text-gold" />
                </span>
                <span className="text-white font-bold pt-1.5">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 shrink-0 border border-white/20 flex items-center justify-center">
                  <Mail size={16} className="text-gold" />
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white font-bold pt-1.5 hover:text-gold transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 shrink-0 border border-white/20 flex items-center justify-center">
                  <MapPin size={16} className="text-gold" />
                </span>
                <div className="space-y-2 pt-1">
                  {CONTACT_INFO.locations.map((location) => (
                    <a
                      key={location.city}
                      href={getMapsPlaceUrl(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-gold transition-colors"
                      title={`Ouvrir ${location.city} dans Google Maps`}
                    >
                      <span className="text-gold font-black">{location.city} :</span>{" "}
                      {location.address}
                    </a>
                  ))}
                  <a
                    href={getMapsDirectionsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs uppercase tracking-wider text-gold font-black hover:text-white transition-colors underline underline-offset-4"
                    title="Itinéraire Brazzaville → Pointe-Noire"
                  >
                    Itinéraire sur la carte
                  </a>
                </div>
              </li>
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
