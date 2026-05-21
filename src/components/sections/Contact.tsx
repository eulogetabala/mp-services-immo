"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import {
  BRAZZAVILLE_LOCATION,
  CONTACT_INFO,
  getMapsNavigationUrl,
  getMapsPlaceUrl,
} from "@/constants";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gold uppercase tracking-[0.3em] text-xs font-black mb-4 block"
              >
                Contactez-nous
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-navy"
              >
                Parlons de votre <br />
                <span className="text-gold">prochain projet</span>
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-charcoal text-lg mb-12 max-w-md font-medium"
            >
              Vous avez une vision ? Nous avons l&apos;expertise pour la concrétiser. Contactez-nous pour un devis personnalisé.
            </motion.p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 border border-navy/10 flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                  <Phone size={20} className="text-navy group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-charcoal block mb-1 font-medium">Téléphone</span>
                  <span className="text-lg font-black text-navy">{CONTACT_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 border border-navy/10 flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                  <Mail size={20} className="text-navy group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-charcoal block mb-1 font-medium">Email</span>
                  <span className="text-lg font-black text-navy">{CONTACT_INFO.email}</span>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 shrink-0 border border-navy/10 flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                  <MapPin size={20} className="text-navy group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-charcoal block mb-2 font-medium">Localisation</span>
                  <div className="space-y-2">
                    {CONTACT_INFO.locations.map((location) => (
                      <a
                        key={location.city}
                        href={getMapsPlaceUrl(location)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-base font-black text-navy hover:text-gold transition-colors"
                        title={`Ouvrir ${location.city} dans Google Maps`}
                      >
                        <span className="text-gold">{location.city} :</span> {location.address}
                      </a>
                    ))}
                    <a
                      href={getMapsNavigationUrl(BRAZZAVILLE_LOCATION)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs uppercase tracking-wider text-gold font-black hover:text-navy transition-colors underline underline-offset-4"
                      title="Itinéraire GPS vers Brazzaville"
                    >
                      Itinéraire GPS — Brazzaville
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-navy/[0.02] border border-navy/10 p-8 md:p-12"
          >
            <form className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Votre Nom"
                  className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors peer text-navy font-medium"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold peer-focus:w-full transition-all duration-500" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Votre Email"
                  className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors peer text-navy font-medium"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold peer-focus:w-full transition-all duration-500" />
              </div>

              <div className="relative">
                <select className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors peer appearance-none text-navy font-medium">
                  <option value="" disabled selected>Type de projet</option>
                  <option value="construction">Construction</option>
                  <option value="renovation">Rénovation</option>
                  <option value="etudes">Études & Plans</option>
                  <option value="autre">Autre</option>
                </select>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold peer-focus:w-full transition-all duration-500" />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Votre Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-navy/20 py-4 outline-none focus:border-gold transition-colors peer resize-none text-navy font-medium"
                  required
                ></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold peer-focus:w-full transition-all duration-500" />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-navy text-white font-black uppercase tracking-widest hover:bg-gold transition-all duration-300 flex items-center justify-center space-x-4"
              >
                <span>Envoyer le message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-navy/[0.02] -skew-y-6 translate-y-1/2 pointer-events-none" />
    </section>
  );
};
