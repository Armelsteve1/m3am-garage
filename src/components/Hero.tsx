"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/car-banner.png')" }} 
    >
         <div className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white max-w-4xl mx-auto px-6 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenue chez <span className="text-blue-400">M3AM Garage</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Spécialiste de la carrosserie et réparation automobile.
        </p>
        <Link
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-transform transform hover:scale-105"
        >
             prendre rendez-vous
        </Link> 
      </motion.div>
    </section>
  );
};

export default Hero;