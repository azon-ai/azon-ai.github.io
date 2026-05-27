import React, { useState } from 'react';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all ${
        isDark
          ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
      }`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

export default function Navigation({ isDark, toggleTheme, theme, azonLogo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${theme.nav} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img
              src={azonLogo}
              alt="AZON-AI Logo"
              className="w-30 h-30 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
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

            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <a
              href="#contact"
              className="bg-gradient-to-r from-[#7f4aa8] via-[#af7ed4] to-[#dfc0f3] text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#af7ed4]/35 transition"
            >
              Get Started
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button className={theme.text} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`lg:hidden py-4 space-y-2 border-t ${theme.border}`}>
            {['Products', 'Demo', 'Solutions', 'Company', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 ${theme.textSubtle} hover:bg-[#af7ed4]/10`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
