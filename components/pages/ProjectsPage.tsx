import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { ExternalLink, Terminal, GitBranch, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Brain' | 'Body' | 'Infrastructure'>('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono tracking-tighter uppercase">
            Mission_Logs
          </h1>
          <p className="text-slate-400 max-w-2xl font-light text-lg">
            A registry of engineered solutions across the full AI stack. From semantic layers to metal-level infrastructure.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-800 pb-8">
          {['All', 'Brain', 'Body', 'Infrastructure'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-4 py-2 font-mono text-xs border rounded transition-all duration-300 ${
                filter === f 
                ? 'bg-neon-purple/20 border-neon-purple text-neon-purple' 
                : 'border-slate-800 text-slate-500 hover:border-slate-600 hover:text-slate-300'
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-space-900 border border-slate-800 p-6 rounded-xl hover:border-slate-600 transition-all group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-2 py-1 text-[10px] font-mono rounded border ${
                    project.status === 'Active' ? 'text-green-400 border-green-900/50 bg-green-900/20' :
                    project.status === 'Experimental' ? 'text-neon-purple border-neon-purple/50 bg-neon-purple/20' :
                    'text-slate-500 border-slate-800 bg-slate-900'
                  }`}>
                    {project.status}
                  </div>
                  <Terminal className="w-5 h-5 text-slate-700" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-slate-500 bg-black/40 px-2 py-1 rounded border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  to={project.id === 'os-v2' ? '/architecture' : '#'}
                  className="flex items-center gap-2 text-xs font-mono text-neon-cyan hover:gap-4 transition-all"
                >
                  ACCESS_NODE <ArrowRight className="w-3 h-3" />
                </Link>

                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-purple/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;