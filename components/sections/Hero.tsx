import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-space-950 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Wireframe Logo Container */}
        <div 
          className="relative w-72 h-72 mb-12 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logo SVG (Wireframe Representation) */}
          <motion.div 
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
               <defs>
                 <linearGradient id="wireframe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#00f0ff" />
                 </linearGradient>
               </defs>
               
               {/* Complex Wireframe Shape */}
               <motion.path 
                 d="M100 20 C 150 20, 180 50, 180 100 C 180 150, 150 180, 100 180 C 50 180, 20 150, 20 100 C 20 50, 50 20, 100 20 Z"
                 fill="none"
                 stroke="url(#wireframe-grad)"
                 strokeWidth="0.5"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />
               
               {/* Inner Geometry Lines */}
               {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                 <motion.ellipse 
                   key={i}
                   cx="100" cy="100" rx="40" ry="80"
                   fill="none"
                   stroke="rgba(255,255,255,0.1)"
                   strokeWidth="0.5"
                   transform={`rotate(${deg} 100 100)`}
                 />
               ))}
               
               {/* Central Core */}
               <circle cx="100" cy="100" r="10" fill="#050505" stroke="#00f0ff" strokeWidth="2" />
            </svg>
          </motion.div>
          
          {/* Glowing Backlight */}
          <div className="absolute inset-0 bg-neon-purple/20 blur-[60px] rounded-full z-[-1]" />

          {/* Context Labels (Hover Reveal) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {['Context', 'Execution', 'RAG', 'Agents'].map((label, i) => (
               <motion.div 
                 key={label}
                 className="absolute text-xs font-mono text-slate-500"
                 style={{ 
                    top: i === 0 ? '-20px' : i === 1 ? 'auto' : '50%',
                    bottom: i === 1 ? '-20px' : 'auto',
                    left: i === 2 ? '-40px' : 'auto',
                    right: i === 3 ? '-40px' : 'auto',
                    transform: i > 1 ? 'translateY(-50%)' : 'translateX(-50%)'
                 }}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: isHovered ? 1 : 0 }}
               >
                  {label}
               </motion.div>
             ))}
          </div>
        </div>

        {/* Text Content */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Taming Intelligence.
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Beyond Vibe Coding. We build autonomous, <span className="text-neon-cyan">context-aware</span> AI systems that actually ship.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#contact" className="group relative px-8 py-4 bg-neon-purple/10 border border-neon-purple/50 text-neon-purple font-mono text-sm tracking-wide rounded hover:bg-neon-purple hover:text-white transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
             <span className="relative z-10 flex items-center gap-2">
               INITIALIZE SEQUENCE <ChevronRight className="w-4 h-4" />
             </span>
             <div className="absolute inset-0 bg-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </a>

          <Link to="/architecture" className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-mono text-sm tracking-wide rounded hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center">
            VIEW ARCHITECTURE
          </Link>
        </motion.div>

      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to initiate</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;