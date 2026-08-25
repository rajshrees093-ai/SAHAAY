import React from 'react'
import {
  Phone,
  ShieldAlert,
  HeartPulse,
  Scale,
  ExternalLink,
  ArrowLeft,
  LifeBuoy
} from 'lucide-react'
import { Link } from 'react-router-dom'

export const EmergencyContacts = () => {
  const helplines = [
    {
      title: 'National Emergency Response (ERSS)',
      number: '112',
      category: 'Police, Ambulance & Fire Dispatch',
      desc: '24/7 unified immediate response for physical safety threats, medical emergencies, and active crimes.',
      color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      badge: 'Immediate Dispatch'
    },
    {
      title: 'Women in Distress Helpline',
      number: '1091',
      category: 'Women & Child Safety',
      desc: 'Dedicated round-the-clock emergency support for harassment, domestic violence, and acute crisis.',
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      badge: '24/7 Dedicated'
    },
    {
      title: 'NHAA Grievance Redressal Line',
      number: '14566',
      category: 'Public Grievances & Case Support',
      desc: 'National Helpline Assessment Authority toll-free assistance for procedural triage and welfare follow-ups.',
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      badge: 'Official Toll-Free'
    },
    {
      title: 'National Cyber Crime Reporting',
      number: '1930',
      category: 'Online Harassment & Fraud',
      desc: 'Immediate reporting of online stalking, non-consensual imagery, and digital financial extortion.',
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      badge: 'Cyber Redressal'
    },
    {
      title: 'Tele-MANAS Mental Health Support',
      number: '14416',
      category: 'Psychological Crisis Assistance',
      desc: 'Confidential psychological first-aid and crisis counseling provided by certified counselors in 20+ regional languages.',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      badge: 'Mental Health'
    },
    {
      title: 'NALSA Free Legal Aid Support',
      number: '15100',
      category: 'Legal Representation & Protection',
      desc: 'Free legal counseling, protection order filing assistance, and court advocate assignment for eligible victims.',
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      badge: 'Free Legal Aid'
    }
  ]

  return (
    <div className="container mx-auto p-4 lg:p-8 max-w-5xl space-y-8 animate-fade-in text-slate-100">
      {/* Header */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl text-center space-y-2">
        <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mx-auto mb-4 shadow-inner">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
          Emergency Helplines & Crisis Directory
        </h1>
        <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
          If you or someone you know is in immediate danger, please reach out to the verified national helplines below. All lines are toll-free.
        </p>
      </div>

      {/* Helplines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helplines.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-white/20 transition-all group"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {item.badge}
                </span>
                <span className="text-xs font-bold text-slate-400">{item.category}</span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">{item.desc}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-2xl font-black font-mono tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                {item.number}
              </span>
              <a
                href={`tel:${item.number}`}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow-md transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmergencyContacts
