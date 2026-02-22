import React from 'react';
import { TECH_STACK } from '../../constants';

const TechStack: React.FC = () => {
  const brainItems = TECH_STACK.filter(i => i.category === 'Brain');
  const bodyItems = TECH_STACK.filter(i => i.category === 'Body');
  const infraItems = TECH_STACK.filter(i => i.category === 'Infrastructure');

  const MarqueeRow = ({ items, reverse = false }: { items: typeof TECH_STACK, reverse?: boolean }) => (
    <div className="flex overflow-hidden py-4 group relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-space-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-space-950 to-transparent z-10" />
        
        <div className={`flex gap-8 ${reverse ? 'animate-reverse-marquee' : 'animate-marquee'} min-w-full hover:[animation-play-state:paused]`}>
            {[...items, ...items, ...items].map((item, idx) => (
                <div key={`${item.name}-${idx}`} className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-full whitespace-nowrap text-slate-300 hover:border-neon-purple/50 hover:text-white transition-colors">
                    <span className="opacity-70">{item.icon}</span>
                    <span className="font-mono text-sm">{item.name}</span>
                </div>
            ))}
        </div>
    </div>
  );

  return (
    <section id="stack" className="py-24 bg-space-950 border-t border-slate-900">
       <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl font-mono font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-neon-purple">03.</span> THE ARSENAL
          </h2>
          <div className="h-px w-full bg-slate-800" />
       </div>

       <div className="flex flex-col gap-8">
           {/* Brain Layer */}
           <div className="relative">
               <div className="container mx-auto px-6 mb-2">
                   <span className="text-xs font-mono text-neon-blue uppercase tracking-widest">Logic Layer</span>
               </div>
               <MarqueeRow items={brainItems} />
           </div>

           {/* Body Layer */}
           <div className="relative">
               <div className="container mx-auto px-6 mb-2">
                   <span className="text-xs font-mono text-neon-purple uppercase tracking-widest">Interface Layer</span>
               </div>
               <MarqueeRow items={bodyItems} reverse />
           </div>

           {/* Infra Layer */}
           <div className="relative">
               <div className="container mx-auto px-6 mb-2">
                   <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Metal Layer</span>
               </div>
               <MarqueeRow items={infraItems} />
           </div>
       </div>
    </section>
  );
};

export default TechStack;
