import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Cpu, Box, RefreshCw } from 'lucide-react';

const MetricCard = ({ label, value, unit, trend }: { label: string, value: string | number, unit: string, trend?: 'up' | 'down' }) => (
  <div className="bg-space-900 border border-slate-800 p-6 rounded-xl">
    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2 flex justify-between">
        {label}
        {trend && <span className={trend === 'up' ? 'text-green-500' : 'text-red-500'}>{trend === 'up' ? '▲' : '▼'}</span>}
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-mono text-white font-bold">{value}</span>
      <span className="text-xs font-mono text-slate-600">{unit}</span>
    </div>
  </div>
);

const LabsPage: React.FC = () => {
  const [metrics, setMetrics] = useState({
    latency: 142,
    context: 89,
    drift: 0.04
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        latency: Math.floor(130 + Math.random() * 20),
        context: Math.floor(85 + Math.random() * 5),
        drift: parseFloat((0.03 + Math.random() * 0.02).toFixed(3))
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono tracking-tighter uppercase">
              The_Forge
            </h1>
            <p className="text-slate-400 max-w-2xl font-light text-lg leading-relaxed">
              Unstable builds, RAG stress tests, and autonomous agent benchmarking. This is where we break things to learn how they work.
            </p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-green-950/20 border border-green-500/30 rounded-full text-green-500 text-xs font-mono animate-pulse">
            <Activity className="w-4 h-4" /> LIVE_DATALINK_ESTABLISHED
          </div>
        </header>

        {/* Real-time Metrics Board */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <MetricCard label="Mean Latency" value={metrics.latency} unit="ms" trend="down" />
          <MetricCard label="Context Utilization" value={`${metrics.context}%`} unit="cap" trend="up" />
          <MetricCard label="Embedding Drift" value={metrics.drift} unit="δ" />
          <div className="bg-neon-purple/5 border border-neon-purple/20 p-6 rounded-xl flex flex-col justify-center items-center text-center">
             <Zap className="w-8 h-8 text-neon-purple mb-2 animate-pulse" />
             <div className="text-[10px] font-mono text-neon-purple uppercase">GPU Load</div>
             <div className="text-xl font-mono text-white">92.4%</div>
          </div>
        </div>

        {/* Active Experiments */}
        <div className="space-y-8">
           <h2 className="text-xl font-mono text-slate-400 mb-8 border-l-2 border-neon-purple pl-4">ACTIVE_EXPERIMENTS</h2>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Exp 1 */}
              <div className="bg-space-900 border border-slate-800 p-8 rounded-2xl group hover:border-neon-cyan transition-colors">
                 <div className="flex gap-4 mb-6">
                    <div className="p-3 bg-slate-800 rounded-lg text-neon-cyan"><Box /></div>
                    <div>
                       <h3 className="text-white font-mono font-bold text-xl">Project: Phantom_State</h3>
                       <p className="text-slate-500 text-xs font-mono">ID: EXP-092-ALPHA</p>
                    </div>
                 </div>
                 <p className="text-slate-400 mb-8 leading-relaxed">
                    Testing ephemeral agent memories. Agents are spawned with 0-shot context and must reconstruct their task by querying a distributed vector-graph.
                 </p>
                 <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-neon-cyan" 
                        animate={{ width: '65%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    />
                 </div>
                 <div className="mt-4 flex justify-between text-[10px] font-mono text-slate-600">
                    <span>PROGRESS: 65%</span>
                    <span>STABILITY: NOMINAL</span>
                 </div>
              </div>

              {/* Exp 2 */}
              <div className="bg-space-900 border border-slate-800 p-8 rounded-2xl group hover:border-neon-purple transition-colors">
                 <div className="flex gap-4 mb-6">
                    <div className="p-3 bg-slate-800 rounded-lg text-neon-purple"><RefreshCw /></div>
                    <div>
                       <h3 className="text-white font-mono font-bold text-xl">Project: Recursive_RAG</h3>
                       <p className="text-slate-500 text-xs font-mono">ID: EXP-104-BETA</p>
                    </div>
                 </div>
                 <p className="text-slate-400 mb-8 leading-relaxed">
                    Models analyzing their own embedding patterns to suggest optimal chunking strategies dynamically. Self-correcting retrieval loops.
                 </p>
                 <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-4 w-12 bg-neon-purple/20 border border-neon-purple/40 rounded animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                 </div>
                 <div className="mt-4 text-[10px] font-mono text-neon-purple">
                    LOOP_STATUS: RECURSIVE_ITERATION_84
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default LabsPage;