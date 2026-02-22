import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Database, Brain, Terminal, Server } from 'lucide-react';
import { PIPELINE_STEPS } from '../../constants';

const Showcase: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="showcase" className="py-24 bg-space-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-mono font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-neon-purple">02.</span> THE SECOND BRAIN
          </h2>
          <div className="h-px w-full bg-slate-800" />
        </div>

        <div className="flex justify-center perspective-1000">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="w-full max-w-4xl bg-space-900 border border-slate-700 rounded-2xl p-8 md:p-12 relative shadow-2xl"
          >
            {/* Gloss Highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl pointer-events-none" style={{ transform: "translateZ(20px)" }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10" style={{ transform: "translateZ(40px)" }}>
              
              {/* Left Content */}
              <div>
                 <div className="inline-block px-3 py-1 bg-neon-purple/20 text-neon-purple text-xs font-mono rounded mb-4 border border-neon-purple/50">
                    CASE STUDY: OS_V2
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4">Total Digital Ingestion</h3>
                 <p className="text-slate-400 mb-6 leading-relaxed">
                   A comprehensive personal data warehouse that ingests VS Code logs, browsing history, and voice notes into a structured vector database. It doesn't just store files; it creates semantic links between thoughts.
                 </p>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                   {['Vertex AI', 'MongoDB', 'Qdrant', 'Docker'].map((tech) => (
                     <span key={tech} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700">
                       {tech}
                     </span>
                   ))}
                 </div>

                 <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-white font-mono">13,000+</div>
                    <div className="text-sm text-slate-500">Thoughts<br/>Indexed</div>
                 </div>
              </div>

              {/* Right Visualization */}
              <div className="flex flex-col justify-center gap-6 relative">
                 {/* Connecting Line Background */}
                 <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-800 md:hidden" />
                 
                 {PIPELINE_STEPS.map((step, index) => (
                   <motion.div 
                      key={step.label}
                      className="flex items-center gap-4 bg-space-950 p-3 rounded-lg border border-slate-800 relative z-10"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                   >
                      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 shrink-0">
                        {step.icon}
                      </div>
                      <div className="font-mono text-sm text-slate-300">
                        {step.label}
                      </div>
                      {index < PIPELINE_STEPS.length - 1 && (
                         <ArrowRight className="w-4 h-4 text-slate-600 ml-auto hidden md:block" />
                      )}
                   </motion.div>
                 ))}
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl pointer-events-none" />
            
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;
