import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Search,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  Building2,
  Calendar,
  AlertCircle,
  Sparkles
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export const TrackStatus = () => {
  const { t } = useLanguage()
  const [searchParams] = useSearchParams()
  const [token, setToken] = useState('')
  const [result, setResult] = useState(null)
  const [searched, setSearched] = useState(false)

  const performTracking = (docketId) => {
    setSearched(true)
    const cleanId = (docketId || token).trim().toUpperCase()
    if (cleanId) {
      setToken(cleanId)
      setResult({
        docket: cleanId,
        intakeDate: 'Today, 10:14 AM',
        status: 'Under Review by Authorized Officer',
        currentStep: 3,
        assignedDepartment: 'NHAA Public Grievance Redressal Division',
        estimatedResolution: 'Within 24 Hours'
      })
    }
  }

  useEffect(() => {
    const param = searchParams.get('docket')
    if (param) {
      performTracking(param)
    }
  }, [searchParams])

  const handleTrack = (e) => {
    e.preventDefault()
    performTracking(token)
  }

  const steps = [
    { title: 'Registered', desc: 'Complaint logged in secure database' },
    { title: 'AI Assessment', desc: 'Linguistic & signal feature extraction complete' },
    { title: 'Under Review', desc: 'Assigned to authorized officer for human evaluation' },
    { title: 'Follow-up Scheduled', desc: 'Citizen contact and wellness verification' },
    { title: 'Resolved', desc: 'Case redressal closed and documented' }
  ]

  return (
    <div className="container mx-auto p-4 lg:p-8 max-w-3xl space-y-8 animate-fade-in text-slate-100">
      {/* Header */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl text-center">
        <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-4 shadow-inner">
          <Search className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-black text-white tracking-tight">{t('trackTitle')}</h1>
        <p className="text-xs text-slate-300 font-medium mt-1 max-w-md mx-auto leading-relaxed">
          {t('trackDesc')}
        </p>

        <form onSubmit={handleTrack} className="flex gap-2 max-w-md mx-auto mt-6">
          <input
            type="text"
            required
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder={t('trackPlaceholder')}
            className="flex-grow bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs font-semibold text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 font-mono"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all"
          >
            {t('trackButton')}
          </button>
        </form>

        {/* Quick Demo Dockets */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
          <span>{t('quickDockets')}</span>
          <button
            type="button"
            onClick={() => performTracking('NHAA/2026/05/2841')}
            className="font-mono text-indigo-300 hover:text-white bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-bold transition-colors"
          >
            NHAA/2026/05/2841
          </button>
          <button
            type="button"
            onClick={() => performTracking('NHAA/2026/05/2819')}
            className="font-mono text-indigo-300 hover:text-white bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-bold transition-colors"
          >
            NHAA/2026/05/2819
          </button>
        </div>
      </div>

      {/* Result Card with Stepper */}
      {result && (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl space-y-6 animate-fade-in">
          {/* Summary Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Docket Tracking Record
              </span>
              <h3 className="text-xl font-black text-white font-mono tracking-wide mt-0.5">
                {result.docket}
              </h3>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {result.status}
            </span>
          </div>

          {/* Stepper Progression */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Investigation & Review Milestones
            </h4>
            <div className="space-y-3">
              {steps.map((s, idx) => {
                const stepNum = idx + 1
                const isCompleted = stepNum < result.currentStep
                const isCurrent = stepNum === result.currentStep
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-indigo-950/40 border-indigo-500/50 shadow-md ring-1 ring-indigo-500/30'
                        : isCompleted
                        ? 'bg-slate-950/60 border-white/5 opacity-80'
                        : 'bg-slate-950/30 border-white/5 opacity-40'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                          : isCurrent
                          ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(99,102,241,0.4)] animate-pulse'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : stepNum}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{s.title}</span>
                        {isCurrent && (
                          <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            Current Stage
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Privacy Note */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 text-xs text-slate-400 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-400 flex-shrink-0" />
            <p className="leading-relaxed">
              Your grievance details are strictly pseudonymized and encrypted. Case notes and internal classifications remain protected under NHAA privacy rules.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default TrackStatus
