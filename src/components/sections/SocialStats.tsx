'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const stats = [
  { value: 120, suffix: "M+", label: "Daily Generations" },
  { value: 99.9, suffix: "%", label: "Protocol Uptime" },
  { value: 450, suffix: "k", label: "Active Neural Nodes" },
  { value: 12, suffix: "ms", label: "Median Latency" }
];

const StatItem = ({ value, suffix, label, index }: { value: number, suffix: string, label: string, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;
      const startValue = 0;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(progress * (value - startValue) + startValue);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: index % 2 === 0 ? 0 : 50 }}
      className={`relative p-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
    >
      <div className="text-6xl md:text-8xl font-black tracking-tight flex items-baseline gap-2">
        <span className="text-accent-primary">{Math.floor(count).toLocaleString()}</span>
        <span className="text-3xl font-mono text-foreground/20">{suffix}</span>
      </div>
      <div className="mt-4 flex flex-col items-start md:items-inherit">
        <span className="text-lg font-mono uppercase tracking-[0.2em] text-foreground/40">{label}</span>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mt-2 shadow-[0_0_10px_var(--accent-glow)]"
        />
      </div>
    </motion.div>
  );
};

export const SocialStats = () => {
  return (
    <div className="w-full max-w-6xl px-6 h-full flex flex-col justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-0 relative">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} index={index} />
        ))}

        {/* Floating Ambient Noise/Background */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-accent-primary/10 blur-[150px] -z-10 pointer-events-none rounded-full scale-150 opacity-40" />
      </div>
    </div>
  );
};
