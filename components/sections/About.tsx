import React from 'react';
import Terminal from '../ui/Terminal';
import { QrCode } from 'lucide-react';

const About: React.FC = () => {
  const bioText = `Loading profile...
Identity: "Pilot"
Age: 23
Role: AI Systems Engineer
Status: Online
Location: [REDACTED]

> I realized AI isn't magic—it's just really advanced I/O.
> Most people treat LLMs like chat bots.
> I treat them like CPU cores.
> I help businesses control that I/O to build autonomous systems.

Certifications: AWS Solutions Architect (Associate)
Current Objective: Bridging 'Hello World' and Enterprise AGI.`;

  return (
    <section id="about" className="py-24 bg-space-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Terminal */}
          <div className="order-2 lg:order-1">
             <div className="mb-6">
                <h2 className="text-3xl font-mono font-bold text-white mb-2">
                    <span className="text-neon-purple">04.</span> THE PILOT
                </h2>
                <div className="h-px w-24 bg-neon-purple" />
             </div>
             <Terminal text={bioText} />
          </div>

          {/* Right: ID Badge Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative perspective-1000">
             
             {/* Lanyard String (Visual only) */}
             <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-slate-800 z-0" />
             
             {/* The ID Badge */}
             <div className="relative w-72 bg-white rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-1 pb-4 animate-float origin-top transform-gpu rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                
                {/* Plastic Holder Top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-300/80 rounded-t-lg border border-slate-400 z-10 flex justify-center">
                    <div className="w-8 h-1 bg-slate-900 rounded-full mt-2" />
                </div>
                {/* Metal Clip */}
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-12 border-4 border-slate-800 rounded-full z-0" />

                {/* Inner Card */}
                <div className="bg-slate-100 rounded-lg overflow-hidden h-full flex flex-col relative">
                    
                    {/* Holographic Strip */}
                    <div className="h-8 w-full bg-holographic relative overflow-hidden border-b border-slate-200">
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-marquee" />
                    </div>

                    {/* Photo Area */}
                    <div className="p-4 pb-0">
                        <div className="aspect-[4/5] bg-slate-900 rounded w-full overflow-hidden border-2 border-slate-200 relative grayscale">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" 
                                alt="Cruise AI Pilot"
                                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                            />
                            {/* Vertical Text */}
                            <div className="absolute right-1 bottom-1 text-[8px] font-mono text-white/50 origin-bottom-right -rotate-90 whitespace-nowrap">
                                CREATED BY CRUISE.AI
                            </div>
                        </div>
                    </div>

                    {/* Card Footer */}
                    <div className="p-4 pt-2 flex items-end justify-between">
                        <div>
                            <h3 className="font-bold text-black text-xl tracking-tighter leading-none">CRUISE AI</h3>
                            <p className="text-[10px] text-slate-500 font-mono mt-1">SYSTEM ARCHITECT</p>
                        </div>
                        <div className="w-12 h-12 bg-white border border-slate-200 p-1">
                            <QrCode className="w-full h-full text-black" />
                        </div>
                    </div>

                    {/* Plastic Overlay Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-lg z-20" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;