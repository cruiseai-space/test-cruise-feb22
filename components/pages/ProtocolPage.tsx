import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Send, ShieldCheck, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProtocolPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Initializing secure uplink...',
    'Encryption layers: ACTIVE',
    'Connection: 128-bit E2EE',
    '',
    'Welcome to the Cruise.ai Protocol Interface.',
    "Type 'help' to see available contact protocols."
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `➜ ${input}`];

    if (cmd === 'help') {
      newHistory.push('Available protocols:', '  --email       Open direct mail uplink', '  --linkedin    Connect via professional network', '  --github      Inspect open source artifacts', '  --clear       Reset terminal buffer');
    } else if (cmd === '--email') {
      newHistory.push('Redirecting to mail client...');
      window.location.href = "mailto:hello@cruiseai.space";
    } else if (cmd === '--clear') {
      setHistory([]);
      setInput('');
      return;
    } else {
      newHistory.push(`Unknown protocol: ${cmd}. Initialize 'help' for options.`);
    }

    setHistory(newHistory);
    setInput('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="min-h-screen bg-space-950 pt-32 pb-12 flex flex-col">
      <div className="container mx-auto px-6 flex-1 flex flex-col">
        
        <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                <h1 className="text-xl font-mono text-white tracking-widest uppercase">Contact_Protocol</h1>
            </div>
            <div className="h-px w-full bg-slate-800" />
        </header>

        <div className="flex-1 bg-space-900 border border-slate-800 rounded-xl p-8 font-mono text-sm relative overflow-hidden flex flex-col shadow-2xl">
            {/* Header Decorations */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
            <div className="flex justify-between items-center mb-8 text-slate-500 text-[10px]">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> SECURE</span>
                    <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> CONNECTED</span>
                </div>
                <div>NODE: CRUISE_SEA_01</div>
            </div>

            {/* Terminal History */}
            <div className="flex-1 overflow-y-auto mb-8 space-y-2 scrollbar-hide" ref={scrollRef}>
                {history.map((line, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className={line.startsWith('➜') ? 'text-neon-cyan' : 'text-slate-400'}
                    >
                        {line}
                    </motion.div>
                ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleCommand} className="flex gap-4 items-center border-t border-slate-800 pt-6">
                <span className="text-neon-purple font-bold">➜</span>
                <input 
                    autoFocus
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder-slate-700"
                    placeholder="Enter command..."
                />
                <button type="submit" className="p-2 text-slate-500 hover:text-white transition-colors">
                    <Send className="w-5 h-5" />
                </button>
            </form>

            {/* Backdrop Glow */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="mt-8 text-center">
            <Link to="/" className="text-xs font-mono text-slate-600 hover:text-slate-400 transition-colors">
                RETURN_TO_HOME_MODULE
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProtocolPage;