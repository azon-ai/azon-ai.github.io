import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import { 
  Menu, X, Database, Shield, Layers, ArrowRight, Play, Pause, 
  Volume2, VolumeX, Truck, Mountain, Car, Brain, Globe, Sun, Moon
} from 'lucide-react';

import azonLogo from './assets/azon-logo.png';
import azonVideo from './assets/Website-AZON.mp4';

export default function AzonAIWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const videoRef = useRef(null);

  // 🌗 DARK MODE LOGIC
  useEffect(() => {
    // Detect system preference on first load
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    // Listen for system theme changes
    const handleChange = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // 🎨 THEME CLASSES — change colors based on isDark
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
    nav: isDark 
      ? 'bg-slate-950/70 border-slate-800/50' 
      : 'bg-white/70 border-slate-200/50',
    statBg: isDark 
      ? 'bg-gradient-to-br from-blue-900/20 to-cyan-900/10' 
      : 'bg-gradient-to-br from-blue-50 to-cyan-50',
  };

  const testimonials = [
    { quote: "Together, we're enabling NVIDIA developers to design, test, and safely deploy AI-powered vehicles with greater confidence and scale.", author: "Xinzhou Wu", role: "Vice President, Head of Automotive, NVIDIA" },
    { quote: "AZON-AI's Data-Driven Autonomy Development Toolchain provides a fast, measurable, and trusted path to our goal of delivering safe and scalable autonomous systems.", author: "Peter Vaughan Schmidt", role: "CEO" },
    { quote: "At Woven, we verify and validate all of the software that we put into a vehicle before we put it out on the road.", author: "George Kellerman", role: "VP Engineering & Data Science" }
  ];

  const features = [
    { icon: <Database className="w-8 h-8" />, title: "Data Curation", desc: "Maximize the value of real-world driving data for use in AV development and testing. Build a cost effective Data Warehouse with efficient data ingestion and denoising, automatic temporal labeling, focused queries and scalable data augmentation." },
    { icon: <Brain className="w-8 h-8" />, title: "Training & Validation", desc: "Evaluate and find gaps and unknowns in the AV stack's performance, coverage and safety, by applying AI and big-data analytics to millions of miles of real-world and simulated drives." },
    { icon: <Layers className="w-8 h-8" />, title: "Synthetic Data Generation", desc: "Close the gaps and expose unknowns, by automatically generating variations of real-world drives and synthetic scenarios at scale, for training and advanced verification and validation (V&V)." }
  ];

  const stats = [
    { value: "2x", label: "Productivity", desc: "Reduce training and validation time by up to 2x" },
    { value: "Millions", label: "Scalability", desc: "Automatically generate and execute millions of intelligent scenario instances" },
    { value: "10x", label: "Safety", desc: "10x more efficient for reaching corner case coverage" },
    { value: "100s", label: "Expertise", desc: "Proven data-driven verification & validation tool across 100s of complex projects" }
  ];

  const solutions = [
    { icon: <Brain className="w-6 h-6" />, title: "AI Training & Validation" },
    { icon: <Shield className="w-6 h-6" />, title: "Safety-Driven V&V" },
    { icon: <Car className="w-6 h-6" />, title: "ADAS & AV" },
    { icon: <Mountain className="w-6 h-6" />, title: "Autonomous Mining" },
    { icon: <Truck className="w-6 h-6" />, title: "Autonomous Trucking" }
  ];

  // 🌗 Reusable theme toggle button
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all ${
        isDark 
          ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' 
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
      }`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} font-sans transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${theme.nav} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src={azonLogo} alt="AZON-AI Logo" className="w-8 h-8 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <a href="#products" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Products</a>
              <a href="#solutions" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Solutions</a>
              <a href="#knowledge" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Knowledge Hub</a>
              <a href="#company" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Company</a>
              <a href="#contact" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Contact us</a>
              <div className={`flex items-center space-x-1 text-sm ${theme.textMuted}`}>
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </div>
              <ThemeToggle />
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition">
                Get Started
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button className={theme.text} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {azonVideo ? (
            <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={azonVideo} type="video/mp4" />
            </video>
          ) : (
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900' 
                : 'bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200'
            }`}>
              <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
            </div>
          )}
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950' 
              : 'bg-gradient-to-b from-white/40 via-white/30 to-white'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-block px-4 py-1 mb-6 rounded-full backdrop-blur-sm ${
            isDark ? 'bg-blue-500/20 border border-blue-400/40' : 'bg-blue-500/10 border border-blue-500/30'
          }`}>
            <span className={`text-sm ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>🚀 The Physical AI Toolchain</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            The Physical AI Toolchain
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              For AI-Powered Autonomy
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            The trusted toolchain for the development, training and validation of safe autonomous vehicles
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition flex items-center justify-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
            <button className={`backdrop-blur-md border px-8 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' 
                : 'bg-slate-900/10 border-slate-900/30 text-slate-900 hover:bg-slate-900/20'
            }`}>
              <Play className="w-4 h-4" /> Watch Demo
            </button>
          </div>
        </div>

        {azonVideo && (
          <div className="absolute bottom-6 right-6 z-20 flex gap-2">
            <button onClick={togglePlay} className={`w-10 h-10 backdrop-blur-md border rounded-full flex items-center justify-center transition ${
              isDark ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' : 'bg-slate-900/10 border-slate-900/30 text-slate-900 hover:bg-slate-900/20'
            }`}>
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button onClick={toggleMute} className={`w-10 h-10 backdrop-blur-md border rounded-full flex items-center justify-center transition ${
              isDark ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' : 'bg-slate-900/10 border-slate-900/30 text-slate-900 hover:bg-slate-900/20'
            }`}>
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        )}
      </section>

      {/* Train/Validate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className={`group border rounded-2xl p-8 hover:border-blue-500/50 transition ${theme.card}`}>
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Brain className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Train</h3>
            <p className={theme.textMuted}>Train AI-powered AV stacks with curated real-world data and complemented with realistic and diverse augmented and synthetic data.</p>
          </div>
          <div className={`group border rounded-2xl p-8 hover:border-cyan-500/50 transition ${theme.card}`}>
            <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Shield className="w-7 h-7 text-cyan-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Validate</h3>
            <p className={theme.textMuted}>Validate the AV stack by generating massive amounts of realistic synthetic data and evaluating the real-world and simulation data coverage and safety evidence.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.bgAlt} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Customer Testimonials</h2>
            <p className={theme.textMuted}>Trusted by industry leaders worldwide</p>
          </div>
          <div className={`border rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto ${theme.card}`}>
            <div className="text-5xl text-blue-500 mb-4">"</div>
            <p className={`text-lg sm:text-xl mb-6 leading-relaxed ${theme.textSubtle}`}>{testimonials[activeTestimonial].quote}</p>
            <div className={`border-t pt-4 ${theme.border}`}>
              <p className="font-bold">{testimonials[activeTestimonial].author}</p>
              <p className={`text-sm ${theme.textMuted}`}>{testimonials[activeTestimonial].role}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all ${i === activeTestimonial ? 'w-8 bg-blue-500' : `w-2 ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">AZON-AI Physical AI Development Toolchain</h2>
            <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>AZON-AI gives AV development teams the tools required to build the future of autonomous mobility</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className={`group border rounded-2xl p-8 hover:border-blue-500/50 hover:-translate-y-1 transition-all ${theme.card}`}>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className={`text-sm leading-relaxed ${theme.textMuted}`}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.statBg} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <p className={`text-sm ${theme.textMuted}`}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solutions</h2>
            <p className={theme.textMuted}>Powering the future of autonomous systems across industries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {solutions.map((sol, i) => (
              <div key={i} className={`border rounded-xl p-6 text-center hover:border-blue-500/50 transition cursor-pointer ${theme.card}`}>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-blue-500">{sol.icon}</div>
                <p className="text-sm font-semibold">{sol.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 px-4 sm:px-6 lg:px-8 ${theme.border}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <img src={azonLogo} alt="AZON-AI" className="w-8 h-8 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="font-bold">AZON-AI</span>
          </div>
          <p className={`text-sm ${theme.textMuted}`}>© AZON-AI 2026 · Terms of Use · Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}