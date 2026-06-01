import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, X, Database, Shield, Layers, ArrowRight, Play, Pause, 
  Volume2, VolumeX, Truck, Mountain, Car, Brain, Globe, Sun, Moon,
  CheckCircle2, AlertTriangle, XCircle, Cpu, FileCheck, Users,
  Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Award,
  Zap, BookOpen, Target
} from 'lucide-react';

export default function AzonAIWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    const handleChange = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

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
    cardSolid: isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 shadow-sm',
    nav: isDark 
      ? 'bg-slate-950/70 border-slate-800/50' 
      : 'bg-white/70 border-slate-200/50',
    statBg: isDark 
      ? 'bg-gradient-to-br from-blue-900/20 to-cyan-900/10' 
      : 'bg-gradient-to-br from-blue-50 to-cyan-50',
    input: isDark
      ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500'
      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500',
  };

  const testimonials = [
    { quote: "Together, we're enabling NVIDIA developers to design, test, and safely deploy AI-powered vehicles with greater confidence and scale.", author: "Industry Leader", role: "Vice President, Head of Automotive" },
    { quote: "AZON-AI's Data-Driven Autonomy Development Toolchain provides a fast, measurable, and trusted path to our goal of delivering safe and scalable autonomous systems.", author: "Tech Executive", role: "CEO" },
    { quote: "We verify and validate all of the software that we put into a vehicle before we put it out on the road.", author: "Engineering Lead", role: "VP Engineering & Data Science" }
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

  const team = [
    { name: "Dr. Arabinda Ghosh", role: "Co-Founder", focus: "Operational Management, Grants, AI Safety", initials: "AG" },
    { name: "Dr. Zengjie Zhang", role: "Co-Founder", focus: "Technical Lead", initials: "ZZ" },
    { name: "Dr. Oliver Schön", role: "Co-Founder", focus: "Product Vision, AI Design, Innovation Strategy", initials: "OS" },
    { name: "Dr. Natalia Calvo", role: "Co-Founder", focus: "Market Alignment, Finances, Human-Robot Interaction", initials: "NC" }
  ];

  const collaborators = [
    { name: "Prof. Sadegh Soudjani", role: "Senior Research Group Leader @MPI-SWS" },
    { name: "Prof. Ginevra Castellano", role: "Professor for Intelligent Interactive Systems @UU" },
    { name: "Dr. Sofie Haesaert", role: "Assistant Professor for Control Systems @TUe" }
  ];

  const regulations = [
    { year: "2023", title: "China's AI Guidelines for Next-Generation AI", market: "$6.7 Trillion", restriction: "Prioritize safety, ethical design, and social responsibility" },
    { year: "2024", title: "The U.S. Algorithmic Accountability Act", market: "$21 Trillion", restriction: "Requires bias and impact assessments for AI and automated systems" },
    { year: "2025", title: "The UK Automated Vehicles Act", market: "$2.5 Trillion", restriction: "Defines liability for accidents involving automated vehicles" },
    { year: "2026", title: "The EU AI Act", market: "$9.9 Trillion", restriction: "Categorizes risk levels and restricts high-risk AI applications" }
  ];

  const trafficRules = [
    { country: "USA", flag: "🇺🇸", speed: "120 km/h", ttc: "2.0 s", clearance: "0.9 m", margin: "3.6 m", color: "orange" },
    { country: "Germany", flag: "🇩🇪", speed: "Unrestricted (130 advisory)", ttc: "1.8 s", clearance: "1.5 m", margin: "3.5 m", color: "yellow" },
    { country: "France", flag: "🇫🇷", speed: "130 km/h", ttc: "2.0 s", clearance: "1.5 m", margin: "3.5 m", color: "blue" },
    { country: "UK", flag: "🇬🇧", speed: "112 km/h", ttc: "2.0 s", clearance: "1.5 m", margin: "3.5 m", color: "red" }
  ];

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
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-sm">A</span>
              </div>
              <span className="font-bold text-lg">AZON-AI</span>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <a href="#products" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Products</a>
              <a href="#demo" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Demo</a>
              <a href="#solutions" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Solutions</a>
              <a href="#company" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Company</a>
              <a href="#contact" className={`text-sm ${theme.textSubtle} hover:opacity-70 transition`}>Contact</a>
              <div className={`flex items-center space-x-1 text-sm ${theme.textMuted}`}>
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </div>
              <ThemeToggle />
              <a href="#contact" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition">
                Get Started
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button className={theme.text} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className={`lg:hidden py-4 space-y-2 border-t ${theme.border}`}>
              {['Products', 'Demo', 'Solutions', 'Company', 'Contact'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                   className={`block px-4 py-2 ${theme.textSubtle} hover:bg-blue-500/10`}>
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900' 
              : 'bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200'
          }`}>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
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
            <span className={`text-sm ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>🚀 Safe & Risk-aware AI</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            We Certify
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Safe & Risk-aware AI
            </span>
          </h1>
          
          <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
            Powering fast and safe AI adoption for Engineering Applications. The trusted toolchain for development, training and validation of safe autonomous systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#demo" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition flex items-center justify-center gap-2">
              See Live Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className={`backdrop-blur-md border px-8 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
              isDark 
                ? 'bg-white/10 border-white/30 text-white hover:bg-white/20' 
                : 'bg-slate-900/10 border-slate-900/30 text-slate-900 hover:bg-slate-900/20'
            }`}>
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
          </div>
        </div>
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

      {/* ⭐ DEMO SECTION 1 — Fail Event Simulation */}
      <section id="demo" className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.bgAlt} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`inline-block px-4 py-1 mb-4 rounded-full ${isDark ? 'bg-red-500/20 border border-red-500/40' : 'bg-red-50 border border-red-200'}`}>
              <span className={`text-sm font-semibold ${isDark ? 'text-red-300' : 'text-red-700'}`}>LIVE DEMONSTRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Scenario-Based Validation in Action</h2>
            <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>
              Watch how AZON-AI generates and validates thousands of edge-case scenarios to identify failure modes before they happen on the road.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {/* Simulation Visual */}
            <div className={`relative lg:col-span-1 rounded-2xl overflow-hidden border ${theme.borderAlt} min-h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-black`}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,0.15),_transparent_70%)]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-8 py-4 bg-red-600 rounded-2xl border-4 border-red-400 shadow-2xl shadow-red-500/50 animate-pulse">
                  <span className="text-white font-bold text-xl tracking-widest">FAIL EVENT</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <p className="text-white text-sm font-bold mb-2">Simulation Snapshot</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-slate-300"><span>Weather</span><span className="text-white">Rain</span></div>
                  <div className="flex justify-between text-slate-300"><span>Driving Condition</span><span className="text-white">Highway</span></div>
                  <div className="flex justify-between text-slate-300"><span>Event</span><span className="text-red-400">Cut-in</span></div>
                </div>
              </div>
            </div>

            {/* Scenario Configuration */}
            <div className={`rounded-2xl border p-6 ${theme.cardSolid}`}>
              <p className={`text-xs font-bold tracking-widest mb-4 ${theme.textMuted}`}>SCENARIO CONFIGURATION</p>
              <div className="space-y-4">
                {[
                  { label: "Environmental Conditions", value: "Rain" },
                  { label: "Driving Conditions", value: "Highway" },
                  { label: "Event", value: "Cut-in" },
                  { label: "Regulatory Model", value: "UNECE R157" },
                  { label: "Technical Requirement", value: "ISO 26262" }
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center pb-3 border-b ${theme.border}`}>
                    <span className={`text-sm ${theme.textMuted}`}>{item.label}</span>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <p className={`text-xs font-bold tracking-widest mt-8 mb-4 ${theme.textMuted}`}>PARAMETER RANGES</p>
              <p className={`text-xs ${theme.textMuted} mb-3`}>AZON-AI Knowledge Base</p>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-sm">Ego Speed</span><span className="text-sm font-semibold">30 km/h - 60 km/h</span></div>
                <div className="flex justify-between"><span className="text-sm">Min Distance</span><span className="text-sm font-semibold">2.0 m - 5.0 m</span></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">TTC</span>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${isDark ? 'border-red-500/50 text-red-400' : 'border-red-300 text-red-600'}`}>0.5 s - 2.0 s</span>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="space-y-4">
              <div className={`rounded-2xl border p-6 ${theme.cardSolid}`}>
                <p className={`text-xs font-bold tracking-widest mb-4 ${theme.textMuted}`}>RESULTS SUMMARY</p>
                <div className="text-5xl font-bold mb-1">500</div>
                <p className={`text-sm ${theme.textMuted} mb-6`}>Scenarios Generated</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-500 font-semibold">115 Fails</span>
                    </div>
                    <span className={`text-sm ${theme.textMuted}`}>23%</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-red-500 rounded-full" style={{width: '23%'}}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-yellow-500 font-semibold">230 Pass w Warning</span>
                    </div>
                    <span className={`text-sm ${theme.textMuted}`}>46%</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-yellow-500 rounded-full" style={{width: '46%'}}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500 font-semibold">155 Pass</span>
                    </div>
                    <span className={`text-sm ${theme.textMuted}`}>31%</span>
                  </div>
                  <div className={`h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-green-500 rounded-full" style={{width: '31%'}}></div>
                  </div>
                </div>
              </div>

              <div className={`rounded-2xl border-2 p-6 ${isDark ? 'bg-slate-900 border-red-500/50' : 'bg-white border-red-300'}`}>
                <p className={`text-xs font-bold tracking-widest mb-3 ${theme.textMuted}`}>SELECTED SCENARIO LOG</p>
                <p className={`text-xs ${theme.textMuted} mb-1`}>1 of 115 failed scenarios</p>
                <p className="text-red-500 font-bold mb-4">Scenario ID: #042 [FAIL]</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className={theme.textMuted}>Ego Speed</span>
                    <span>58 km/h ✅</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={theme.textMuted}>Min Distance</span>
                    <span>2.1 m ✅</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className={theme.textMuted}>TTC</span>
                    <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-bold">0.4 s 🔴</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className={`p-2 rounded-lg border ${theme.border}`}>
                    <p className={theme.textMuted}>TRIGGER</p>
                    <p className="text-red-500 font-semibold mt-1">TTC below safe range</p>
                  </div>
                  <div className={`p-2 rounded-lg border ${theme.border}`}>
                    <p className={theme.textMuted}>TRACEABILITY</p>
                    <p className="font-semibold mt-1">Maps to TTC range in knowledge base</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ DEMO SECTION 2 — Traffic Rule Catalogues */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-cyan-500 text-sm font-bold tracking-widest mb-2">— SCALABILITY / TRAFFIC RULE CATALOGUES</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Scale Validation Across Regional<br/>Regulations Through Safety Contracts</h2>
            <p className={`max-w-2xl ${theme.textMuted}`}>
              The AZON-AI Knowledge Base translates region-specific traffic rules into formal temporal logic safety contracts — enabling compliant deployment worldwide.
            </p>
          </div>

          {/* Formula */}
          <div className={`rounded-2xl border p-6 mb-8 ${theme.cardSolid}`}>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-cyan-500" />
              <p className="text-xs font-bold tracking-widest">KNOWLEDGE BASE TO TEMPORAL FORMULA</p>
            </div>
            <div className={`p-4 rounded-xl font-mono text-sm sm:text-base overflow-x-auto ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
              <span className="text-purple-400">Safety contract</span> = 
              <span className="text-yellow-400"> □</span>(v<sub>ego</sub> ≤ μ<sub>v</sub>) ∧ 
              <span className="text-yellow-400"> □</span>(TTC ≥ μ<sub>ttc</sub>) ∧ 
              <span className="text-yellow-400"> □</span>(d<sub>lat</sub> ≥ μ<sub>lat</sub>)
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /><span>No collision</span></div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500" /><span>Lane keeping</span></div>
              <div className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-blue-500" /><span>Safe distance maintained</span></div>
            </div>
          </div>

          {/* Country cards */}
          <div className="space-y-3">
            {trafficRules.map((rule, i) => {
              const colorMap = {
                orange: 'border-orange-500/50',
                yellow: 'border-yellow-500/50',
                blue: 'border-blue-500/50',
                red: 'border-red-500/50'
              };
              const textMap = {
                orange: 'text-orange-500',
                yellow: 'text-yellow-500',
                blue: 'text-blue-500',
                red: 'text-red-500'
              };
              return (
                <div key={i} className={`rounded-xl border p-5 grid grid-cols-2 md:grid-cols-5 gap-4 items-center ${theme.cardSolid} ${colorMap[rule.color]}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{rule.flag}</span>
                    <span className={`font-bold text-lg ${textMap[rule.color]}`}>{rule.country}</span>
                  </div>
                  <div>
                    <p className={`text-xs ${theme.textMuted}`}>Speed Ceiling (μ<sub>v</sub>)</p>
                    <p className="font-semibold text-sm">{rule.speed}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${theme.textMuted}`}>TTC (μ<sub>ttc</sub>)</p>
                    <p className="font-semibold text-sm">{rule.ttc}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${theme.textMuted}`}>Passing Clearance (μ<sub>lat</sub>)</p>
                    <p className="font-semibold text-sm">{rule.clearance}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${theme.textMuted}`}>Lane Margin (w<sub>lane</sub>)</p>
                    <p className="font-semibold text-sm">{rule.margin}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className={`text-xs italic mt-4 ${theme.textMuted}`}>* Values based on highway driving conditions</p>
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

      {/* 🏢 COMPANY SECTION */}
      <section id="company" className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.bgAlt} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-500 text-sm font-bold tracking-widest mb-2">— ABOUT US</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">We Build <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Trust</span> in Smart Technology</h2>
            <p className={`max-w-3xl mx-auto ${theme.textMuted}`}>
              Together, we have more than 35 years of experience in AI and formal methods, helping unlock major consumer markets for high-risk AI products.
            </p>
          </div>

          {/* Mission cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Identification of Risks</h3>
              <p className={`text-sm ${theme.textMuted}`}>Our AZON-AI Knowledge Base includes risk measures for various applications reflecting up-to-date requirements from relevant legislatory standards.</p>
            </div>
            <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quantitative Safety Guarantees</h3>
              <p className={`text-sm ${theme.textMuted}`}>With 35 years of experience in trusted AI, we provide formal tools for certifying the safety of your AI system based on interpretable risk metrics and mathematical proofs.</p>
            </div>
            <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Good to Go</h3>
              <p className={`text-sm ${theme.textMuted}`}>We draw up the necessary documents and your tech is good to go! We support you through the entire product life cycle.</p>
            </div>
          </div>

          {/* Regulatory Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-2">The Legal Landscape is Changing Rapidly</h3>
            <p className={`text-center mb-10 ${theme.textMuted}`}>We help unlock major consumer markets for your high-risk AI products</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {regulations.map((reg, i) => (
                <div key={i} className={`border rounded-2xl p-6 hover:border-blue-500/50 transition ${theme.cardSolid}`}>
                  <div className="text-3xl font-bold text-blue-500 mb-3">{reg.year}</div>
                  <h4 className="font-bold mb-2 text-sm leading-tight">{reg.title}</h4>
                  <p className="text-xs text-cyan-500 font-semibold mb-2">Market: {reg.market}</p>
                  <p className={`text-xs ${theme.textMuted}`}>{reg.restriction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">The Team</h3>
              <p className={theme.textMuted}>35+ years of combined experience in AI and formal methods</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {team.map((member, i) => (
                <div key={i} className={`border rounded-2xl p-6 text-center hover:border-blue-500/50 transition ${theme.cardSolid}`}>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold">
                    {member.initials}
                  </div>
                  <h4 className="font-bold mb-1">{member.name}</h4>
                  <p className="text-xs text-blue-500 font-semibold mb-2">{member.role}</p>
                  <p className={`text-xs ${theme.textMuted}`}>{member.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications + Collaborators */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`border rounded-2xl p-8 text-center ${theme.cardSolid}`}>
              <BookOpen className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">70</div>
              <p className={`text-sm ${theme.textMuted}`}>Related Publications</p>
            </div>
            <div className={`md:col-span-2 border rounded-2xl p-6 ${theme.cardSolid}`}>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-cyan-500" />
                <h4 className="font-bold">Our Collaborators</h4>
              </div>
              <div className="space-y-3">
                {collaborators.map((c, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${isDark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {c.name.split(' ').map(w => w[0]).join('').slice(0,2)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{c.name}</p>
                      <p className={`text-xs ${theme.textMuted}`}>{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📬 CONTACT SECTION */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-bold tracking-widest mb-2">— GET IN TOUCH</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Let's Build Something <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Safe</span> Together</h2>
            <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>
              Have questions about certifying your AI system or want a personalized demo? Reach out to our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
                <Mail className="w-6 h-6 text-blue-500 mb-3" />
                <h4 className="font-bold mb-1">Email Us</h4>
                <p className={`text-sm ${theme.textMuted}`}>contact@azon-ai.com</p>
              </div>
              <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
                <MapPin className="w-6 h-6 text-cyan-500 mb-3" />
                <h4 className="font-bold mb-1">Visit Us</h4>
                <p className={`text-sm ${theme.textMuted}`}>European AI Research Hub</p>
              </div>
              <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
                <Phone className="w-6 h-6 text-green-500 mb-3" />
                <h4 className="font-bold mb-1">Connect</h4>
                <div className="flex gap-3 mt-3">
                  <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition ${isDark ? 'bg-slate-800 hover:bg-blue-500' : 'bg-slate-100 hover:bg-blue-500 hover:text-white'}`}>
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition ${isDark ? 'bg-slate-800 hover:bg-blue-500' : 'bg-slate-100 hover:bg-blue-500 hover:text-white'}`}>
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className={`w-9 h-9 rounded-full flex items-center justify-center transition ${isDark ? 'bg-slate-800 hover:bg-blue-500' : 'bg-slate-100 hover:bg-blue-500 hover:text-white'}`}>
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={`lg:col-span-2 border rounded-2xl p-6 sm:p-8 ${theme.cardSolid}`}>
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className={theme.textMuted}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${theme.textSubtle}`}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition ${theme.input}`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${theme.textSubtle}`}>Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition ${theme.input}`}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${theme.textSubtle}`}>Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition ${theme.input}`}
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${theme.textSubtle}`}>Message *</label>
                    <textarea
                      required
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition resize-none ${theme.input}`}
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 px-4 sm:px-6 lg:px-8 ${theme.border}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white text-sm">A</span>
                </div>
                <span className="font-bold">AZON-AI</span>
              </div>
              <p className={`text-sm ${theme.textMuted}`}>Safe & Risk-aware AI for high-risk technology applications.</p>
            </div>
            <div>
              <h5 className="font-bold mb-3 text-sm">Solutions</h5>
              <ul className={`space-y-2 text-sm ${theme.textMuted}`}>
                <li>Autonomous Driving</li>
                <li>Smart Warehouses</li>
                <li>Healthcare</li>
                <li>Smart Grids</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-3 text-sm">Company</h5>
              <ul className={`space-y-2 text-sm ${theme.textMuted}`}>
                <li><a href="#company" className="hover:text-blue-500">About</a></li>
                <li><a href="#company" className="hover:text-blue-500">Team</a></li>
                <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-3 text-sm">Legal</h5>
              <ul className={`space-y-2 text-sm ${theme.textMuted}`}>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className={`border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 ${theme.border}`}>
            <p className={`text-sm ${theme.textMuted}`}>© AZON-AI 2026 · All rights reserved</p>
            <div className="flex gap-3">
              <a href="#" className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-slate-800 hover:bg-blue-500' : 'bg-slate-100 hover:bg-blue-500 hover:text-white'}`}>
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-slate-800 hover:bg-blue-500' : 'bg-slate-100 hover:bg-blue-500 hover:text-white'}`}>
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}