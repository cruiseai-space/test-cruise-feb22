import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { CommandResponse } from '../../types';

const Footer: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    
    if (cmd === 'help') {
      setShowModal(true);
      setHistory(prev => [...prev, `> ${input}`, 'Opening help interface...']);
    } else if (cmd === 'clear') {
        setHistory([]);
    } else {
      setHistory(prev => [...prev, `> ${input}`, `Command not found: ${cmd}. Type 'help' for options.`]);
    }
    setInput('');
  };

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <footer id="contact" className="bg-black border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
                <h3 className="text-2xl font-mono font-bold text-white mb-6">Cruise.ai</h3>
                <p className="text-slate-400 max-w-sm mb-6">
                    Engineering the future of intelligence. Based in the Cloud, available worldwide.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-purple transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-blue transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:hello@cruise.ai" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-cyan transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Mini CLI */}
            <div className="bg-space-900 border border-slate-800 rounded-lg p-4 font-mono text-sm h-48 flex flex-col">
                <div className="text-slate-500 border-b border-slate-800 pb-2 mb-2 text-xs flex justify-between">
                    <span>guest@cruise.ai:~</span>
                    <span>bash</span>
                </div>
                <div className="flex-1 overflow-y-auto text-slate-300 space-y-1 scrollbar-hide" ref={scrollRef}>
                    <div className="text-slate-500">Type 'help' to initialize contact protocol...</div>
                    {history.map((line, i) => (
                        <div key={i} className="break-all">{line}</div>
                    ))}
                </div>
                <form onSubmit={handleCommand} className="mt-2 flex gap-2">
                    <span className="text-neon-purple">➜</span>
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-transparent border-none outline-none text-white w-full placeholder-slate-600"
                        placeholder="Enter command..."
                    />
                </form>
            </div>
        </div>

        <div className="text-center text-slate-600 text-xs font-mono">
            &copy; {new Date().getFullYear()} Cruise.ai. All systems nominal.
        </div>

      </div>

      {/* Modal Mockup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-space-900 border border-neon-purple rounded-xl p-8 max-w-md w-full relative shadow-[0_0_50px_rgba(124,58,237,0.2)]">
                <button 
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-white"
                >
                    ✕
                </button>
                <h3 className="text-xl font-bold text-white mb-4">Command Acknowledged</h3>
                <p className="text-slate-300 mb-6">
                    You've discovered the secure channel. Are you ready to build something that thinks?
                </p>
                <div className="space-y-3">
                    <button className="w-full py-3 bg-neon-purple text-white font-mono rounded hover:bg-neon-purple/80 transition-colors">
                        SCHEDULE_DISCOVERY_CALL()
                    </button>
                    <button className="w-full py-3 bg-slate-800 text-slate-300 font-mono rounded hover:bg-slate-700 transition-colors">
                        VIEW_GITHUB_REPOS()
                    </button>
                </div>
            </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
