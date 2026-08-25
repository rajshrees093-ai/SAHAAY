import React, { useState } from 'react'
import { AlertTriangle, Clock, ShieldAlert, CheckCircle, Activity, FileText, TrendingUp, UserCheck } from 'lucide-react'

const cases = [
  {
    id: "NHAA-2026-A2",
    risk: "HIGH",
    riskColor: "text-red-700 bg-red-100 border-red-200",
    status: "Pending review",
    indicators: ["Significant change in communication pattern", "Increased distress-related linguistic indicators", "Negative trend compared with previous interactions"],
    trend: [30, 45, 55, 75, 82],
    history: "Gradual communication changes over 5 days.",
    assigned: "Counsellor A"
  },
  {
    id: "NHAA-2026-B7",
    risk: "MODERATE",
    riskColor: "text-orange-700 bg-orange-100 border-orange-200",
    status: "In Progress",
    indicators: ["Elevated anxiety markers", "Hesitant speech patterns"],
    trend: [20, 25, 35, 40, 45],
    history: "Routine check-in showed slight elevation.",
    assigned: "Counsellor A"
  },
  {
    id: "NHAA-2026-C3",
    risk: "LOW",
    riskColor: "text-green-700 bg-green-100 border-green-200",
    status: "Reviewed",
    indicators: ["Stable communication", "Normal baseline"],
    trend: [15, 12, 14, 10, 12],
    history: "Consistent baseline over 2 weeks.",
    assigned: "Counsellor A"
  }
]

const OperatorDashboard = () => {
  const [selectedCase, setSelectedCase] = useState(cases[0])
  const [markedReviewed, setMarkedReviewed] = useState(false)

  return (
    <div className="container mx-auto p-6 max-w-7xl h-full flex flex-col md:flex-row gap-6 mt-4">
      
      {/* Left Sidebar: Case List */}
      <div className="md:w-1/3 flex flex-col space-y-4">
        <div className="bg-[#0f766e] text-white p-4 rounded-t-lg font-bold uppercase tracking-wider text-sm flex items-center justify-between">
          <span>Counsellor Dashboard</span>
          <span className="bg-white/20 px-2 py-1 rounded text-xs">{cases.length} Active</span>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-b-lg shadow-sm flex-grow overflow-y-auto">
          <div className="p-3 text-xs text-gray-500 bg-gray-50 border-b border-gray-100 uppercase tracking-widest font-semibold">
            Sorted by Priority / Trend
          </div>
          {cases.map((c) => (
            <div 
              key={c.id} 
              onClick={() => { setSelectedCase(c); setMarkedReviewed(false); }}
              className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${selectedCase.id === c.id ? 'bg-blue-50 border-l-4 border-l-blue-800' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-800 text-sm">Case {c.id.split('-').pop()}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-sm border ${c.riskColor}`}>
                  {c.risk}
                </span>
              </div>
              <p className="text-xs text-gray-500">{c.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content: Explainable Alert & Detail Screen */}
      <div className="md:w-2/3 flex flex-col space-y-6">
        
        {/* The Explainable Alert Header */}
        <div className={`rounded-lg shadow-sm border p-6 flex justify-between items-center ${selectedCase.risk === 'HIGH' ? 'bg-red-700 text-white border-red-800' : selectedCase.risk === 'MODERATE' ? 'bg-orange-600 text-white border-orange-700' : 'bg-green-700 text-white border-green-800'}`}>
          <div>
            <h2 className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Explainable Alert</h2>
            <h1 className="text-3xl font-extrabold tracking-tight">RISK LEVEL: {selectedCase.risk}</h1>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-2xl">
            !
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Case Detail Screen */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col">
            <div className="bg-[#1e293b] text-white p-4 font-bold text-sm uppercase tracking-wider">
              Case Detail Screen
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="font-bold w-24 text-gray-900">Case ID:</span>
                  <span>{selectedCase.id}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="font-bold w-24 text-gray-900">Status:</span>
                  <span className={markedReviewed ? 'text-green-600 font-bold' : ''}>{markedReviewed ? 'Reviewed' : selectedCase.status}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="font-bold w-24 text-gray-900">Assigned:</span>
                  <span>{selectedCase.assigned}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900 block mb-2">Potential Contributing Indicators:</span>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {selectedCase.indicators.map((ind, idx) => (
                      <li key={idx}>{ind}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => setMarkedReviewed(true)}
                  disabled={markedReviewed}
                  className={`w-full py-3 px-4 rounded font-bold uppercase text-sm tracking-wide transition-colors flex items-center justify-center space-x-2 ${markedReviewed ? 'bg-green-100 text-green-800 cursor-not-allowed border border-green-200' : 'bg-[#0f766e] hover:bg-teal-800 text-white shadow-md'}`}
                >
                  {markedReviewed ? <><CheckCircle className="w-5 h-5"/> <span>Case Reviewed</span></> : <><UserCheck className="w-5 h-5"/> <span>[ Review Case ]</span></>}
                </button>
                <p className="text-center text-xs text-gray-400 mt-3 italic">AI output is never presented as a medical diagnosis.</p>
              </div>
            </div>
          </div>

          {/* Risk Trend Graph Component */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col">
            <div className="bg-orange-600 text-white p-4 font-bold text-sm uppercase tracking-wider flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Dynamic Risk Trend</span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <p className="text-xs text-gray-500 mb-6 italic">{selectedCase.history}</p>
              
              {/* Simulated SVG Graph mimicking the PPT visual */}
              <div className="relative w-full h-48 bg-slate-50 border-b-2 border-l-2 border-slate-300 p-2">
                 <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2" />
                    <line x1="0" y1="75" x2="100" y2="75" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2" />
                    
                    {/* Trend Line (computed from selected case array roughly 0-100 scaled) */}
                    <polyline 
                      fill="none" 
                      stroke="#ea580c" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={selectedCase.trend.map((val, idx) => `${idx * 25},${100 - val}`).join(' ')} 
                    />
                    
                    {/* Points */}
                    {selectedCase.trend.map((val, idx) => (
                      <circle key={idx} cx={idx * 25} cy={100 - val} r="3" fill="#ea580c" className="animate-pulse" />
                    ))}
                 </svg>
                 
                 {/* X Axis Labels */}
                 <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] font-bold text-slate-400">
                    <span>W1</span>
                    <span>W2</span>
                    <span>W3</span>
                    <span>W4</span>
                    <span>W5</span>
                 </div>
              </div>

              <div className="mt-10 bg-slate-100 p-3 rounded text-xs text-slate-600 flex items-start space-x-2">
                <Activity className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <p>This dynamic score updates automatically as new multimodal signals (text, voice) arrive.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OperatorDashboard
