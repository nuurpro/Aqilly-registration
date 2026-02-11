import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { Philosophy } from './components/Philosophy';
import { TargetAudience } from './components/TargetAudience';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Philosophy />
      <TargetAudience />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;