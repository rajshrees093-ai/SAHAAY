import React from 'react'
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'

export const KpiCard = ({
  title,
  value,
  change,
  trend = 'up',
  subtitle,
  icon: Icon,
  accentColor = 'indigo',
  onClick,
  active = false
}) => {
  const accentClasses = {
    indigo: 'text-indigo-400 border-indigo-500/20 from-indigo-900/30 to-indigo-950/10 hover:border-indigo-500/40',
    rose: 'text-rose-400 border-rose-500/20 from-rose-900/30 to-rose-950/10 hover:border-rose-500/40',
    amber: 'text-amber-300 border-amber-500/20 from-amber-900/30 to-amber-950/10 hover:border-amber-500/40',
    orange: 'text-orange-400 border-orange-500/20 from-orange-900/30 to-orange-950/10 hover:border-orange-500/40',
    emerald: 'text-emerald-400 border-emerald-500/20 from-emerald-900/30 to-emerald-950/10 hover:border-emerald-500/40',
    cyan: 'text-cyan-400 border-cyan-500/20 from-cyan-900/30 to-cyan-950/10 hover:border-cyan-500/40'
  }

  const iconBgClasses = {
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  }

  const selectedClass = accentClasses[accentColor] || accentClasses.indigo
  const selectedIconClass = iconBgClasses[accentColor] || iconBgClasses.indigo

  return (
    <div
      onClick={onClick}
      className={`relative p-5 rounded-2xl bg-gradient-to-br bg-slate-900/60 backdrop-blur-xl border transition-all duration-200 ${
        onClick ? 'cursor-pointer hover:shadow-lg hover:-translate-y-0.5' : ''
      } ${
        active
          ? 'border-indigo-500 ring-2 ring-indigo-500/30 bg-slate-800/80 shadow-indigo-500/10'
          : selectedClass
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">{title}</span>
        {Icon && (
          <div className={`w-8 h-8 rounded-xl border flex items-center justify-center backdrop-blur-sm ${selectedIconClass}`}>
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight font-mono">{value}</h3>
        {change && (
          <div
            className={`flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border backdrop-blur-xs ${
              trend === 'up'
                ? 'bg-rose-500/15 text-rose-400 border-rose-500/30'
                : trend === 'down'
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                : 'bg-slate-500/15 text-slate-300 border-slate-500/30'
            }`}
          >
            {trend === 'up' && <ArrowUpRight className="w-3.5 h-3.5" />}
            {trend === 'down' && <ArrowDownRight className="w-3.5 h-3.5" />}
            {trend === 'neutral' && <Minus className="w-3.5 h-3.5" />}
            <span>{change}</span>
          </div>
        )}
      </div>

      {subtitle && (
        <p className="text-xs text-slate-400 font-medium mt-2 leading-tight">{subtitle}</p>
      )}
    </div>
  )
}

export default KpiCard
