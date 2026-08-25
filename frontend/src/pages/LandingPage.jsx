import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mic,
  MessageSquare,
  ShieldCheck,
  Activity,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Phone,
  FileCheck,
  Lock,
  Globe,
  Radio,
  FileText
} from 'lucide-react'
import DocumentModal from '../components/DocumentModal'
import { useLanguage } from '../context/LanguageContext'

export const LandingPage = () => {
  const { t } = useLanguage()
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: '', title: '' })

  const openModal = (type, title, e) => {
    e.preventDefault()
    setModalConfig({ isOpen: true, type, title })
  }

  return (
    <>
      <DocumentModal
        isOpen={modalConfig.isOpen}
        type={modalConfig.type}
        title={modalConfig.title}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
      />

      <div className="flex-grow flex flex-col justify-between animate-fade-in text-slate-100 relative">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 max-w-6xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.25)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{t('heroBadge')}</span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {t('heroTitle')}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              {t('heroDesc')}
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/complaint"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.45)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
            >
              <Mic className="w-5 h-5 text-indigo-200 animate-pulse" />
              <span>{t('speakNow')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/track"
              className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm px-8 py-4 rounded-2xl border border-white/10 shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{t('trackComplaint')}</span>
            </Link>
          </div>

          {/* Trust & Encryption Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              <span>{t('encryptionBadge')}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('humanOversight')}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full backdrop-blur-md">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t('regionalDialects')}</span>
            </div>
          </div>
        </section>

        {/* 3 Core Pillars (Dark Glassmorphic Cards) */}
        <section className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl space-y-3 hover:border-indigo-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">{t('pillar1Title')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('pillar1Desc')}
              </p>
              <Link to="/complaint" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 pt-1">
                <span>{t('pillar1Link')}</span> &rarr;
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl space-y-3 hover:border-indigo-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">{t('pillar2Title')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('pillar2Desc')}
              </p>
              <a
                href="#"
                onClick={(e) => openModal('guidelines', 'Official Grievance Guidelines', e)}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 pt-1"
              >
                <span>{t('pillar2Link')}</span> &rarr;
              </a>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl space-y-3 hover:border-indigo-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">{t('pillar3Title')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('pillar3Desc')}
              </p>
              <a
                href="#"
                onClick={(e) => openModal('terms', 'Privacy Charter & Data Protection', e)}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 pt-1"
              >
                <span>{t('pillar3Link')}</span> &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Notice Banner */}
        <section className="container mx-auto px-4 lg:px-8 py-6 max-w-6xl">
          <div className="bg-gradient-to-r from-rose-950/40 via-slate-900/80 to-slate-900/80 backdrop-blur-xl border border-rose-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 flex-shrink-0 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                <Phone className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">{t('dangerTitle')}</h4>
                <p className="text-xs text-rose-300 mt-0.5">
                  {t('dangerDesc')}
                </p>
              </div>
            </div>

            <Link
              to="/emergency"
              className="bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all whitespace-nowrap"
            >
              {t('emergencyDir')} &rarr;
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-6 text-center text-xs text-slate-400 space-y-2 mt-8 bg-[#050914]/80 backdrop-blur-md">
          <p>© 2026 National Helpline Assessment Authority (NHAA 14566). SAHAAY AI Platform.</p>
          <div className="flex justify-center gap-4 text-[11px] text-slate-400">
            <a
              href="#"
              onClick={(e) => openModal('terms', 'Terms of Service', e)}
              className="hover:text-white transition"
            >
              Terms of Service
            </a>
            <span>•</span>
            <a
              href="#"
              onClick={(e) => openModal('terms', 'Privacy Policy', e)}
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#"
              onClick={(e) => openModal('guidelines', 'Citizen Guidelines', e)}
              className="hover:text-white transition"
            >
              Citizen Guidelines
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default LandingPage
