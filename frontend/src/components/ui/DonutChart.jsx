import React from 'react'

export const DonutChart = ({
  data = [
    { label: 'Low', count: 412, percentage: 33, color: '#10b981' },
    { label: 'Moderate', count: 398, percentage: 32, color: '#f59e0b' },
    { label: 'High', count: 182, percentage: 15, color: '#f97316' },
    { label: 'Critical', count: 256, percentage: 20, color: '#f43f5e' }
  ],
  total = 1248,
  size = 180,
  strokeWidth = 24
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  let accumulatedPercent = 0

  return (
    <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
      {/* SVG Container */}
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth={strokeWidth}
          />
          {data.map((slice, index) => {
            const strokeDasharray = `${(slice.percentage / 100) * circumference} ${circumference}`
            const strokeDashoffset = -((accumulatedPercent / 100) * circumference)
            accumulatedPercent += slice.percentage

            return (
              <circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={slice.color}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
                style={{ filter: `drop-shadow(0 0 6px ${slice.color}66)` }}
              />
            )
          })}
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-black text-white font-mono tracking-tight">{total}</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Cases</span>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 text-xs w-full max-w-xs">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5 backdrop-blur-xs">
            <span
              className="w-3 h-3 rounded-full flex-shrink-0 shadow-sm"
              style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
            ></span>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-300">{item.label}</span>
              <span className="font-bold font-mono text-white text-xs">
                {item.count} <span className="text-[10px] text-slate-400 font-normal">({item.percentage}%)</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DonutChart
