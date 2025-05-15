import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiLock, FiGlobe, FiBriefcase } from 'react-icons/fi';

const features = [
  {
    icon: FiZap,
    color: 'text-yellow-400',
    title: 'Fast Payments',
    desc: 'Receive money within 24 hours.',
  },
  {
    icon: FiLock,
    color: 'text-blue-500',
    title: 'Secure Platform',
    desc: 'Your data and transactions are safe with us.',
  },
  {
    icon: FiGlobe,
    color: 'text-green-400',
    title: 'Global Reach',
    desc: 'Sell from anywhere in the world.',
  },
  {
    icon: FiBriefcase,
    color: 'text-purple-500',
    title: 'Business-Friendly',
    desc: 'We work with companies of all sizes.',
  },
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12">Why Choose Us</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {features.map(({ icon: Icon, color, title, desc }, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center cursor-pointer transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6 }}
              className={`mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 ${color}`}
            >
              <Icon size={32} />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
