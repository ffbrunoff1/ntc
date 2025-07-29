import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, ClipboardList, Building2, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ClipboardList size={40} className="text-white" />,
      title: 'Planejamento e Gestão de Obras',
      description:
        'Coordenação completa do seu projeto, desde a concepção até a entrega, garantindo eficiência, controle de custos e cumprimento de prazos.',
    },
    {
      icon: <HardHat size={40} className="text-white" />,
      title: 'Construção Residencial',
      description:
        'Edificamos lares com design inovador e acabamentos de alta qualidade, criando espaços que combinam conforto, funcionalidade e estilo.',
    },
    {
      icon: <Building2 size={40} className="text-white" />,
      title: 'Edificações Comerciais e Industriais',
      description:
        'Desenvolvemos estruturas comerciais e industriais robustas e otimizadas para o seu negócio, focando em produtividade e segurança.',
    },
    {
      icon: <Wrench size={40} className="text-white" />,
      title: 'Reformas e Retrofit',
      description:
        'Modernizamos e revitalizamos espaços existentes, incorporando novas tecnologias e designs para aumentar o valor e a vida útil do seu imóvel.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Soluções Completas em{' '}
            <span className="gradient-text">Construção</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Oferecemos um portfólio de serviços abrangente para atender a todas
            as fases do seu projeto com a máxima competência e dedicação.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-xl overflow-hidden bg-dark-text text-white flex flex-col h-full"
              variants={cardVariants}
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-primary/30 rounded-br-full group-hover:scale-150 transition-transform duration-500 ease-in-out"></div>
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="mb-6 bg-primary p-4 rounded-lg inline-block self-start group-hover:bg-white group-hover:[&>svg]:text-primary transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
