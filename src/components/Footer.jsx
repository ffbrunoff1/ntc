import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753803222065_0.png';

  const navLinks = [
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  const contactInfo = [
    {
      icon: <Phone size={18} />,
      text: '+55 44 99104-0774',
      href: 'tel:+5544991040774',
    },
    {
      icon: <Mail size={18} />,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    {
      icon: <MapPin size={18} />,
      text: 'Padre Lebret 801, G05 Bloco 03',
      href: '#',
    },
  ];

  return (
    <motion.footer
      className="bg-dark-text text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#home">
              <img
                src={logoUrl}
                alt="NTC BRASIL Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Comprometidos com a excelência, transformamos ideias em projetos
              sólidos e duradouros. Qualidade e confiabilidade em cada tijolo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white tracking-wider">
              Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-primary">{item.icon}</span>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white tracking-wider">
              Nosso Compromisso
            </h4>
            <p className="text-slate-400 text-sm">
              Sua visão é nossa missão. Entre em contato e descubra como podemos
              ajudar a tornar seu próximo projeto um sucesso absoluto.
            </p>
            <a href="#contato" className="btn btn-primary mt-6 text-sm">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} NTC BRASIL. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
