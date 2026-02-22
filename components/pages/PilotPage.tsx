import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, MapPin, Activity, Terminal as TerminalIcon, FileText, Cpu, Globe } from 'lucide-react';
import Terminal from '../ui/Terminal';

const EXPERIENCE = [
  {
    year: "2024 - PRESENT",
    role: "AI SYSTEMS ARCHITECT",
    company: "CRUISE.AI",
    description: "Designing autonomous RAG pipelines and high-concurrency agentic workflows. Focus on productionizing Gemini-flash and pro models for enterprise context ingestion.",
    clearance: "LEVEL_01"
  },
  {
    year: "2022 - 2024",
    role: "CLOUD INFRASTRUCTURE ENGINEER",
    company: "STEALTH_LABS",
    description: "Optimized GPU orchestration for model fine-tuning. Scaled AWS-native serverless backends to handle 1M+ daily semantic queries.",
    clearance: "LEVEL_02"
  }
];

const CERTIFICATIONS = [
  { name: "AWS SOLUTIONS ARCHITECT", issuer: "AMAZON WEB SERVICES", id: "SA-10293", color: "text-orange-400" },
  { name: "DEEP LEARNING SPECIALIZATION", issuer: "DEEPLEARNING.AI", id: "DL-4482", color: "text-neon-blue" },
  { name: "KUBERNETES ADMINISTRATOR", issuer: "CNCF", id: "CKA-9921", color: "text-neon-cyan" }
];

const PilotPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Profile Header */}
        <header className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="relative group">
                <div className="w-48 h-48 bg-slate-900 border-2 border-slate-800 rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                        alt="Pilot" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-neon-purple text-white p-2 rounded-lg border border-neon-purple shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                    <Shield className="w-6 h-6" />
                </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white font-mono tracking-tighter uppercase">Pilot_01</h1>
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/30 rounded font-mono text-xs animate-pulse">
                    SYSTEMS_NOMINAL
                  </span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-500 font-mono text-sm mb-8">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-neon-cyan" /> CLOUD_NATIVE</span>
                <span className="flex items-center gap-2"><Activity className="w-4 h-4 text-neon-purple" /> LATENCY: 14MS</span>
                <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-neon-blue" /> GLOBAL_ACCESS</span>
              </div>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                Specializing in the intersection of high-scale cloud infrastructure and autonomous intelligence. I build systems that don't just predict next tokens—they execute missions.
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Dossier & Stats */}
          <div className="lg:col-span-1 space-y-12">
            
            <section>
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <TerminalIcon className="w-3 h-3" /> Core_Processor
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Python (PyTorch)', val: 94 },
                  { label: 'Cloud Architecture', val: 98 },
                  { label: 'Agentic Workflows', val: 89 },
                  { label: 'Vector Databases', val: 92 }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                      <span>{stat.label}</span>
                      <span>{stat.val}%</span>
                    </div>
                    <div className="h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.val}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-neon-purple" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <Award className="w-3 h-3" /> Credentials
              </h3>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="bg-space-900 border border-slate-800 p-4 rounded-xl hover:border-slate-600 transition-colors group">
                    <div className={`text-[10px] font-mono ${cert.color} mb-1`}>{cert.issuer}</div>
                    <div className="text-white font-mono text-sm mb-1">{cert.name}</div>
                    <div className="text-[10px] font-mono text-slate-600">ID: {cert.id}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Experience Flight Logs */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
               <h3 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <FileText className="w-3 h-3" /> Flight_Logs (Experience)
              </h3>

              <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 ml-4 hidden md:block" />

                {EXPERIENCE.map((job, i) => (
                  <motion.div 
                    key={job.company}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="relative md:pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-0 w-8 h-8 bg-space-950 border-2 border-neon-purple rounded-full flex items-center justify-center ml-0 hidden md:flex z-10 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                       <Cpu className="w-3 h-3 text-neon-purple" />
                    </div>

                    <div className="bg-space-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900/50 transition-colors group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <span className="text-neon-cyan font-mono text-xs">{job.year}</span>
                                <h4 className="text-2xl font-bold text-white font-mono uppercase tracking-tighter">{job.role}</h4>
                                <p className="text-slate-500 font-mono text-sm">{job.company}</p>
                            </div>
                            <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded text-[10px] font-mono text-slate-400 group-hover:text-neon-purple transition-colors">
                                CLEARANCE: {job.clearance}
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed font-light">
                            {job.description}
                        </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PilotPage;