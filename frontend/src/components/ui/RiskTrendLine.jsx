import React from 'react'
import { TrendingUp, AlertTriangle } from 'lucide-react'

export const RiskTrendLine = ({
  data = [
    { day: 'Day 1', score: 32, label: 'Baseline' },
    { day: 'Day 4', score: 45, label: 'Intake Call' },
    { day: 'Day 8', score: 58, label: 'Follow-up 1' },
    { day: 'Day 12', score: 72, label: 'Escalation' },
    { day: 'Day 15', score: 84, label: 'Crisis Signal' },
    { day: 'Day 18', score: 91, label: 'Critical Alert' }
  ],
  title = 'Longitudinal Vulnerability Trajectory',
  subtitle = 'Tracks escalation of distress signals across repeated interactions'
}) => {
  const width = 500
  const height = 150
  const paddingX = 35
  const paddingY = 25

  const minScore = 0
  const maxScore = 100

  const getX = (index) => paddingX + (index / (data.length - 1)) * (width - 2 * paddingX)
  const getY = (score) => height - paddingY - ((score - minScore) / (maxScore - minScore)) * (height - 2 * paddingY)

  // Generate SVG path for line
  const points = data.map((d, i) => `${getX(i)},${getY(d.score)}`).join(' L ')
  const areaPath = `M ${getX(0)},${height - paddingY} L ${points} L ${getX(data.length - 1)},${height - paddingY} Z`

  return (
    <div className="w-full">
      {/* SVG Chart */}
      <div className="w-full overflow-hidden">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          <defs>
            <linearGradient id="trendGradientDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="lineStrokeDark" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="70%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>

          {/* Background Grid Lines */}
          {[25, 50, 75, 100].map((level) => {
            const y = getY(level)
            return (
              <g key={level}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeDasharray="4 4"
                />
                <text x={paddingX - 10} y={y + 3} fill="#64748b" fontSize="9" textAnchor="end" fontFamily="monospace">
                  {level}
                </text>
              </g>
            )
          })}

          {/* Gradient Area */}
          <path d={areaPath} fill="url(#trendGradientDark)" />

          {/* Trajectory Line */}
          <path
            d={`M ${points}`}
            fill="none"
            stroke="url(#lineStrokeDark)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 0 6px rgba(244,63,94,0.4))' }}
          />

          {/* Data Points */}
          {data.map((d, i) => {
            const x = getX(i)
            const y = getY(d.score)
            const isLast = i === data.length - 1

            return (
              <g key={i} className="group cursor-pointer">
                <circle
                  cx={x}
                  cy={y}
                  r={isLast ? '6' : '4'}
                  fill={isLast ? '#f43f5e' : '#818cf8'}
                  stroke="#0f172a"
                  strokeWidth="2"
                  style={{ filter: isLast ? 'drop-shadow(0 0 8px #f43f5e)' : 'none' }}
                />
                {/* Day labels */}
                <text
                  x={x}
                  y={height - 8}
                  fill="#94a3b8"
                  fontSize="9"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  {d.day}
                </text>
                {/* Score label above point */}
                <text
                  x={x}
                  y={y - 8}
                  fill={isLast ? '#f43f5e' : '#cbd5e1'}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {d.score}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Footer explanation */}
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs">
        <span className="text-slate-400 font-medium flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5 text-rose-400" />
          <span className="text-rose-400 font-bold">+59 pts</span> elevation over 18 days
        </span>
        <span className="text-[11px] text-slate-400">Escalation Velocity: <strong className="text-white">High (1.8x)</strong></span>
      </div>
    </div>
  )
}

export default RiskTrendLine
