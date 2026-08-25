import React, { useState } from 'react'
import {
  FileText,
  Download,
  Calendar,
  Filter,
  CheckCircle,
  FileSpreadsheet,
  FileCheck,
  ShieldCheck
} from 'lucide-react'

export const ReportsView = () => {
  const [downloading, setDownloading] = useState(null)

  const reportList = [
    {
      id: 'REP-2026-05',
      title: 'Monthly Vulnerability & Escalation Audit',
      period: 'May 1 – May 24, 2026',
      size: '2.4 MB',
      type: 'PDF / Audit Log',
      description: 'Comprehensive audit of all SVI scores, human overrides, and triage turnaround times.'
    },
    {
      id: 'REP-2026-04',
      title: 'Multilingual NLP Accuracy & Dialect Benchmark',
      period: 'April 2026',
      size: '1.8 MB',
      type: 'Technical Benchmark',
      description: 'Confusion matrix and precision metrics across regional dialect intakes.'
    },
    {
      id: 'REP-2026-WK21',
      title: 'Weekly Follow-up & Welfare Compliance Summary',
      period: 'Week 21, 2026',
      size: '940 KB',
      type: 'Operational Summary',
      description: 'Officer-by-officer adherence metrics for 24-hour and 48-hour follow-up mandates.'
    },
    {
      id: 'REP-2026-EMG',
      title: 'Emergency Dispatch & Protection Order Relays',
      period: 'Q2 2026 (To Date)',
      size: '3.1 MB',
      type: 'Emergency Audit',
      description: 'Logged emergency escalations dispatched directly to 112 and NALSA legal aid clinics.'
    }
  ]

  const handleDownload = (id) => {
    setDownloading(id)
    setTimeout(() => {
      setDownloading(null)
      alert(`Report ${id} downloaded successfully!`)
    }, 1200)
  }

  return (
    <div className="space-y-6 animate-fade-in text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <FileText className="w-7 h-7 text-indigo-400" />
            Compliance & Triage Reports
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Export official government compliance reports, algorithm bias audits, and triage accountability summaries.
          </p>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportList.map((rep) => (
          <div
            key={rep.id}
            className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">{rep.title}</h3>
                    <span className="text-[10px] font-mono text-indigo-300">{rep.id}</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {rep.size}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">{rep.description}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
              <span className="text-slate-400 font-medium">Period: {rep.period}</span>
              <button
                onClick={() => handleDownload(rep.id)}
                disabled={downloading === rep.id}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold px-3.5 py-1.5 rounded-xl shadow-md transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloading === rep.id ? 'Generating...' : 'Export'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReportsView
