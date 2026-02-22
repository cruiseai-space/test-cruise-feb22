import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  text: string;
}

const Terminal: React.FC<TerminalProps> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Typing speed

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <div className="bg-space-900 border border-slate-800 rounded-lg p-4 font-mono text-sm shadow-2xl relative overflow-hidden group">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <div className="flex-1 text-center text-xs text-slate-500 flex items-center justify-center gap-1">
          <TerminalIcon className="w-3 h-3" />
          pilot@cruise.ai:~/bio
        </div>
      </div>
      
      {/* Content */}
      <div className="text-slate-300 leading-relaxed min-h-[150px]">
        <span className="text-neon-purple mr-2">➜</span>
        <span className="text-neon-cyan mr-2">~</span>
        {displayedText}
        <span 
          className={`inline-block w-2 h-4 bg-neon-purple ml-1 align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Gloss effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default Terminal;
