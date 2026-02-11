import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Check, X } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-white via-slate-50/30 to-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          <FadeIn className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </span>
              Built for
            </h3>
            <ul className="space-y-4 text-lg text-slate-600">
              {['Founders', 'Builders', 'Strategists', 'Deep thinkers'].map((item) => (
                <li key={item} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col items-center md:items-start text-center md:text-left opacity-60 hover:opacity-100 transition-opacity duration-500">
             <h3 className="text-2xl font-bold mb-8 text-slate-500 flex items-center gap-2">
               <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                <X className="w-4 h-4 text-slate-500" />
              </span>
              Not built for
            </h3>
            <ul className="space-y-4 text-lg text-slate-400">
              {['Casual note collectors', 'Productivity hobbyists'].map((item) => (
                <li key={item} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};