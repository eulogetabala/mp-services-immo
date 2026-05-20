"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "Excellence en Construction",
    subtitle: "Bâtir votre avenir avec précision",
    description: "Expert en construction, rénovation et génie civil au Congo. Nous transformons vos visions en réalités durables.",
    image: "/construction-engineer.jpg",
  },
  {
    id: 2,
    title: "Services Immobiliers",
    subtitle: "Location & Gestion de Biens",
    description: "Trouvez la maison de vos rêves ou confiez-nous la gestion de vos propriétés avec sérénité.",
    image: "/close-up-engineer-looking-laptop-analyze-building-model-architectural-office-woman-builder-using-computer-maquette-design-construction-layout-development.jpg",
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-navy">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-navy/50 z-10" />
          <Image
            src={SLIDES[currentSlide].image}
            alt={SLIDES[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs font-black mb-4 block">
              {SLIDES[currentSlide].subtitle}
            </span>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-white">
              {SLIDES[currentSlide].title.split(" ").map((word, i) => (
                <span key={i} className={i === SLIDES[currentSlide].title.split(" ").length - 1 ? "text-gold" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 font-medium">
              {SLIDES[currentSlide].description}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-navy text-white font-black uppercase tracking-widest hover:bg-gold transition-all duration-300 w-full md:w-auto text-sm">
                Découvrir
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-300 w-full md:w-auto text-sm">
                Contactez-nous
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 z-30 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-2 border border-white/20 text-white hover:bg-white hover:text-navy transition-all duration-300 pointer-events-auto backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 border border-white/20 text-white hover:bg-white hover:text-navy transition-all duration-300 pointer-events-auto backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ${
              currentSlide === index ? "w-12 bg-gold" : "w-6 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Architectural Line Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 z-20" />
    </section>
  );
};
