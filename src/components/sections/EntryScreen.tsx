'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ArrowDownRight } from 'lucide-react';

export const EntryScreen = () => {
  const letters = "PROMPTA".split("");

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Pulse Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        className="text-7xl md:text-9xl font-black tracking-tighter flex z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="hover:text-accent-primary transition-colors cursor-default"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 text-lg text-foreground/60 max-w-md text-center px-4 font-mono z-10"
      >
        [ MISSION CONTROL INITIALIZED ]
        <br />
        ARCHITECTING THE FUTURE OF PROMPT INTELLIGENCE
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-12 z-10"
      >
        <MagneticButton className="bg-accent-primary text-white flex items-center gap-2 group border-glow">
          ENTER INTERFACE
          <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
        </MagneticButton>
      </motion.div>

      {/* Floating Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] overflow-hidden">
        <div className="h-full w-full animate-scanline" />
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scanline {
          background: linear-gradient(to bottom, transparent 0%, var(--accent-primary) 50%, transparent 100%);
          height: 10px;
          animation: scanline 8s linear infinite;
        }
      `}</style>
    </div>
  );
};
