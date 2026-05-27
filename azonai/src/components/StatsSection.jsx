import React from 'react';

const stats = [
  {
    value: '2x',
    label: 'Productivity',
    desc: 'Reduce training and validation time by up to 2x'
  },
  {
    value: 'Millions',
    label: 'Scalability',
    desc: 'Automatically generate and execute millions of intelligent scenario instances'
  },
  {
    value: '10x',
    label: 'Safety',
    desc: '10x more efficient for reaching corner case coverage'
  },
  {
    value: '100s',
    label: 'Expertise',
    desc: 'Proven data-driven verification & validation tool across 100s of complex projects'
  }
];

export default function StatsSection({ theme }) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.statBg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#af7ed4] to-[#c79ce7] bg-clip-text text-transparent mb-2">{stat.value}</div>
            <div className="text-lg font-semibold mb-2">{stat.label}</div>
            <p className={`text-sm ${theme.textMuted}`}>{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
