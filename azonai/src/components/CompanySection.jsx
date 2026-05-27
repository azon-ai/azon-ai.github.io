import React from 'react';
import { BookOpen, CheckCircle2, FileCheck, Shield, Users } from 'lucide-react';

const team = [
  {
    name: 'Dr. Arabinda Ghosh',
    role: 'Co-Founder',
    focus: 'Operational Management, Grants, AI Safety',
    initials: 'AG'
  },
  {
    name: 'Dr. Zengjie Zhang',
    role: 'Co-Founder',
    focus: 'Technical Lead',
    initials: 'ZZ'
  },
  {
    name: 'Oliver Schon',
    role: 'Co-Founder',
    focus: 'Product Vision, AI Design, Innovation Strategy',
    initials: 'OS'
  },
  {
    name: 'Dr. Natalia Calvo',
    role: 'Co-Founder',
    focus: 'Market Alignment, Finances, Human-Robot Interaction',
    initials: 'NC'
  }
];

const collaborators = [
  {
    name: 'Dr. Sadegh Soudjani',
    role: 'Senior Research Group Leader @MPI-SWS'
  },
  {
    name: 'Prof. Ginevra Castellano',
    role: 'Professor for Intelligent Interactive Systems @UU'
  },
  {
    name: 'Dr. Sofie Haesaert',
    role: 'Assistant Professor for Control Systems @TUe'
  }
];

const regulations = [
  {
    year: '2023',
    title: "China's AI Guidelines for Next-Generation AI",
    market: '$6.7 Trillion',
    restriction: 'Prioritize safety, ethical design, and social responsibility'
  },
  {
    year: '2024',
    title: 'The U.S. Algorithmic Accountability Act',
    market: '$21 Trillion',
    restriction: 'Requires bias and impact assessments for AI and automated systems'
  },
  {
    year: '2025',
    title: 'The UK Automated Vehicles Act',
    market: '$2.5 Trillion',
    restriction: 'Defines liability for accidents involving automated vehicles'
  },
  {
    year: '2026',
    title: 'The EU AI Act',
    market: '$9.9 Trillion',
    restriction: 'Categorizes risk levels and restricts high-risk AI applications'
  }
];

export default function CompanySection({ theme, isDark }) {
  return (
    <section id="company" className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.bgAlt} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-500 text-sm font-bold tracking-widest mb-2">ABOUT US</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">We Build <span className="bg-gradient-to-r from-[#af7ed4] to-[#c79ce7] bg-clip-text text-transparent">Trust</span> in Smart Technology</h2>
          <p className={`max-w-3xl mx-auto ${theme.textMuted}`}>
            Together, we have more than 35 years of experience in AI and formal methods, helping unlock major consumer markets for high-risk AI products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className={`border rounded-2xl p-6 ${theme.cardSolid}`}>
            <div className="w-12 h-12 bg-[#af7ed4]/20 rounded-xl flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-[#af7ed4]" />
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

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-2">The Legal Landscape is Changing Rapidly</h3>
          <p className={`text-center mb-10 ${theme.textMuted}`}>We help unlock major consumer markets for your high-risk AI products</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {regulations.map((reg, i) => (
              <div key={i} className={`border rounded-2xl p-6 hover:border-[#af7ed4]/50 transition ${theme.cardSolid}`}>
                <div className="text-3xl font-bold text-[#af7ed4] mb-3">{reg.year}</div>
                <h4 className="font-bold mb-2 text-sm leading-tight">{reg.title}</h4>
                <p className="text-xs text-cyan-500 font-semibold mb-2">Market: {reg.market}</p>
                <p className={`text-xs ${theme.textMuted}`}>{reg.restriction}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">The Team</h3>
            <p className={theme.textMuted}>35+ years of combined experience in AI and formal methods</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <div key={i} className={`border rounded-2xl p-6 text-center hover:border-[#af7ed4]/50 transition ${theme.cardSolid}`}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#af7ed4] to-[#c79ce7] flex items-center justify-center text-white text-2xl font-bold">
                  {member.initials}
                </div>
                <h4 className="font-bold mb-1">{member.name}</h4>
                <p className="text-xs text-[#af7ed4] font-semibold mb-2">{member.role}</p>
                <p className={`text-xs ${theme.textMuted}`}>{member.focus}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`border rounded-2xl p-8 text-center ${theme.cardSolid}`}>
            <BookOpen className="w-10 h-10 text-[#af7ed4] mx-auto mb-4" />
            <div className="text-5xl font-bold bg-gradient-to-r from-[#af7ed4] to-[#c79ce7] bg-clip-text text-transparent mb-2">70</div>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-[#af7ed4] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {c.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
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
  );
}
