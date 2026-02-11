import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Mic, Search, Share2 } from 'lucide-react';
import { KnowledgeTree } from './KnowledgeTree';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Mic className="w-6 h-6 text-slate-700" />,
      title: "Dump",
      desc: "Speak your raw thoughts. No folders. No structure."
    },
    {
      icon: <Search className="w-6 h-6 text-slate-700" />,
      title: "Retrieve",
      desc: "Aqilly asks you to explain what you meant."
    },
    {
      icon: <Share2 className="w-6 h-6 text-slate-700" />,
      title: "Crystallize",
      desc: "Only what you understand becomes part of your knowledge tree."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 bg-slate-50 relative">
       {/* Subtle background highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn className="mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Structure Is Earned.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent -z-10" />

            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-500">
                  {step.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Step {idx + 1}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-xs">{step.desc}</p>
              </FadeIn>
            ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm">
           <KnowledgeTree />
        </FadeIn>
      </div>
    </section>
  );
};