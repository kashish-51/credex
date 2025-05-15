import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-[#1e3a8a] via-[#1e293b] to-[#0f172a] flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Sell Unused Software Licenses
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      >
        Turn your unused licenses into cash quickly and securely.
      </motion.p>

      <motion.button
        className="mt-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 text-white px-6 py-2 rounded hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sell My Licenses
      </motion.button>
    </section>
  );
};

export default Hero;
