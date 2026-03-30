'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Sparkles, Orbit } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

const plans = [
  {
    name: "Neural Node",
    price: { monthly: 29, yearly: 240 },
    features: ["1k Daily Generations", "Standard Priority", "Community Support", "Basic Analytics"],
    icon: Orbit,
    isPopular: false
  },
  {
    name: "Synapse Pro",
    price: { monthly: 99, yearly: 850 },
    features: ["Unlimited Generations", "Direct AI Priority", "Premium Discord", "API Access"],
    icon: Sparkles,
    isPopular: true
  },
  {
    name: "Core Enterprise",
    price: { monthly: 499, yearly: 4500 },
    features: ["Custom Training", "Sub-10ms Latency", "Dedicated Support", "Full Mesh Integration"],
    icon: Zap,
    isPopular: false
  }
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full max-w-6xl px-6 min-h-full flex flex-col justify-center items-center py-20 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Deployment Tiers</h2>
        
        {/* Toggle Switch */}
        <div className="inline-flex items-center bg-white/5 p-1 rounded-full border border-white/10">
          {['Monthly', 'Annual'].map((label) => {
            const active = label === 'Annual' ? isYearly : !isYearly;
            return (
              <button
                key={label}
                onClick={() => setIsYearly(label === 'Annual')}
                className="relative px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest z-10 transition-colors"
                style={{ color: active ? '#fff' : 'rgba(255,255,255,0.35)' }}
              >
                {active && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 bg-accent-primary rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                {label}
              </button>
            );
          })}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass p-8 rounded-3xl relative border transition-all duration-300 ${
              plan.isPopular ? 'border-accent-primary scale-105 shadow-[0_0_30px_var(--accent-glow)]' : 'border-white/5 hover:border-white/10'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-accent-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                Recommended
              </div>
            )}

            <div className="flex items-center gap-2 mb-6 text-accent-primary opacity-80">
              <plan.icon size={20} />
              <span className="text-sm font-mono uppercase tracking-widest">{plan.name}</span>
            </div>

            <div className="text-5xl font-black mb-2 tracking-tighter">
              ${isYearly ? plan.price.yearly : plan.price.monthly}
              <span className="text-sm font-normal text-foreground/40 ml-1">
                / {isYearly ? 'yr' : 'mo'}
              </span>
            </div>

            <div className="space-y-4 my-8 min-h-[160px]">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                  <Check size={14} className="mt-1 text-accent-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <MagneticButton className={`w-full text-center py-3 ${
              plan.isPopular ? 'bg-accent-primary text-white' : 'bg-white/5 hover:bg-white/10 text-foreground'
            }`}>
              INITIALIZE PLAN
            </MagneticButton>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
