import React from 'react'
import { ShieldAlert, Sparkles } from 'lucide-react'

export const RiskGauge = ({ score = 91, max = 100, riskLevel = 'CRITICAL', confidence = '88%' }) => {
  const percentage = Math.min(Math.max((score / max) * 100, 0), 100)
  const radius = 68
  const strokeWidth = 14
  const circumference = Math.PI * radius // Half circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const getColor = (lvl) => {
    switch ((lvl || '').toUpperCase()) {
      case 'LOW':
        return { stroke: '#10b981', text: 'text-emerald-400', label: 'Low Stress / Vulnerability', glow: '#10b981' }
      case 'MODERATE':
        return { stroke: '#f59e0b', text: 'text-amber-300', label: 'Moderate Vulnerability', glow: '#f59e0b' }
      case 'HIGH':
        return { stroke: '#f97316', text: 'text-orange-400', label: 'High Distress Level', glow: '#f97316' }
      case 'CRITICAL':
      default:
        return { stroke: '#f43f5e', text: 'text-rose-400', label: 'Severe / Critical Vulnerability', glow: '#f43f5e' }
    }
  }

  const { stroke, text, label, glow } = getColor(riskLevel)

  return (
    <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: glow }}
      ></div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest block">
            Advisory Triage Metric
          </span>
          <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Stress Vulnerability Index (SVI)
          </h3>
        </div>
        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
          {confidence} Conf.
        </span>
      </div>

      {/* Semi-Circle SVG Gauge */}
      <div className="flex flex-col items-center justify-center my-2">
        <div className="relative w-44 h-24 flex items-end justify-center">
          <svg width="176" height="100" viewBox="0 0 176 100" className="overflow-visible">
            {/* Background Arc */}
            <path
              d="M 18 88 A 70 70 0 0 1 158 88"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Filled Arc */}
            <path
              d="M 18 88 A 70 70 0 0 1 158 88"
              fill="none"
              stroke={stroke}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{ filter: `drop-shadow(0 0 8px ${glow})` }}
            />
          </svg>

          {/* Centered Score */}
          <div className="absolute bottom-0 flex flex-col items-center">
            <div className="flex items-baseline">
              <span className={`text-4xl font-black font-mono tracking-tighter ${text}`}>{score}</span>
              <span className="text-xs font-bold text-slate-400 font-mono ml-0.5">/100</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <span className={`text-xs font-extrabold uppercase tracking-wider ${text}`}>{riskLevel} RISK</span>
          <p className="text-[11px] text-slate-400 font-medium">{label}</p>
        </div>
      </div>

      {/* Notice */}
      <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-slate-400 leading-tight">
        <strong className="text-slate-300">Human Discretion Required:</strong> This AI score is advisory only to prioritize response bandwidth.
      </div>
    </div>
  )
}

export default RiskGauge
