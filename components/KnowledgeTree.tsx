import React from 'react';
import { motion } from 'framer-motion';

export const KnowledgeTree: React.FC = () => {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.3,
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { delay: custom * 0.2 + 0.5, duration: 0.5, type: "spring" }
    })
  };

  return (
    <div className="relative w-full h-64 md:h-80 flex items-center justify-center opacity-80">
      <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 300">
        {/* Central Root */}
        <motion.circle 
          cx="200" cy="250" r="6" 
          fill="#1e293b" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={nodeVariants}
          custom={0}
        />

        {/* Level 1 Connections */}
        <motion.path d="M200 250 L100 150" stroke="#94a3b8" strokeWidth="2" fill="none" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.path d="M200 250 L300 150" stroke="#94a3b8" strokeWidth="2" fill="none" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.path d="M200 250 L200 120" stroke="#94a3b8" strokeWidth="2" fill="none" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />

        {/* Level 1 Nodes */}
        <motion.circle cx="100" cy="150" r="5" fill="#334155" variants={nodeVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.circle cx="300" cy="150" r="5" fill="#334155" variants={nodeVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.circle cx="200" cy="120" r="5" fill="#334155" variants={nodeVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} />

        {/* Level 2 Connections */}
        <motion.path d="M100 150 L60 80" stroke="#cbd5e1" strokeWidth="1.5" fill="none" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.path d="M100 150 L140 80" stroke="#cbd5e1" strokeWidth="1.5" fill="none" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.path d="M300 150 L260 80" stroke="#cbd5e1" strokeWidth="1.5" fill="none" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.path d="M300 150 L340 80" stroke="#cbd5e1" strokeWidth="1.5" fill="none" variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} />

        {/* Level 2 Nodes */}
        <motion.circle cx="60" cy="80" r="4" fill="#64748b" variants={nodeVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.circle cx="140" cy="80" r="4" fill="#64748b" variants={nodeVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.circle cx="260" cy="80" r="4" fill="#64748b" variants={nodeVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.circle cx="340" cy="80" r="4" fill="#64748b" variants={nodeVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
      </svg>
      
      <div className="absolute bottom-4 text-xs font-mono text-slate-400 tracking-widest uppercase">
        Knowledge Graph v1.0
      </div>
    </div>
  );
};