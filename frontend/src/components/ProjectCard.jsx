import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-md border border-indigo-500/30">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 ">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4">
          <a href={project.github_link} className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center gap-1 text-sm">
            <Github size={18}/> Code
          </a>
          <a href={project.src} className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center gap-1 text-sm">
            <ExternalLink size={18}/> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;