import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brain Circuit Icon */}
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 md:w-12 md:h-12 text-slate-900"
      >
        <path d="M100 20C60 20 30 50 30 90C30 110 35 130 50 150C55 155 58 165 55 170" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
        <path d="M100 20C140 20 170 50 170 90C170 130 140 160 100 160" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
        <path d="M55 170C60 180 70 180 80 180H90" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
        
        {/* Internal Circuits */}
        <path d="M60 60 H80 V80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M140 60 H120 V90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60 120 H90 V100" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M140 120 H120" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        
        {/* Chip */}
        <rect x="90" y="80" width="20" height="20" rx="4" fill="currentColor" />
        
        {/* Dots */}
        <circle cx="60" cy="60" r="6" fill="currentColor" />
        <circle cx="140" cy="60" r="6" fill="currentColor" />
        <circle cx="60" cy="120" r="6" fill="currentColor" />
        <circle cx="140" cy="120" r="6" fill="currentColor" />
        
        {/* Brain details lines */}
        <path d="M80 40C80 40 100 35 120 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M40 90H50" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M150 90H160" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      
      <span className="text-3xl md:text-4xl font-serif text-slate-900 tracking-tight">
        Aqilly
      </span>
    </div>
  );
};