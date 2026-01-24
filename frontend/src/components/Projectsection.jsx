import { motion } from 'framer-motion';
import { projects } from '../assets/assets.js';
import ProjectCard from './ProjectCard.jsx';
import { useNavigate } from 'react-router-dom';
const ProjectSection = () => {
  const navigate = useNavigate();
  return (
    <section id='Project' className="relative z-10 py-24 px-6">
      <div  className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Featured <span className="text-indigo-400">Projects</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-indigo-400 hover:text-white transition-all shadow-lg"
            onClick={() => navigate('/my_project')}
          >
            View More Projects
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;