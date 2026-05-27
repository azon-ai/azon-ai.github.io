import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer({ theme, isDark, azonLogo }) {
  return (
    <footer className={`border-t py-12 px-4 sm:px-6 lg:px-8 ${theme.border}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src={azonLogo}
                alt="AZON-AI Logo"
                className="w-16 h-16 object-contain"
              />
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
              <li><a href="#company" className="hover:text-[#af7ed4]">About</a></li>
              <li><a href="#company" className="hover:text-[#af7ed4]">Team</a></li>
              <li><a href="#contact" className="hover:text-[#af7ed4]">Contact</a></li>
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
            <a href="#" className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-slate-800 hover:bg-[#af7ed4]' : 'bg-slate-100 hover:bg-[#af7ed4] hover:text-white'}`}>
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-slate-800 hover:bg-[#af7ed4]' : 'bg-slate-100 hover:bg-[#af7ed4] hover:text-white'}`}>
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
