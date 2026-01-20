import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/subham-oss", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/subham448/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://x.com/SubhamChak24158", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:chakrabortysubham448@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative z-10 pt-20 pb-10 px-6 border-t border-white/10 bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-black text-white tracking-tighter mb-3">
              SUBHAM<span className="text-indigo-500">.</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xs">
              Designing and developing high-performance web applications with a focus on user experience and clean code.
            </p>
          </motion.div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(99, 102, 241, 0.2)', color: '#818cf8' }}
                className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-xs md:text-sm font-mono"
          >
            &copy; {currentYear} Subham Chakraborty. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            Back to top
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-indigo-500 transition-colors">
              <ChevronUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-indigo-500/10 blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;