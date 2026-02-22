import React from 'react';
import { motion } from 'framer-motion';
import { Triangle as PrismIcon, MousePointer2, Server } from 'lucide-react';

interface MethodCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

const MethodCard: React.FC<MethodCardProps> = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div 
      className="bg-space-900 border border-slate-800 p-8 rounded-xl relative group overflow-hidden hover:border-neon-purple/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
         <Icon className="w-24 h-24 text-slate-500" />
      </div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-mono font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 bg-space-950 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-mono font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-neon-purple">01.</span> THE ENGINE
          </h2>
          <div className="h-px w-full bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MethodCard 
            title="Context Engineering (ACE)"
            description="LLMs are only as good as their context. We don't just dump text; we engineer precise, semantic data pipelines that give models the exact information they need."
            icon={PrismIcon} // Using Lucide alias if available or generic
            delay={0.1}
          />
          <MethodCard 
            title="The Agentic Workforce"
            description="Orchestrating autonomous squads (QA, Doc, Security) to handle the busy work. We build the factories that build the code."
            icon={MousePointer2}
            delay={0.2}
          />
          <MethodCard 
            title="System Architecture"
            description="Self-hosted, air-gapped, or cloud-native. We bridge the gap between experimental notebooks and production-grade Kubernetes clusters."
            icon={Server}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Methodology;