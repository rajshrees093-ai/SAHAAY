import React from 'react'
import {
  ChartPie,
  TrendingUp,
  Activity,
  Globe,
  Clock,
  ShieldCheck,
  Download,
  AlertTriangle
} from 'lucide-react'
import DonutChart from '../../components/ui/DonutChart'
import RiskTrendLine from '../../components/ui/RiskTrendLine'

export const AnalyticsView = () => {
  return (
    <div className="space-y-6 animate-fade-in text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <ChartPie className="w-7 h-7 text-indigo-400" />
            Triage & Operational Analytics
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Aggregated vulnerability distribution, language intake volume, and response time metrics.
          </p>
        </div>

        <button
          onClick={() => alert('Analytics export generated')}
          className="bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold px-3.5 py-2 rounded-xl border border-white/10 transition-colors flex items-center gap-1.5"
        >
          <Download className="w-4 h-4 text-indigo-400" />
          <span>Export Analytics</span>
        </button>
      </div>

      {/* Top 2 Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donut Distribution */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Grievance Risk Distribution
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">Last 30 Days</span>
          </div>
          <DonutChart size={190} />
        </div>

        {/* Longitudinal Trajectory */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Distress Escalation Rate
            </h3>
            <span className="text-[11px] text-indigo-400 font-mono">+1.8x Rate</span>
          </div>
          <RiskTrendLine />
        </div>
      </div>

      {/* Bottom Grid: Language Intake + Response Benchmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Language Breakdown (2 cols) */}
        <div className="lg:col-span-2 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              Multilingual NLP Intake Distribution
            </h3>
            <span className="text-[11px] text-slate-400">Regional Dialects</span>
          </div>

          <div className="space-y-3 text-xs">
            {[
              { lang: 'Hindi (Standard + Dialects)', count: 599, pct: 48, color: 'bg-indigo-500' },
              { lang: 'English', count: 274, pct: 22, color: 'bg-cyan-500' },
              { lang: 'Marathi', count: 150, pct: 12, color: 'bg-amber-500' },
              { lang: 'Bengali', count: 112, pct: 9, color: 'bg-purple-500' },
              { lang: 'Tamil / Telugu', count: 113, pct: 9, color: 'bg-rose-500' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-300">{item.lang}</span>
                  <span className="text-white font-mono font-bold">
                    {item.count} <span className="text-slate-400 font-normal">({item.pct}%)</span>
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLA & Response Performance */}
        <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              Response SLAs
            </h3>
            <span className="text-[11px] text-emerald-400 font-bold">98.4% On Time</span>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="p-3 bg-slate-950/60 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Critical Triage SLA</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-lg font-black font-mono text-white">14.2 mins</span>
                <span className="text-emerald-400 font-bold text-[11px]">Target: &lt;30m</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950/60 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">High Risk Verification</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-lg font-black font-mono text-white">42.8 mins</span>
                <span className="text-emerald-400 font-bold text-[11px]">Target: &lt;60m</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950/60 rounded-xl border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Follow-up Adherence</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-lg font-black font-mono text-white">96.8%</span>
                <span className="text-emerald-400 font-bold text-[11px]">Target: &gt;95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsView
