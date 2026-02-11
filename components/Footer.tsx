import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <Logo className="scale-75 origin-left" />
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500 font-medium">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
        </div>
        
        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Aqilly Inc.
        </div>
      </div>
    </footer>
  );
};