import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  History,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  PhoneCall,
  UserCheck,
  Plus
} from 'lucide-react'
import RiskBadge from '../../components/ui/RiskBadge'

export const FollowUpsView = () => {
  const [followups, setFollowups] = useState([
    {
      id: 'FLP-401',
      caseId: 'NHAA-2501',
      risk: 'HIGH',
      lastInteraction: '24h ago',
      nextFollowUp: 'Overdue (45 mins)',
      assignedOfficer: 'Officer Sharma',
      status: 'Missed',
      isOverdue: true
    },
    {
      id: 'FLP-402',
      caseId: 'NHAA-2841',
      risk: 'CRITICAL',
      lastInteraction: '12m ago',
      nextFollowUp: 'Today, 11:30 AM (in 30 mins)',
      assignedOfficer: 'Officer Sharma',
      status: 'Scheduled',
      isOverdue: false
    },
    {
      id: 'FLP-403',
      caseId: 'NHAA-2819',
      risk: 'HIGH',
      lastInteraction: '45m ago',
      nextFollowUp: 'Today, 02:00 PM',
      assignedOfficer: 'Officer Sharma',
      status: 'Scheduled',
      isOverdue: false
    },
    {
      id: 'FLP-404',
      caseId: 'NHAA-2765',
      risk: 'MODERATE',
      lastInteraction: '3h ago',
      nextFollowUp: 'Tomorrow, 10:00 AM',
      assignedOfficer: 'Officer Sharma',
      status: 'Scheduled',
      isOverdue: false
    },
    {
      id: 'FLP-398',
      caseId: 'NHAA-2690',
      risk: 'LOW',
      lastInteraction: '2 days ago',
      nextFollowUp: 'Completed',
      assignedOfficer: 'Officer Ramesh',
      status: 'Completed',
      isOverdue: false
    }
  ])

  return (
    <div className="space-y-6 animate-fade-in text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
            <History className="w-7 h-7 text-indigo-400" />
            Follow-Up & Wellness Schedule
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Mandatory periodic wellness check-ins for high-stress and vulnerable complainants.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('New follow-up schedule modal opened')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Schedule Follow-Up</span>
          </button>
        </div>
      </div>

      {/* Overdue Warning Alert */}
      <div className="bg-rose-950/30 border border-rose-500/40 rounded-2xl p-4 flex items-center justify-between gap-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-rose-300">1 Mandatory Follow-up is Overdue!</span>
            <p className="text-rose-400 mt-0.5">
              Case <strong>NHAA-2501</strong> requires an immediate wellness verification call.
            </p>
          </div>
        </div>
        <Link
          to="/operator?caseId=NHAA-2501"
          className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md transition-colors flex-shrink-0"
        >
          Call Citizen Now
        </Link>
      </div>

      {/* Table */}
      <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/60 border-b border-white/10 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Follow-Up ID</th>
                <th className="py-3.5 px-4">Case ID</th>
                <th className="py-3.5 px-4">Risk</th>
                <th className="py-3.5 px-4">Last Interaction</th>
                <th className="py-3.5 px-4">Next Follow-Up</th>
                <th className="py-3.5 px-4">Assigned Officer</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs">
              {followups.map((f) => (
                <tr
                  key={f.id}
                  className={`hover:bg-white/5 transition-colors ${f.isOverdue && f.status !== 'Completed' ? 'bg-rose-950/20' : ''}`}
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-white">{f.id}</td>
                  <td className="py-3.5 px-4 font-bold">
                    <Link to={`/operator?caseId=${f.caseId}`} className="text-indigo-400 hover:text-indigo-300 hover:underline">
                      {f.caseId}
                    </Link>
                  </td>
                  <td className="py-3.5 px-4">
                    <RiskBadge level={f.risk} size="xs" />
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{f.lastInteraction}</td>
                  <td className={`py-3.5 px-4 font-semibold ${f.isOverdue && f.status !== 'Completed' ? 'text-rose-400 font-bold' : 'text-slate-200'}`}>
                    {f.nextFollowUp}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">{f.assignedOfficer}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${
                        f.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : f.status === 'Missed'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      }`}
                    >
                      {f.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => {
                        setFollowups((prev) =>
                          prev.map((item) =>
                            item.id === f.id
                              ? {
                                  ...item,
                                  status: item.status === 'Completed' ? 'Scheduled' : 'Completed',
                                  isOverdue: false
                                }
                              : item
                          )
                        )
                      }}
                      className="text-xs font-bold text-indigo-400 hover:text-white bg-white/5 hover:bg-indigo-600 border border-white/10 px-3 py-1 rounded-xl transition-all"
                    >
                      {f.status === 'Completed' ? 'Reopen' : 'Mark Completed ✓'}
                    </button>
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

export default FollowUpsView
