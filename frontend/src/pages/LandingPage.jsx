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
  Lock,
  Globe,
  Radio,
  FileText,
  BrainCircuit,
  Eye,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Ear,
  Users,
  Compass,
  LifeBuoy
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

  const steps = [
    {
      step: '01',
      title: t('step1Title') || 'LISTEN',
      desc: t('step1Desc') || 'We listen to what you share.',
      icon: Ear,
      color: 'from-indigo-500/20 to-indigo-500/5',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400'
    },
    {
      step: '02',
      title: t('step2Title') || 'UNDERSTAND',
      desc: t('step2Desc') || 'AI understands context and language.',
      icon: BrainCircuit,
      color: 'from-purple-500/20 to-purple-500/5',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400'
    },
    {
      step: '03',
      title: t('step3Title') || 'ASSESS',
      desc: t('step3Desc') || 'AI-assisted assessment of distress-related signals.',
      icon: Activity,
      color: 'from-rose-500/20 to-rose-500/5',
      borderColor: 'border-rose-500/30',
      iconColor: 'text-rose-400'
    },
    {
      step: '04',
      title: t('step4Title') || 'EXPLAIN',
      desc: t('step4Desc') || 'Insights are explained clearly.',
      icon: FileText,
      color: 'from-cyan-500/20 to-cyan-500/5',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400'
    },
    {
      step: '05',
      title: t('step5Title') || 'HUMAN REVIEW',
      desc: t('step5Desc') || 'Authorized personnel review the case.',
      icon: Eye,
      color: 'from-emerald-500/20 to-emerald-500/5',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400'
    },
    {
      step: '06',
      title: t('step6Title') || 'SUPPORT',
      desc: t('step6Desc') || 'The appropriate support and guidance can follow.',
      icon: HeartHandshake,
      color: 'from-teal-500/20 to-teal-500/5',
      borderColor: 'border-teal-500/30',
      iconColor: 'text-teal-400'
    }
  ]

  return (
    <>
      <DocumentModal
        isOpen={modalConfig.isOpen}
        type={modalConfig.type}
        title={modalConfig.title}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
      />

      <div className="flex-grow flex flex-col justify-between animate-fade-in text-slate-100 relative bg-[#070d1e]">
        {/* Ambient Luminous Backdrops */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* ==================================================
            1. HERO SECTION
            ================================================== */}
        <section className="container mx-auto px-4 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-20 max-w-6xl text-center space-y-8">
          {/* Main Title & Tagline Hierarchy */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {/* 1. SAHAAY (Largest text) */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.02] drop-shadow-sm">
              {t('brandName')}
            </h1>

            {/* 2. Tagline (Second most prominent, deep red text) */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-rose-400 sm:text-rose-400 tracking-tight leading-snug">
              {t('tagline')}
            </p>

            {/* 3. Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto pt-1">
              {t('supportingStatement')}
            </p>

            {/* 4. AI Disclaimer Information Bar */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 text-xs font-semibold shadow-inner backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                <span>{t('aiDisclaimer')}</span>
              </div>
            </div>
          </div>

          {/* 5. CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/complaint"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>{t('getSupport')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm px-8 py-4 rounded-2xl border border-white/10 shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>{t('learnHowItWorks')}</span>
            </a>
          </div>

          {/* Subtle AI + Human-Support Illustration Card */}
          <div className="pt-6 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-950/30 via-slate-900/60 to-purple-950/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 shadow-inner">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">AI-Assisted Early Triage</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Analyzing linguistic markers, emotional distress cues, and speech dynamics.
                  </p>
                </div>
              </div>

              <div className="h-px sm:h-12 w-full sm:w-px bg-white/10"></div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-inner">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Human-in-the-Loop Review</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Every case is reviewed and verified by trained authorized personnel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            2. WHAT SAHAAY DOES
            ================================================== */}
        <section id="what-sahaay-does" className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {t('whatSahaayDoes')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t('whatSahaaySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Multilingual Support */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl space-y-3 hover:border-indigo-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{t('card1Title')}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "{t('card1Desc')}"
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-indigo-400">
                Voice & Text Channels
              </div>
            </div>

            {/* Card 2: Early Distress Signals */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl space-y-3 hover:border-rose-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{t('card2Title')}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "{t('card2Desc')}"
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-rose-400">
                NLP & Acoustic Markers
              </div>
            </div>

            {/* Card 3: Dynamic Monitoring */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl space-y-3 hover:border-purple-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{t('card3Title')}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "{t('card3Desc')}"
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-purple-400">
                Longitudinal Assessment
              </div>
            </div>

            {/* Card 4: Human-Centered Support */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl space-y-3 hover:border-emerald-500/40 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{t('card4Title')}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "{t('card4Desc')}"
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-emerald-400">
                Decision-Support Layer
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            3. HOW SAHAAY WORKS (6-STEP VISUAL PROCESS)
            ================================================== */}
        <section id="how-it-works" className="container mx-auto px-4 lg:px-8 py-16 max-w-6xl space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-bold mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Structured Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {t('howSahaayWorks')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {t('howSahaaySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <div
                  key={idx}
                  className={`bg-slate-900/60 backdrop-blur-xl border ${item.borderColor} rounded-2xl p-6 shadow-xl space-y-3 relative hover:scale-[1.02] transition-all group`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} border ${item.borderColor} flex items-center justify-center ${item.iconColor} shadow-inner`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-white tracking-tight pt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ==================================================
            4. PRIVACY SECTION & EMERGENCY BANNER
            ================================================== */}
        <section className="container mx-auto px-4 lg:px-8 py-8 max-w-6xl space-y-6">
          {/* Privacy Banner */}
          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-5 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 shadow-inner">
              <Lock className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-center sm:text-left flex-1">
              <h4 className="text-sm font-bold text-white">{t('privacyTitle')}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                "{t('privacyStatement')}"
              </p>
            </div>
            <a
              href="#"
              onClick={(e) => openModal('terms', 'Privacy Policy & Data Security', e)}
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 whitespace-nowrap"
            >
              Learn more &rarr;
            </a>
          </div>

          {/* Emergency Alert Banner */}
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

        {/* ==================================================
            5. FOOTER
            ================================================== */}
        <footer className="border-t border-white/10 py-10 text-center text-xs text-slate-400 space-y-4 mt-8 bg-[#050914]/90 backdrop-blur-md">
          <div className="space-y-1.5 max-w-xl mx-auto">
            <p className="font-black text-white text-base tracking-tight">{t('brandName')}</p>
            <p className="text-xs text-rose-400 font-semibold">{t('tagline')}</p>
            <p className="text-[11px] text-slate-500 font-medium pt-1">
              {t('integrationNotice')}
            </p>
          </div>

          <div className="flex justify-center gap-4 text-[11px] text-slate-400 pt-2 border-t border-white/5 max-w-md mx-auto">
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
