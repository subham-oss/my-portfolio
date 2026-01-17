import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

import {assets} from '../assets/assets.js';

const AboutSection = () => {
  const education = [
    {
      id: 1,
      title: "MCKV Institute of Engineering",
      sub: "B.Tech in ECE",
      details: "YGPA 1: 9.24 | YGPA 2: 9.26",
      icon: <GraduationCap className="text-indigo-400" size={24} />
    },
    {
      id: 2,
      title: "Higher Secondary (12th)",
      sub: "Howrah Vivekananda Institution",
      details: "Marks: 74%",
      icon: <BookOpen className="text-purple-400" size={24} />
    },
    {
      id: 3,
      title: "Secondary (10th)",
      sub: "Howrah Vivekananda Institution",
      details: "Marks: 78%",
      icon: <Award className="text-blue-400" size={24} />
    }
  ];

  return (
    <section className="relative z-10 py-20 px-6 overflow-hidden">
         <h2 className="text-4xl text-center font-black text-white  mb-20">
                About <span className="text-indigo-400">Me</span>
              </h2>
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative w-md h-md rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <img 
                  src={assets.my_image} 
                  alt="Subham Chakraborty" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
             
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                As an <span className="text-white font-semibold">ECE Graduate</span> and passionate Software Engineer, 
                I specialize in building full-stack web applications using the <span className="text-indigo-400">MERN Stack</span>. 
                I thrive on solving complex problems and turning innovative ideas into efficient, 
                high-performance digital solutions.
              </p>
            </motion.div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left group transition-all hover:bg-white/10"
                >
                  <div className="mb-3 p-3 bg-indigo-500/20 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-[11px] mb-2 leading-tight">{item.sub}</p>
                  <span className="text-indigo-300 font-mono text-[10px] mt-auto">
                    {item.details}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;