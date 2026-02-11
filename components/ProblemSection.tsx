import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-white via-slate-50/50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight mb-20 text-slate-900">
            You Don’t Have a Memory Problem.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            "You save things you never revisit.",
            "You organize ideas you don’t understand yet.",
            "You confuse storage with intelligence."
          ].map((text, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="flex flex-col items-center text-center">
              <div className="w-12 h-0.5 bg-slate-200 mb-6" />
              <p className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                {text}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};