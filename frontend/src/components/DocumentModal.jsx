import React from 'react'
import { X, FileText, ShieldAlert, Check } from 'lucide-react'

export const DocumentModal = ({ isOpen, onClose, title, type }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            {type === 'terms' ? (
              <ShieldAlert className="w-5 h-5 text-indigo-400" />
            ) : (
              <FileText className="w-5 h-5 text-indigo-400" />
            )}
            <h2 className="text-base font-bold text-white tracking-tight">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-grow text-slate-300 text-xs leading-relaxed space-y-4">
          {type === 'terms' && (
            <>
              <p>
                <strong className="text-white">1. Purpose & Scope:</strong>
                <br />
                The SAHAAY platform serves as an AI-assisted intake and early-warning decision-support portal for the National Helpline Assessment Authority (NHAA 14566).
              </p>

              <p>
                <strong className="text-white">2. Privacy & Data Minimization:</strong>
                <br />
                All citizen grievance data is encrypted using 256-bit AES via Fernet encryption and stored pseudonymously in compliance with national privacy frameworks.
              </p>

              <p>
                <strong className="text-white">3. AI Decision-Support Boundary:</strong>
                <br />
                Natural Language Processing and acoustic signal features are extracted solely to calculate advisory Stress Vulnerability Index (SVI) metrics for case prioritization. The system never provides automated diagnosis or replaces human judgment.
              </p>

              <p>
                <strong className="text-white">4. Misuse & False Reporting:</strong>
                <br />
                Submitting malicious or intentionally false statements occupies emergency bandwidth and is subject to administrative review under cyber regulations.
              </p>
            </>
          )}

          {type === 'guidelines' && (
            <>
              <p>
                <strong className="text-white">1. Submitting a Statement:</strong>
                <br />
                Citizens may submit grievances by typing in their regional language or using the 'Speak Now' voice recording feature.
              </p>

              <p>
                <strong className="text-white">2. Multilingual Processing:</strong>
                <br />
                The portal automatically identifies linguistic markers and translates regional dialect inputs to assist case officers while preserving original contextual nuances.
              </p>

              <p>
                <strong className="text-white">3. Docket Tracking:</strong>
                <br />
                Upon successful submission, you receive an official Docket Number (e.g. NHAA/2026/05/2841) to monitor review milestones on the public tracking portal.
              </p>

              <p>
                <strong className="text-white">4. Emergency Situations:</strong>
                <br />
                If facing immediate physical danger, do not wait for docket triage. Contact emergency response dispatch directly via 112 or 1091.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2 rounded-xl shadow-md transition-colors flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>I Understand & Agree</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DocumentModal
