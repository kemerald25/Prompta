'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface HorizontalScrollLayoutProps {
  children: React.ReactNode[];
}

export const HorizontalScrollLayout = ({ children }: HorizontalScrollLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main
      ref={containerRef}
      className="snap-container h-screen overflow-y-auto"
    >
      <div className="fixed top-0 left-0 w-full h-1 z-[60] origin-left">
        <motion.div 
          style={{ scaleX: smoothProgress }}
          className="h-full bg-accent-primary shadow-[0_0_10px_var(--accent-glow)] shadow-accent-primary"
        />
      </div>

      {children.map((child, index) => (
        <section 
          key={index} 
          className="snap-section w-full h-screen flex flex-col justify-center items-center overflow-hidden"
        >
          {child}
        </section>
      ))}
    </main>
  );
};
