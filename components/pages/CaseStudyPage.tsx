import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Server, Brain, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Back Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-neon-cyan mb-12 transition-colors font-mono text-sm">
           <ArrowLeft className="w-4 h-4" /> RETURN_TO_BASE
        </Link>

        {/* Header */}
        <div className="mb-16 border-b border-slate-800 pb-16">
           <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded bg-neon-purple/20 text-neon-purple border border-neon-purple/50 text-xs font-mono">
                CASE_STUDY_001
              </span>
              <span className="px-3 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800 text-xs font-mono">
                INTERNAL_TOOL
              </span>
           </div>
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
             The Second Brain (OS_V2)
           </h1>
           <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
             An autonomous context ingestion engine that turns 23 years of life data into a queryable, semantic knowledge graph.
           </p>
        </div>

        {/* Technical Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="col-span-2 space-y-8">
               
               <section className="bg-space-900 border border-slate-800 p-8 rounded-xl">
                  <h3 className="text-2xl text-white font-mono mb-6 flex items-center gap-3">
                    <Database className="text-neon-blue" /> Ingestion Pipeline
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    The core challenge was unifying unstructured data. I built a custom <strong>Node.js</strong> ETL pipeline that watches 14 distinct data sources:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {['VS Code Activity Logs', 'Browser History (Chrome Ext)', 'Notion Pages', 'Voice Memos (Whisper)', 'Spotify Listening History', 'Kindle Highlights'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300 font-mono">
                            <span className="w-1.5 h-1.5 bg-neon-purple rounded-full" /> {item}
                        </li>
                     ))}
                  </ul>
               </section>

               <section className="bg-space-900 border border-slate-800 p-8 rounded-xl">
                  <h3 className="text-2xl text-white font-mono mb-6 flex items-center gap-3">
                    <Brain className="text-neon-purple" /> Semantic Layer
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Raw text is chunked and embedded using <strong>Gecko-003</strong> (Vertex AI). These embeddings are stored in a self-hosted <strong>Qdrant</strong> cluster. A custom RAG agent (built with LangGraph) performs "Hypothetical Document Embeddings" (HyDE) to improve retrieval accuracy for vague queries.
                  </p>
               </section>

            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                   <div className="text-xs font-mono text-slate-500 uppercase mb-2">Total Vectors</div>
                   <div className="text-3xl font-mono text-white">142,891</div>
                </div>
                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                   <div className="text-xs font-mono text-slate-500 uppercase mb-2">Daily Ingestion</div>
                   <div className="text-3xl font-mono text-neon-green">~45MB</div>
                </div>
                <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                   <div className="text-xs font-mono text-slate-500 uppercase mb-2">Latency (P99)</div>
                   <div className="text-3xl font-mono text-neon-blue">120ms</div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-800">
                    <h4 className="text-sm font-mono text-white mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'FastAPI', 'Qdrant', 'React', 'Docker', 'GCP'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-black border border-slate-700 rounded text-xs text-slate-300 hover:border-neon-purple transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyPage;