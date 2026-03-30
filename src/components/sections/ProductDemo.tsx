'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Zap, Activity, MousePointer2, RefreshCw } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ProductDemo = () => {
  const [inputText, setInputText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState("");
  const [tokens, setTokens] = useState(0);

  const mockResponse = "Prompta Protocol v2.4 initialized. Optimizing prompt vector for cross-model alignment... High-dimensional projection successful. Resulting prompt achieves 98.4% coherence score with multi-agent consensus. Ready for final deployment.";

  const handleStartDemo = () => {
    if (isStreaming) return;
    setIsStreaming(true);
    setStreamedText("");
    setTokens(0);
    setInputText("Optimize this prompt for futuristic architecture visualization.");

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < mockResponse.length) {
        setStreamedText((prev) => prev + mockResponse[currentIndex]);
        setTokens((prev) => prev + 1);
        currentIndex++;
      } else {
        setIsStreaming(false);
        clearInterval(interval);
      }
    }, 30);
  };

  return (
    <div className="w-full max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-full py-20">
      {/* Left: Input Console */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="glass p-6 rounded-2xl relative border-glow"
      >
        <div className="flex items-center gap-2 mb-4 text-accent-primary opacity-80">
          <Terminal size={18} />
          <span className="text-xs font-mono uppercase tracking-widest">Input Console</span>
        </div>
        
        <div className="bg-black/40 p-4 rounded-xl font-mono text-sm h-48 border border-white/5 relative overflow-hidden group">
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="[ ENTER RAW PROMPT VECTOR ]"
            className="w-full h-full bg-transparent outline-none resize-none text-foreground/80 placeholder:text-foreground/20"
          />
          <AnimatePresence>
            {!isStreaming && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleStartDemo}
                className="absolute bottom-4 right-4 bg-accent-primary text-white p-2 rounded-lg hover:scale-110 active:scale-95 transition-all shadow-lg shadow-accent-primary/20"
              >
                <Zap size={16} fill="white" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-foreground/40">
            <Cpu size={14} /> SYSTEM: ACTIVE
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-foreground/40">
            <Activity size={14} /> LATENCY: 12ms
          </div>
        </div>
      </motion.div>

      {/* Right: Output Engine */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <div className={cn(
          "glass p-8 rounded-2xl transition-all duration-500 min-h-[320px] relative overflow-hidden",
          isStreaming ? "border-accent-primary/50 shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.1)]" : "border-white/5"
        )}>
          {/* Orbiting Loader Animation */}
          <AnimatePresence>
            {isStreaming && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-4 right-4"
              >
                <div className="relative w-12 h-12">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 border-2 border-accent-primary/20 border-t-accent-primary rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <RefreshCw size={14} className="animate-spin text-accent-primary" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-xs font-mono text-accent-primary mb-6 flex justify-between items-center">
            <span>[ GENERATED_OUTPUT ]</span>
            <span className="bg-accent-primary/10 px-2 py-0.5 rounded text-[10px]">TOKENS: {tokens}</span>
          </div>

          <div className="font-mono text-sm leading-relaxed text-foreground/90 h-[200px] overflow-y-auto pr-2 custom-scrollbar">
            {streamedText}
            {isStreaming && (
              <motion.span 
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="inline-block w-2 h-4 bg-accent-primary ml-1 align-middle"
              />
            )}
            {!isStreaming && !streamedText && (
              <span className="text-foreground/20 italic italic">Awaiting neural engine engagement...</span>
            )}
          </div>

          {/* Glitch Overlay State */}
          <div className="absolute inset-0 bg-accent-primary/5 opacity-5 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};
