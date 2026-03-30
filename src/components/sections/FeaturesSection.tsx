'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Zap, Shield, Globe, Cpu, BarChart3 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const features = [
  {
    title: "Neural Refinement",
    description: "Multi-layered processing chains that polish raw input into precision prompts.",
    icon: Layers,
    color: "var(--accent-primary)"
  },
  {
    title: "Instant Execution",
    description: "Sub-millisecond latency for real-time prompt optimization and delivery.",
    icon: Zap,
    color: "#06b6d4"
  },
  {
    title: "Quantum Encryption",
    description: "End-to-end security for your intellectual property and prompt vectors.",
    icon: Shield,
    color: "#10b981"
  },
  {
    title: "Global Mesh",
    description: "Edge-deployed infrastructure ensuring 100% uptime and zero throttling.",
    icon: Globe,
    color: "#8b5cf6"
  },
  {
    title: "Auto-Scaling",
    description: "Dynamic compute allocation that grows with your intelligence needs.",
    icon: Cpu,
    color: "#f43f5e"
  },
  {
    title: "Deep Analytics",
    description: "Comprehensive token monitoring and performance metrics on every generation.",
    icon: BarChart3,
    color: "#f59e0b"
  }
];

export const FeaturesSection = () => {
  return (
    <div className="w-full max-w-6xl px-6 min-h-full flex flex-col justify-center items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">Protocol Capabilities</h2>
        <p className="text-foreground/40 font-mono">ENHANCED OPERATIONAL PARAMETERS</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={1500}
              gyroscope={true}
              className="h-full"
            >
              <div className="glass p-8 rounded-2xl h-full border border-white/5 hover:border-accent-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
                <div 
                  className="absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: feature.color }}
                />
                
                <feature.icon 
                  size={32} 
                  className="mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
                  style={{ color: feature.color }}
                />
                
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-accent-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: index * 0.5 }}
                  className="absolute bottom-4 right-4 bg-white/5 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  v{2 + index}.0
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
