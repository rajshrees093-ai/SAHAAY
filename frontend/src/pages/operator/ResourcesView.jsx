import React, { useState } from 'react'
import {
  LifeBuoy,
  Scale,
  HeartPulse,
  Brain,
  Home,
  ShieldAlert,
  Accessibility,
  Phone,
  ExternalLink,
  MapPin
} from 'lucide-react'

export const ResourcesView = () => {
  const [selectedReferral, setSelectedReferral] = useState(null)
  const resourceCategories = [
    {
      title: 'Legal Aid & Protection Orders',
      icon: Scale,
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      items: [
        { name: 'National Legal Services Authority (NALSA)', contact: '15100', desc: 'Free legal aid for eligible citizens' },
        { name: 'District Legal Aid Clinic Referral', contact: 'Direct Operator Dispatch', desc: 'Assistance with protection filings and court representation' }
      ]
    },
    {
      title: 'Emergency Medical & Forensic Care',
      icon: HeartPulse,
      color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      items: [
        { name: 'Emergency Medical Response (ERSS)', contact: '112', desc: 'Ambulance dispatch and physical emergency intervention' },
        { name: 'One Stop Centre (OSC) Medical Team', contact: '181 Direct Line', desc: 'Integrated medical, psychological, and temporary shelter care' }
      ]
    },
    {
      title: 'Psychological Support & Crisis Counseling',
      icon: Brain,
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      items: [
        { name: 'Tele-MANAS Mental Health Assistance', contact: '14416', desc: '24/7 tele-counseling in 20 regional languages' },
        { name: 'KIRAN Mental Health Helpline', contact: '1800-599-0019', desc: 'Early screening, psychological first aid, and distress management' }
      ]
    },
    {
      title: 'Safe Shelters & Short-Stay Homes',
      icon: Home,
      color: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      items: [
        { name: 'Swadhar Greh Shelter Network', contact: 'Operator Relay', desc: 'Safe residential shelter with food, clothing, and legal rehabilitation' },
        { name: 'Ujjawala Rehabilitation Centers', contact: 'District Officer Dispatch', desc: 'Emergency rescue and safe reintegration facilities' }
      ]
    },
    {
      title: 'National Helplines Quick Dial',
      icon: ShieldAlert,
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      items: [
        { name: 'National Emergency Number', contact: '112', desc: 'Unified single number for police, fire, and ambulance' },
        { name: 'Women in Distress Helpline', contact: '1091', desc: 'Dedicated 24/7 response for harassment and violence' },
        { name: 'Cyber Crime Reporting Portal', contact: '1930', desc: 'Financial fraud, online stalking, and digital extortion redressal' }
      ]
    },
    {
      title: 'Accessibility & Vulnerable Assistance',
      icon: Accessibility,
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      items: [
        { name: 'Elder Line Support Helpline', contact: '14567', desc: 'Senior citizen abuse prevention and field welfare visits' },
        { name: 'Disability Legal Rights Helpline', contact: '1800-11-2001', desc: 'Sign-language assistance and accessible grievance triage' }
      ]
    }
  ]

  return (
    <div className="space-y-6 animate-fade-in text-slate-100">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
          <LifeBuoy className="w-7 h-7 text-indigo-400" />
          Support Resources & Referral Directory
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Authorized referral contacts and emergency support protocols for immediate citizen assistance.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourceCategories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <div
              key={i}
              className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-5 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white leading-tight">{cat.title}</h3>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item, j) => (
                    <div key={j} className="p-3 bg-slate-950/60 rounded-xl border border-white/10 text-xs">
                      <div className="flex items-center justify-between gap-2 font-bold text-white mb-1">
                        <span>{item.name}</span>
                        <span className="font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 text-[11px]">
                          {item.contact}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-right">
                <button
                  onClick={() => setSelectedReferral(cat)}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Initiate Referral Protocol &rarr;
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Referral Modal */}
      {selectedReferral && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <LifeBuoy className="w-5 h-5 text-indigo-400" />
              Dispatch Referral: {selectedReferral.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Select an active case to securely transmit encrypted victim context to the referral agency:
            </p>

            <select className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="NHAA-2841">NHAA-2841 (Critical - Threat / Intimidation)</option>
              <option value="NHAA-2819">NHAA-2819 (High - Stalking / Harassment)</option>
              <option value="NHAA-2798">NHAA-2798 (High - Domestic Coercion)</option>
            </select>

            <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-500/20 text-xs text-indigo-200">
              <span className="font-bold block mb-1">Encrypted Relay Protocol:</span>
              <p className="text-[11px] text-indigo-300/80">
                Acoustic markers and contact tokens will be relayed with strict consent authorization.
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setSelectedReferral(null)}
                className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Referral dispatched to ${selectedReferral.title} successfully!`)
                  setSelectedReferral(null)
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md transition-colors"
              >
                Confirm & Dispatch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResourcesView
