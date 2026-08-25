import React, { useState } from 'react'
import { AlertTriangle, ShieldCheck, X, Check } from 'lucide-react'

export const OverrideModal = ({
  isOpen,
  onClose,
  caseId = 'NHAA-2841',
  currentRisk = 'CRITICAL',
  onConfirmOverride
}) => {
  const [selectedRisk, setSelectedRisk] = useState('HIGH')
  const [reasonCategory, setReasonCategory] = useState('Victim Provided Additional Context')
  const [justificationNotes, setJustificationNotes] = useState('')
  const [officerConsent, setOfficerConsent] = useState(false)

  if (!isOpen) return null

  const handleSave = (e) => {
    e.preventDefault()
    if (!officerConsent || !justificationNotes.trim()) return

    onConfirmOverride({
      caseId,
      originalRisk: currentRisk,
      overriddenRisk: selectedRisk,
      reasonCategory,
      justificationNotes,
      timestamp: new Date().toISOString()
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Manual Assessment Override</h3>
              <p className="text-xs text-slate-400">
                Case ID: <span className="font-mono text-indigo-400 font-bold">{caseId}</span> · Current: {currentRisk}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSave} className="p-6 space-y-4 overflow-y-auto text-xs text-slate-300">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Select Overridden Risk Classification
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['LOW', 'MODERATE', 'HIGH', 'CRITICAL'].map((lvl) => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setSelectedRisk(lvl)}
                  className={`py-2 px-2 rounded-xl border text-xs font-bold transition-all ${
                    selectedRisk === lvl
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Primary Justification Category
            </label>
            <select
              value={reasonCategory}
              onChange={(e) => setReasonCategory(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Victim Provided Additional Context">Victim Provided Additional Context</option>
              <option value="Acoustic Noise Artifact Detected">Acoustic Noise / Distortion Artifact</option>
              <option value="Safe Shelter Confirmed In Person">Safe Shelter Confirmed In Person</option>
              <option value="Immediate Physical Intervention Active">Immediate Physical Intervention Active</option>
              <option value="Other Human Officer Discretion">Other Human Officer Discretion</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Written Officer Rationale (Mandatory for Audit Logs)
            </label>
            <textarea
              required
              rows={3}
              value={justificationNotes}
              onChange={(e) => setJustificationNotes(e.target.value)}
              placeholder="Explain why the AI-computed SVI score is modified..."
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={officerConsent}
                onChange={(e) => setOfficerConsent(e.target.checked)}
                className="h-4 w-4 mt-0.5 rounded border-slate-600 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-[11px] text-slate-400 leading-tight">
                I certify that this override was determined following direct evaluation and complies with NHAA 14566 human accountability guidelines.
              </span>
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!officerConsent || !justificationNotes.trim()}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-md transition-colors flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Confirm & Log Override</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OverrideModal
