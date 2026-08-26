import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldAlert,
  UserCircle,
  AlertTriangle,
  Headphones,
  HelpCircle,
  Activity,
  BrainCircuit,
  ArrowLeft,
  CheckCircle2,
  ExternalLink
} from 'lucide-react'

import { useLanguage } from '../context/LanguageContext'

export const ProblemStatement = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#070d1e] font-sans text-slate-100 flex flex-col animate-fade-in relative">
      {/* Header */}
      <div className="bg-slate-900/60 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-indigo-400 font-bold text-xs hover:text-indigo-300">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <div className="font-bold text-xs text-slate-400 uppercase tracking-widest">
          {t('portalFullName')} Pitch Presentation
        </div>
        <div className="w-8"></div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-bold mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Problem Formulation & Solution Architecture</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Bridging Emotional Distress & Operational Triage
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl">
            How AI assists authorized case officers in detecting hidden, escalating distress early — without ever replacing human judgment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* The Complainant's Reality Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 relative overflow-hidden shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 shadow-inner">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">The Complainant's Reality</h2>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                In critical distress, victims experience emotional turbulence that impairs linear communication:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-white">Acute Fear & Panic:</strong> Fragmented statements and hesitated speech.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-white">Gradual Escalation:</strong> Subtle communication pattern shifts over days.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></span>
                  <span><strong className="text-white">Linguistic Variance:</strong> Regional dialects and emotional phrasing.</span>
                </li>
              </ul>
            </div>

            {/* The Operator's Challenge Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 shadow-inner">
                <Headphones className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">The Officer's Challenge</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Case officers must evaluate subjective distress signals under high volume. Without automated decision-support, critical longitudinal trends can be missed until a crisis has already escalated.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Key Question Card */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/80 rounded-2xl p-8 border border-white/10 text-white flex flex-col justify-center text-center shadow-2xl">
              <HelpCircle className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-2">
                Core Design Principle
              </span>
              <h2 className="text-xl md:text-2xl font-black leading-snug">
                “Can AI assist human case officers without replacing human judgment?”
              </h2>
            </div>

            {/* Solution Framework Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6 space-y-3 text-xs shadow-xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                The {t('brandName')} Solution Framework
              </h3>
              <p className="text-slate-300 leading-relaxed">
                A consent-based, human-in-the-loop early-warning system combining multilingual text NLP, optional voice acoustic extraction, and longitudinal trend detection into an explainable <strong className="text-white">Stress Vulnerability Index (SVI)</strong>.
              </p>
              <div className="pt-2 flex justify-end">
                <Link
                  to="/operator"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center gap-1.5"
                >
                  <span>Explore Live Officer Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProblemStatement
