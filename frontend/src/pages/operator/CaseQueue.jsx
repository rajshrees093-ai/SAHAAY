import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  Search,
  Filter,
  Eye,
  SlidersHorizontal,
  ChevronDown,
  ArrowUpDown,
  Download,
  FolderKanban
} from 'lucide-react'
import RiskBadge from '../../components/ui/RiskBadge'

export const CaseQueue = () => {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [searchTerm, setSearchTerm] = useState(initialQuery)
  const [riskFilter, setRiskFilter] = useState('ALL')
  const [statusFilter, setStatusFilter] = useState('ALL')

  const seedCases = [
    {
      id: 'NHAA-2841',
      docket: 'NHAA/2026/05/2841',
      risk: 'CRITICAL',
      svi: 91,
      category: 'Intimidation & Harassment',
      language: 'Hindi',
      channel: 'Voice Call',
      assignedTo: 'Officer Sharma',
      status: 'Pending Verification',
      intakeDate: 'Today, 10:14 AM'
    },
    {
      id: 'NHAA-2819',
      docket: 'NHAA/2026/05/2819',
      risk: 'HIGH',
      svi: 78,
      category: 'Persistent Stalking',
      language: 'Marathi',
      channel: 'Voice Intake',
      assignedTo: 'Officer Sharma',
      status: 'Under Evaluation',
      intakeDate: 'Today, 09:30 AM'
    },
    {
      id: 'NHAA-2798',
      docket: 'NHAA/2026/05/2798',
      risk: 'HIGH',
      svi: 74,
      category: 'Domestic Grievance',
      language: 'English',
      channel: 'Portal Form',
      assignedTo: 'Officer Verma',
      status: 'In Progress',
      intakeDate: 'Yesterday, 04:15 PM'
    },
    {
      id: 'NHAA-2765',
      docket: 'NHAA/2026/05/2765',
      risk: 'MODERATE',
      svi: 43,
      category: 'Public Compensation',
      language: 'Bengali',
      channel: 'Text Submission',
      assignedTo: 'Officer Sharma',
      status: 'Under Review',
      intakeDate: 'Yesterday, 01:20 PM'
    },
    {
      id: 'NHAA-2722',
      docket: 'NHAA/2026/05/2722',
      risk: 'LOW',
      svi: 18,
      category: 'Civil Inquiry',
      language: 'English',
      channel: 'Portal Form',
      assignedTo: 'Officer Ramesh',
      status: 'Registered',
      intakeDate: '24 May 2026'
    },
    {
      id: 'NHAA-2690',
      docket: 'NHAA/2026/05/2690',
      risk: 'LOW',
      svi: 12,
      category: 'Informational Request',
      language: 'Tamil',
      channel: 'Voice Intake',
      assignedTo: 'Officer Ramesh',
      status: 'Resolved',
      intakeDate: '23 May 2026'
    }
  ]

  const getCombinedCases = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('sahaay_active_cases') || '[]')
      const storedIds = new Set(stored.map((c) => c.id))
      const remainingSeed = seedCases.filter((c) => !storedIds.has(c.id))
      return [...stored, ...remainingSeed]
    } catch (e) {
      return seedCases
    }
  }

  const allCases = getCombinedCases()

  const filtered = allCases.filter((c) => {
    const matchesSearch =
      c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.docket.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.category && c.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (c.assignedTo && c.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesRisk = riskFilter === 'ALL' || c.risk === riskFilter
    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter
    return matchesSearch && matchesRisk && matchesStatus
  })

  return (
    <div className="space-y-6 animate-fade-in text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <FolderKanban className="w-7 h-7 text-indigo-400" />
            Case Management Queue
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Active triaged grievances, investigation dockets, and disposition status.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold px-3.5 py-2 rounded-xl border border-white/10 transition-colors flex items-center gap-1.5">
            <Download className="w-4 h-4 text-indigo-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by case ID, docket, category, or officer..."
            className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="bg-slate-950/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="ALL">All Risk Levels</option>
            <option value="CRITICAL">Critical Risk</option>
            <option value="HIGH">High Risk</option>
            <option value="MODERATE">Moderate Risk</option>
            <option value="LOW">Low Risk</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-950/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="ALL">All Statuses</option>
            <option value="Pending Verification">Pending Verification</option>
            <option value="Under Evaluation">Under Evaluation</option>
            <option value="Under Review">Under Review</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/60 border-b border-white/10 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Case ID</th>
                <th className="py-3.5 px-4">Docket No.</th>
                <th className="py-3.5 px-4">Risk Level</th>
                <th className="py-3.5 px-4">SVI Score</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Language / Channel</th>
                <th className="py-3.5 px-4">Assigned Officer</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-bold font-mono text-white">{c.id}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-400">{c.docket}</td>
                  <td className="py-3.5 px-4">
                    <RiskBadge level={c.risk} size="xs" />
                  </td>
                  <td className="py-3.5 px-4 font-bold font-mono text-white">{c.svi}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-300">{c.category}</td>
                  <td className="py-3.5 px-4 text-slate-400">
                    {c.language} · <span className="font-semibold text-slate-300">{c.channel}</span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-indigo-400">{c.assignedTo}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/5 border border-white/10 text-slate-300">
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <Link
                      to={`/operator?caseId=${c.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-white bg-indigo-500/10 hover:bg-indigo-600 border border-indigo-500/20 px-3 py-1.5 rounded-xl transition-all shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CaseQueue
