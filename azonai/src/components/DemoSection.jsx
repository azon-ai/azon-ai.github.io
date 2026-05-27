import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Shield,
  XCircle,
  Zap
} from 'lucide-react';

const trafficRules = [
  {
    country: 'USA',
    flag: 'USA',
    speed: '120 km/h',
    ttc: '2.0 s',
    clearance: '0.9 m',
    margin: '3.6 m',
    color: 'orange'
  },
  {
    country: 'Germany',
    flag: 'DE',
    speed: 'Unrestricted, 130 advisory',
    ttc: '1.8 s',
    clearance: '1.5 m',
    margin: '3.5 m',
    color: 'yellow'
  },
  {
    country: 'France',
    flag: 'FR',
    speed: '130 km/h',
    ttc: '2.0 s',
    clearance: '1.5 m',
    margin: '3.5 m',
    color: 'blue'
  },
  {
    country: 'UK',
    flag: 'UK',
    speed: '112 km/h',
    ttc: '2.0 s',
    clearance: '1.5 m',
    margin: '3.5 m',
    color: 'red'
  }
];

export default function DemoSection({ theme, isDark }) {
  return (
    <>
      <section id="demo" className={`py-20 px-4 sm:px-6 lg:px-8 ${theme.bgAlt} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className={`inline-block px-4 py-1 mb-4 rounded-full ${isDark ? 'bg-red-500/20 border border-red-500/40' : 'bg-red-50 border border-red-200'}`}>
              <span className={`text-sm font-semibold ${isDark ? 'text-red-300' : 'text-red-700'}`}>
                LIVE DEMONSTRATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Scenario-Based Validation in Action
            </h2>

            <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>
              Watch how AZON-AI generates and validates thousands of edge-case scenarios to identify failure modes before they happen on the road.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
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
                  <div className="flex justify-between text-slate-300">
                    <span>Weather</span>
                    <span className="text-white">Rain</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Driving Condition</span>
                    <span className="text-white">Highway</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Event</span>
                    <span className="text-red-400">Cut-in</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl border p-6 ${theme.cardSolid}`}>
              <p className={`text-xs font-bold tracking-widest mb-4 ${theme.textMuted}`}>
                SCENARIO CONFIGURATION
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Environmental Conditions', value: 'Rain' },
                  { label: 'Driving Conditions', value: 'Highway' },
                  { label: 'Event', value: 'Cut-in' },
                  { label: 'Regulatory Model', value: 'UNECE R157' },
                  { label: 'Technical Requirement', value: 'ISO 26262' }
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center pb-3 border-b ${theme.border}`}>
                    <span className={`text-sm ${theme.textMuted}`}>{item.label}</span>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <p className={`text-xs font-bold tracking-widest mt-8 mb-4 ${theme.textMuted}`}>
                PARAMETER RANGES
              </p>

              <p className={`text-xs ${theme.textMuted} mb-3`}>
                AZON-AI Knowledge Base
              </p>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Ego Speed</span>
                  <span className="text-sm font-semibold">30 km/h - 60 km/h</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm">Min Distance</span>
                  <span className="text-sm font-semibold">2.0 m - 5.0 m</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">TTC</span>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${isDark ? 'border-red-500/50 text-red-400' : 'border-red-300 text-red-600'}`}>
                    0.5 s - 2.0 s
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className={`rounded-2xl border p-6 ${theme.cardSolid}`}>
                <p className={`text-xs font-bold tracking-widest mb-4 ${theme.textMuted}`}>
                  RESULTS SUMMARY
                </p>

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
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '23%' }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-yellow-500 font-semibold">230 Pass w Warning</span>
                    </div>
                    <span className={`text-sm ${theme.textMuted}`}>46%</span>
                  </div>

                  <div className={`h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '46%' }}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500 font-semibold">155 Pass</span>
                    </div>
                    <span className={`text-sm ${theme.textMuted}`}>31%</span>
                  </div>

                  <div className={`h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '31%' }}></div>
                  </div>
                </div>
              </div>

              <div className={`rounded-2xl border-2 p-6 ${isDark ? 'bg-slate-900 border-red-500/50' : 'bg-white border-red-300'}`}>
                <p className={`text-xs font-bold tracking-widest mb-3 ${theme.textMuted}`}>
                  SELECTED SCENARIO LOG
                </p>

                <p className={`text-xs ${theme.textMuted} mb-1`}>1 of 115 failed scenarios</p>
                <p className="text-red-500 font-bold mb-4">Scenario ID: #042 [FAIL]</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className={theme.textMuted}>Ego Speed</span>
                    <span>58 km/h OK</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className={theme.textMuted}>Min Distance</span>
                    <span>2.1 m OK</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className={theme.textMuted}>TTC</span>
                    <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                      0.4 s
                    </span>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-cyan-500 text-sm font-bold tracking-widest mb-2">SCALABILITY / TRAFFIC RULE CATALOGUES</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Scale Validation Across Regional Regulations Through Safety Contracts</h2>
            <p className={`max-w-2xl ${theme.textMuted}`}>
              The AZON-AI Knowledge Base translates region-specific traffic rules into formal temporal logic safety contracts, enabling compliant deployment worldwide.
            </p>
          </div>

          <div className={`rounded-2xl border p-6 mb-8 ${theme.cardSolid}`}>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-cyan-500" />
              <p className="text-xs font-bold tracking-widest">KNOWLEDGE BASE TO TEMPORAL FORMULA</p>
            </div>
            <div className={`p-4 rounded-xl font-mono text-sm sm:text-base overflow-x-auto ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
              <span className="text-purple-400">Safety contract</span> =
              <span className="text-yellow-400"> []</span>{'(v_ego <= mu_v) AND'}
              <span className="text-yellow-400"> []</span>{'(TTC >= mu_ttc) AND'}
              <span className="text-yellow-400"> []</span>{'(d_lat >= mu_lat)'}
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /><span>No collision</span></div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500" /><span>Lane keeping</span></div>
              <div className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#af7ed4]" /><span>Safe distance maintained</span></div>
            </div>
          </div>

          <div className="space-y-3">
            {trafficRules.map((rule, i) => {
              const colorMap = {
                orange: 'border-orange-500/50',
                yellow: 'border-yellow-500/50',
                blue: 'border-[#af7ed4]/50',
                red: 'border-red-500/50'
              };
              const textMap = {
                orange: 'text-orange-500',
                yellow: 'text-yellow-500',
                blue: 'text-[#af7ed4]',
                red: 'text-red-500'
              };
              return (
                <div key={i} className={`rounded-xl border p-5 grid grid-cols-2 md:grid-cols-5 gap-4 items-center ${theme.cardSolid} ${colorMap[rule.color]}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{rule.flag}</span>
                    <span className={`font-bold text-lg ${textMap[rule.color]}`}>{rule.country}</span>
                  </div>
                  <div>
                    <p className={`text-xs ${theme.textMuted}`}>Speed Ceiling (mu_v)</p>
                    <p className="font-semibold text-sm">{rule.speed}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${theme.textMuted}`}>TTC (mu_ttc)</p>
                    <p className="font-semibold text-sm">{rule.ttc}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${theme.textMuted}`}>Passing Clearance (mu_lat)</p>
                    <p className="font-semibold text-sm">{rule.clearance}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${theme.textMuted}`}>Lane Margin (w_lane)</p>
                    <p className="font-semibold text-sm">{rule.margin}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className={`text-xs italic mt-4 ${theme.textMuted}`}>* Values based on highway driving conditions</p>
        </div>
      </section>
    </>
  );
}
