'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowRight, Orbit } from 'lucide-react';

export const FinalCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full min-h-full flex flex-col justify-center items-center py-20 px-6 relative bg-black/20 overflow-hidden lg:overflow-visible"
    >
      {/* Parallax Background Text */}
      <motion.div 
        animate={{ x: -mousePosition.x, y: -mousePosition.y }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.08] select-none pointer-events-none overflow-hidden"
      >
        <div className="text-center font-black uppercase tracking-tighter leading-[0.85] w-full">
          <div className="text-[18vw] block">NEURAL</div>
          <div className="text-[18vw] block">NETWORK</div>
        </div>
      </motion.div>

      <div className="z-10 text-center max-w-4xl px-6 relative">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="mb-8 inline-block"
        >
            <div className="p-4 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary animate-pulse">
                <Orbit size={48} />
            </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-none"
        >
          READY TO <span className="text-accent-primary italic text-glow">ASCEND</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/50 max-w-2xl mx-auto mb-16 font-mono font-medium"
        >
          Join the elite 5% of prompt engineers who have integrated the PROMPTA protocol into their neural workflow.
        </motion.p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <MagneticButton className="bg-white text-black text-xl px-12 py-6 flex items-center gap-3 group shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            DEPLOY NOW
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </MagneticButton>
          
          <button className="text-sm font-mono uppercase tracking-widest text-foreground/40 hover:text-accent-primary transition-colors py-4 px-8 border border-white/5 hover:border-accent-primary/20 rounded-full glass">
            READ WHITEPAPER
          </button>
        </div>
      </div>

      {/* Kinetic Particles (Simulated) */}
      <div className="absolute inset-0 -z-10 mask-radial scale-150 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--accent-primary)_0%,transparent_70%)] opacity-30" />
      </div>
    </div>
  );
};
