import React from 'react';
import { Brain, Shield } from 'lucide-react';

export default function TrainValidateSection({ theme }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        <div className={`group border rounded-2xl p-8 hover:border-[#af7ed4]/50 transition ${theme.card}`}>
          <div className="w-14 h-14 bg-[#af7ed4]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
            <Brain className="w-7 h-7 text-[#af7ed4]" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Train</h3>
          <p className={theme.textMuted}>
            Train AI-powered AV stacks with curated real-world data and complemented with realistic and diverse augmented and synthetic data.
          </p>
        </div>

        <div className={`group border rounded-2xl p-8 hover:border-[#af7ed4]/50 transition ${theme.card}`}>
          <div className="w-14 h-14 bg-[#af7ed4]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
            <Shield className="w-7 h-7 text-[#af7ed4]" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Validate</h3>
          <p className={theme.textMuted}>
            Validate the AV stack by generating massive amounts of realistic synthetic data and evaluating the real-world and simulation data coverage and safety evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
