


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const TypingText = ({ text, className }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, 
        delayChildren: 0.3,    
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={childVariants}>
          {char}
        </motion.span>
      ))}
      
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8,  ease: "linear"  }}
        className="inline-block w-0.75 h-[1em] bg-indigo-400 ml-1 align-text-bottom"
      />
    </motion.h1>
  );
};



const Herosection = () => {

  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setResetKey((prev) => prev + 1);
    }, 3500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='Home' className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20 md:py-0">
        
      
      <div  className="w-full max-w-6xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        
        <div className="lg:grid  lg:grid-cols-2 min-h-150">
            
         
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 lg:order-1">
            
            
            <motion.span 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-indigo-400 font-mono mb-4 block"
            >
              Hello, world! &gt;_
            </motion.span>


           <AnimatePresence mode="wait">
              <TypingText 
                key={resetKey}
                text="I am Subham Chakraborty" 
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight min-h-[120px] md:min-h-[150px]"
              />
            </AnimatePresence>
            

            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 2.5, duration: 1 }} 
               className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl"
            >
              An undergraduate **ECE 3rd year student** with a deep passion for building software. I bridge the gap between hardware understanding and modern full-stack development, crafting seamless digital experiences.
            </motion.p>

            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 2.8 }}
               className="flex items-center gap-6"
            >
              <SocialLink href="https://github.com/subham-oss" icon={<Github size={24} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/subham448/" icon={<Linkedin size={24} />} label="LinkedIn" />
              <SocialLink href="mailto:chakrabortysubham448@gmail.com" icon={<Mail size={24} />} label="Email" />
            </motion.div>
          </div>

          <div className="relative hidden lg:block h-100 lg:h-auto w-full bg-white/5 order-1 lg:order-2 overflow-hidden">
            
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-yoG30mu76i21TXkZlkK50axS/'
              frameBorder='0' 
              width='100%' 
              height='100%' 
              className="absolute inset-0 w-full h-full pointer-events-none lg:pointer-events-auto scale-125 lg:scale-100 origin-center"
              title="3D tech animation"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none lg:hidden"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 p-2 hover:bg-white/5 rounded-full"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Herosection;
