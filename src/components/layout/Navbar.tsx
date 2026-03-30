'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'void', icon: Zap, label: 'Void' },
    { id: 'aurora', icon: Sparkles, label: 'Aurora' },
    { id: 'solaris', icon: Sun, label: 'Solaris' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-4 navbar-glass-mobile">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-black tracking-tighter text-foreground"
      >
        PROMPTA
      </motion.div>

      <div className="flex gap-2 p-1 bg-white/5 rounded-full border border-white/10 lg:bg-transparent lg:border-none">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id as any)}
            className={`p-2 rounded-full transition-all flex items-center gap-2 px-4 ${
              theme === t.id ? 'bg-accent-primary text-white shadow-lg' : 'hover:bg-white/10 text-foreground/50'
            }`}
          >
            <t.icon size={16} />
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
