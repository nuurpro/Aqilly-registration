import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Radial burst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-100/80 rounded-full blur-[80px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <blockquote className="text-3xl md:text-5xl font-semibold leading-tight text-slate-900 mb-10 tracking-tight">
            “If you can’t explain it,<br /> you don’t own it.”
          </blockquote>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-10 rounded-full opacity-20" />
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Aqilly forces retrieval and explanation before structure. <br className="hidden md:block" />
            <span className="text-slate-900 font-medium">Weak knowledge fades. Clear thinking survives.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
};