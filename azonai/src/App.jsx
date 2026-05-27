import React, { useEffect, useState } from 'react';
import './index.css';

import azonLogo from './assets/azon-logo.png';
import azonVideo from './assets/Website-AZON.mp4';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TrainValidateSection from './components/TrainValidateSection';
import DemoSection from './components/DemoSection';
import TestimonialsSection from './components/TestimonialsSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import SolutionsSection from './components/SolutionsSection';
import CompanySection from './components/CompanySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function AzonAIWebsite() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handleChange = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = {
    bg: isDark ? 'bg-slate-950' : 'bg-white',
    bgAlt: isDark ? 'bg-slate-900/50' : 'bg-slate-50',
    text: isDark ? 'text-white' : 'text-slate-900',
    textMuted: isDark ? 'text-slate-400' : 'text-slate-600',
    textSubtle: isDark ? 'text-slate-300' : 'text-slate-700',
    border: isDark ? 'border-slate-800' : 'border-slate-200',
    borderAlt: isDark ? 'border-slate-700' : 'border-slate-300',
    card: isDark
      ? 'bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700'
      : 'bg-white border-slate-200 shadow-sm',
    cardSolid: isDark
      ? 'bg-slate-900 border-slate-700'
      : 'bg-white border-slate-200 shadow-sm',
    nav: isDark
      ? 'bg-slate-950/70 border-slate-800/50'
      : 'bg-white/70 border-slate-200/50',
    statBg: isDark
      ? 'bg-gradient-to-br from-blue-900/20 to-cyan-900/10'
      : 'bg-gradient-to-br from-blue-50 to-cyan-50',
    input: isDark
      ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-[#af7ed4]'
      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#af7ed4]'
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300`}>
      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        theme={theme}
        azonLogo={azonLogo}
      />
      <HeroSection isDark={isDark} azonVideo={azonVideo} />
      <TrainValidateSection theme={theme} />
      <DemoSection theme={theme} isDark={isDark} />
      <TestimonialsSection theme={theme} isDark={isDark} />
      <FeaturesSection theme={theme} />
      <StatsSection theme={theme} />
      <SolutionsSection theme={theme} />
      <CompanySection theme={theme} isDark={isDark} />
      <ContactSection theme={theme} isDark={isDark} />
      <Footer theme={theme} isDark={isDark} azonLogo={azonLogo} />
    </div>
  );
}
