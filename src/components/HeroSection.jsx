import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-indigo-700 text-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/images/hero_bg.svg" alt="Background pattern" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Jelajahi Kisah <span className="text-accent">Manusia</span> dan <span className="text-accent">Dewa</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
            Menguak misteri, mitos, dan filosofi di balik interaksi abadi antara dunia fana dan alam ilahi.
          </p>
          <Link
            to="/about"
            className="inline-block bg-accent hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Pelajari Lebih Lanjut
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 flex justify-center"
        >
          <img src="/images/about_illustration.svg" alt="Manusia dan Dewa" className="w-full max-w-md h-auto" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;