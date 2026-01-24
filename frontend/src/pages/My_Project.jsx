import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projects } from '../assets/assets.js';
const My_Project = () => {
  return (
    <div className={`relative min-h-screen bg-slate-900 overflow-x-hidden ${scrollTo(0, 0)}`}>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-black" />
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <header className="pt-12 pb-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/">
              <motion.button 
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} /> Back to Home
              </motion.button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-white">
              All <span className="text-indigo-400">Works</span>
            </h1>
            <div className="hidden md:block w-32"></div> 
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default My_Project;