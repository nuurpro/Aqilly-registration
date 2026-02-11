import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-gradient-to-b from-slate-50 to-slate-200/50 text-center">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-10">
          Turn chaos into clarity.
        </h2>
        
        <div className="flex flex-col items-center gap-4">
          <button className="group inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-10 text-lg font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
            <span className="mr-2">Get Early Access</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <span className="text-sm font-medium text-slate-400 tracking-wide uppercase mt-4">
            Launching when ready
          </span>
        </div>
      </FadeIn>
    </section>
  );
};