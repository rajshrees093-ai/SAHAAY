import React from 'react'

export const RiskBadge = ({ level, size = 'sm', className = '' }) => {
  const normalizedLevel = (level || 'LOW').toUpperCase()

  const config = {
    LOW: {
      label: 'LOW RISK',
      bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]',
      dot: 'bg-emerald-400'
    },
    MODERATE: {
      label: 'MODERATE RISK',
      bg: 'bg-amber-500/10 border-amber-500/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.15)]',
      dot: 'bg-amber-400'
    },
    HIGH: {
      label: 'HIGH RISK',
      bg: 'bg-orange-500/10 border-orange-500/30 text-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.15)]',
      dot: 'bg-orange-400'
    },
    CRITICAL: {
      label: 'CRITICAL RISK',
      bg: 'bg-rose-500/15 border-rose-500/40 text-rose-400 shadow-[0_0_16px_rgba(244,63,94,0.25)] animate-pulse',
      dot: 'bg-rose-400'
    }
  }

  const current = config[normalizedLevel] || config.LOW

  const sizeClasses = {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-xs',
    lg: 'px-4 py-2 text-sm'
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-wider rounded-full border backdrop-blur-md transition-all ${current.bg} ${sizeClasses[size] || sizeClasses.sm} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`}></span>
      <span>{current.label}</span>
    </span>
  )
}

export default RiskBadge
