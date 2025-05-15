import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'IT Manager',
    company: 'TechCorp',
    feedback: 'Smooth and fast service! Got paid within a day.'
  },
  {
    name: 'Bob Smith',
    role: 'Procurement Lead',
    company: 'SoftSolutions',
    feedback: 'Very professional team. Highly recommend SoftSell.'
  },
  {
    name: 'Charlie Lee',
    role: 'CTO',
    company: 'NextGenSoft',
    feedback: 'Exceptional customer service and great offers.'
  },
  {
    name: 'Dana White',
    role: 'Operations Head',
    company: 'EnterprisePlus',
    feedback: 'Trustworthy platform to resell licenses with ease.'
  },
  {
    name: 'Ella Davis',
    role: 'Software Buyer',
    company: 'CodeCraft',
    feedback: 'Simple process and helpful team. 5 stars!'
  },
  {
    name: 'Frank Miller',
    role: 'IT Director',
    company: 'InnovateHub',
    feedback: 'They made license reselling effortless.'
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const getTestimonialGroup = () => {
    const current = [
      testimonials[(index + 0) % testimonials.length],
      testimonials[(index + 1) % testimonials.length],
      testimonials[(index + 2) % testimonials.length],
      testimonials[(index + 3) % testimonials.length],
    ];
    return current;
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        What Our Customers Say
      </h2>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {getTestimonialGroup().map((t, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  “{t.feedback}”
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  — {t.name}, {t.role} at {t.company}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Testimonials;