import React from 'react';
import { Brain, Shield, Car, Mountain, Truck } from 'lucide-react';

const solutions = [
  { icon: <Brain className="w-6 h-6" />, title: 'AI Training & Validation' },
  { icon: <Shield className="w-6 h-6" />, title: 'Safety-Driven V&V' },
  { icon: <Car className="w-6 h-6" />, title: 'ADAS & AV' },
  { icon: <Mountain className="w-6 h-6" />, title: 'Autonomous Mining' },
  { icon: <Truck className="w-6 h-6" />, title: 'Autonomous Trucking' }
];

export default function SolutionsSection({ theme }) {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Solutions</h2>
          <p className={theme.textMuted}>Powering the future of autonomous systems across industries</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {solutions.map((sol, i) => (
            <div key={i} className={`border rounded-xl p-6 text-center hover:border-[#af7ed4]/50 transition cursor-pointer ${theme.card}`}>
              <div className="w-12 h-12 bg-[#af7ed4]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#af7ed4]">{sol.icon}</div>
              <p className="text-sm font-semibold">{sol.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
