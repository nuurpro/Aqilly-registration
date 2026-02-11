import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  const scrollToHow = () => {
    const el = document.getElementById('how-it-works');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
      {/* Dynamic Subtle Background */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        {/* Top center glow */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[120vh] h-[80vh] bg-gradient-to-b from-slate-100/80 via-slate-50/50 to-transparent rounded-[100%] blur-[100px]" />
        
        {/* Side atmospheric drifts */}
        <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-gradient-to-r from-gray-50 to-transparent rounded-full blur-[80px] opacity-60" />
        <div className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] bg-gradient-to-l from-slate-100/60 to-transparent rounded-full blur-[90px] opacity-70" />
        
        {/* Bottom grounding wash */}
        <div className="absolute -bottom-[20%] left-0 right-0 h-[50vh] bg-gradient-to-t from-slate-50 via-white to-transparent opacity-80" />
      </div>

      {/* Upper Left Logo */}
      <div className="absolute top-6 left-6 z-20 md:top-10 md:left-10">
        <Logo />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm"
        >
          Stop Storing Knowledge.<br className="hidden md:block" /> Start Owning It.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          A voice-first cognitive system that turns chaotic thoughts into structured understanding.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
            <span className="mr-2">Join the Waitlist</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button 
            onClick={scrollToHow}
            className="text-slate-500 hover:text-slate-900 font-medium transition-colors text-lg flex items-center group"
          >
            See How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
};