import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {assets} from '../assets/assets.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'Project', href: '#Project' },
    { name: 'About', href: '#About' },
    { name: 'Contact', href: '#Contact' },
  ];

  return (
    < >
      
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex justify-between items-center shadow-2xl">
         
          <div className="text-white font-bold text-xl tracking-tighter">
            <img src={assets.logo} alt="Logo" />
          </div>

        
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
             <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

         
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 flex items-center justify-center"
          >
           
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-xl" 
              onClick={() => setIsOpen(false)}
            />

          
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
            >
              <X size={32} />
            </button>

        
            <motion.ul 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-10 text-center flex flex-col gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                 <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold text-white hover:text-indigo-400 transition"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      
    </>
  );
};

export default Navbar;




