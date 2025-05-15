import React from 'react';
import { motion } from 'framer-motion';
import { Upload, BadgeDollarSign, Wallet } from 'lucide-react';

const steps = [
  {
    icon: <Upload size={32} />,
    title: 'Upload License',
    desc: 'Send us your unused software license.'
  },
  {
    icon: <BadgeDollarSign size={32} />,
    title: 'Get Valuation',
    desc: 'Receive a fair market quote instantly.'
  },
  {
    icon: <Wallet size={32} />,
    title: 'Get Paid',
    desc: 'Accept the quote and receive your payment.'
  }
];

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.6, ease: 'easeOut' }
  })
};

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center relative">
      <h2 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white">How It Works</h2>

      <div className="relative flex flex-col items-center space-y-16">
        <div className="absolute top-10 bottom-10 w-1 bg-blue-400/30 dark:bg-blue-500/20 left-1/2 transform -translate-x-1/2 z-0" />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative z-10 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-lg text-center"
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // animate on every scroll when 30% visible
            custom={index}
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-800 rounded-full text-blue-600 dark:text-blue-300">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
