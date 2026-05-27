import React from 'react';
import { Database, Brain, Layers } from 'lucide-react';

const features = [
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Curation',
    desc:
      'Maximize the value of real-world driving data for use in AV development and testing. Build a cost effective Data Warehouse with efficient data ingestion and denoising, automatic temporal labeling, focused queries and scalable data augmentation.'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Training & Validation',
    desc:
      "Evaluate and find gaps and unknowns in the AV stack's performance, coverage and safety, by applying AI and big-data analytics to millions of miles of real-world and simulated drives."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Synthetic Data Generation',
    desc:
      'Close the gaps and expose unknowns, by automatically generating variations of real-world drives and synthetic scenarios at scale, for training and advanced verification and validation (V&V).'
  }
];

export default function FeaturesSection({ theme }) {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">AZON-AI Physical AI Development Toolchain</h2>
          <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>AZON-AI gives AV development teams the tools required to build the future of autonomous mobility</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className={`group border rounded-2xl p-8 hover:border-[#af7ed4]/50 hover:-translate-y-1 transition-all ${theme.card}`}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#af7ed4]/20 to-[#c79ce7]/20 rounded-xl flex items-center justify-center mb-4 text-[#af7ed4] group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className={`text-sm leading-relaxed ${theme.textMuted}`}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
