import { motion } from 'framer-motion';
import { techStackAssets } from '../assets/assets.js'; 



const FlipCard = ({ image, name }) => {
  return (
    <motion.div
      style={{ perspective: "1000px" }} 
      className="w-32 h-32 md:w-36 md:h-36 cursor-pointer"
       initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        whileHover={{ rotateY: 180 }}
        style={{ transformStyle: "preserve-3d" }}
        transition={{duration:0.1, ease:"easeInOut"}}
      >
        
        <div 
          className="absolute inset-0 w-full h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center p-1 shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={image} alt={name} className="w-full h-full rounded-full object-contain filter  hover:grayscale-0 transition-all" />
        </div>

        <div 
          className="absolute inset-0 w-full h-full bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          {name}
        </div>
      </motion.div>
    </motion.div>
  );
};


const TechStack = () => {
  const firstRow = techStackAssets.slice(0, 5);
  const secondRow = techStackAssets.slice(5, 8);

  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
         className="text-3xl md:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
         >
          My <span className="text-indigo-400">Tech Stack</span>
        </motion.h2>
        <div
        className="grid pl-5 sm:pl-36 grid-cols-2 gap-6 md:hidden"
       
        >
          {techStackAssets.map((tech, index) => (
            <FlipCard key={index} image={tech.img} name={tech.name} />
          ))}
        </div>
        <div className="hidden md:flex flex-col gap-8 items-center">
          <div className="flex flex-wrap justify-center gap-14">
            {firstRow.map((tech, index) => (
              <FlipCard key={index} image={tech.img} name={tech.name} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {secondRow.map((tech, index) => (
              <FlipCard key={index} image={tech.img} name={tech.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
