"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "@/constants";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  // @ts-ignore
  const Icon = LucideIcons[service.icon] || LucideIcons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-navy/[0.02] border border-navy/10 p-8 hover:border-navy/50 transition-all duration-500 overflow-hidden"
    >
      {/* Background Number */}
      <span className="absolute -top-4 -right-4 text-9xl font-black text-navy/[0.03] group-hover:text-navy/5 transition-colors duration-500">
        {service.id}
      </span>

      <div className="relative z-10">
        <div className="w-12 h-12 bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-500">
          <Icon className="text-navy group-hover:text-white transition-colors duration-500" size={24} />
        </div>
        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-navy group-hover:text-gold transition-colors duration-500">
          {service.title}
        </h3>
        <p className="text-charcoal group-hover:text-navy/80 transition-colors duration-500 text-sm leading-relaxed font-medium">
          {service.description}
        </p>
      </div>

      {/* Hover Line Decoration */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-navy group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Image Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none grayscale">
        <img 
          src="/black-solar-panel-engineer-high-tech-facility-doing-inspection.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.3em] text-xs font-black mb-4 block"
            >
              Notre Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-navy"
            >
              Des services <br />
              <span className="text-gold">sur-mesure</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-charcoal max-w-sm text-sm font-medium"
          >
            Nous couvrons l'ensemble du cycle de vie d'un projet immobilier, de la conception technique à la réalisation finale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Background Decoration removed in favor of image */}
    </section>
  );
};
