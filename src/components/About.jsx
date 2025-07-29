import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Target size={36} className="text-primary" />,
      title: 'Precisão',
      description:
        'Executamos cada detalhe com a máxima precisão técnica, garantindo resultados que superam as expectativas.',
    },
    {
      icon: <ShieldCheck size={36} className="text-primary" />,
      title: 'Confiabilidade',
      description:
        'Construímos relações de confiança através da transparência, cumprimento de prazos e compromisso com a segurança.',
    },
    {
      icon: <Award size={36} className="text-primary" />,
      title: 'Qualidade',
      description:
        'Utilizamos materiais de ponta e mão de obra qualificada para entregar obras de qualidade e durabilidade incomparáveis.',
    },
    {
      icon: <Building size={36} className="text-primary" />,
      title: 'Inovação',
      description:
        'Buscamos constantemente soluções inovadoras e sustentáveis para otimizar processos e agregar valor aos projetos.',
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-accent">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Sua Visão, <span className="gradient-text">Nossa Missão</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Na NTC Brasil, acreditamos que cada construção é a materialização de
            um sonho. Nosso compromisso é transformar sua visão em uma realidade
            sólida e duradoura, com a qualidade e a confiabilidade que marcam
            cada tijolo que assentamos.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-modern transition-shadow duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="mb-6 inline-block p-4 bg-primary/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
