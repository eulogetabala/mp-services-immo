"use client";

import React from "react";
import { motion } from "framer-motion";
import { VALUES } from "@/constants";

export const About = () => {
  return (
    <>
      <section id="about" className="py-24 bg-white text-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  À Propos de Nous
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none"
                >
                  L'excellence <br />
                  <span className="text-gold">architecturale</span>
                </motion.h2>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 text-charcoal text-lg leading-relaxed font-medium"
              >
                <p>
                  MP SERVICES IMMO est une entreprise leader dans le secteur de la construction et des services immobiliers au Congo. Notre vision est de redéfinir les standards de qualité et d'innovation dans la région.
                </p>
                <p>
                  Avec des années d'expérience et une équipe d'experts dévoués, nous transformons les défis complexes en solutions durables et esthétiques. Chaque projet est pour nous une opportunité de démontrer notre savoir-faire et notre engagement envers l'excellence.
                </p>
              </motion.div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <span className="text-4xl font-black text-navy block mb-2">3+</span>
                  <span className="text-xs uppercase tracking-widest text-charcoal font-medium">Années d'expérience</span>
                </div>
                <div>
                  <span className="text-4xl font-black text-navy block mb-2">20+</span>
                  <span className="text-xs uppercase tracking-widest text-charcoal font-medium">Projets réalisés</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/young-black-race-man-with-blueprint-stading-near-glass-building.jpg"
                  alt="Expert MP SERVICES IMMO"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section with Parallax Effect */}
      <section className="relative py-32 bg-navy overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div 
          initial={{ y: "10%" }}
          whileInView={{ y: "-10%" }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute inset-0 z-0 opacity-20 grayscale"
        >
          <img 
            src="/construction-engineer.jpg" 
            alt="" 
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy z-10" />

        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl text-white">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gold uppercase tracking-[0.3em] text-xs font-black mb-4 block"
              >
                Nos Fondations
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-black uppercase tracking-tighter"
              >
                Nos Valeurs <br />
                <span className="text-gold">Fondamentales</span>
              </motion.h3>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gold hidden md:block mb-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-12 hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Background Number */}
                <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-white/[0.03] group-hover:text-gold/[0.05] transition-colors duration-500 pointer-events-none text-outline">
                  0{index + 1}
                </span>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-black uppercase mb-6 text-white group-hover:text-gold transition-colors duration-300 flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-gold" />
                    {value.title}
                  </h4>
                  <p className="text-white/70 text-lg leading-relaxed font-medium max-w-md group-hover:text-white transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Line Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/30 group-hover:border-gold transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
