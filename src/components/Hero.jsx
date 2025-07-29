import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white pt-24 md:pt-0"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-white to-white z-0"></div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-text leading-tight mb-4"
              variants={itemVariants}
            >
              Transformando Ideias em{' '}
              <span className="gradient-text">Realidade Sólida</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Construindo o futuro com responsabilidade e precisão. Na NTC
              Brasil, cada projeto é um compromisso com a excelência e a
              inovação.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a href="#contato" className="btn btn-primary group">
                Comece seu Projeto Hoje
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="relative hidden md:block"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="aspect-square bg-primary/20 rounded-full p-8">
              <div className="aspect-square bg-primary/40 rounded-full p-8">
                <div className="aspect-square bg-primary flex items-center justify-center rounded-full shadow-2xl shadow-primary/40">
                  <svg
                    className="w-1/2 h-1/2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m0 0l-2-1m2 1V2M8 7l2 1m-2-1l2-1m-2 1v2.5M12 22v-4m0 4h.01M12 18v-4m0 4h.01M12 14v-4m0 4h.01M12 10V7M7 14h.01M7 18h.01M7 10h.01M17 14h.01M17 18h.01M17 10h.01"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
