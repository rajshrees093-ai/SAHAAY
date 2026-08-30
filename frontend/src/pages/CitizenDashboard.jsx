import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Mic,
  MessageSquare,
  Search,
  BookOpen,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  FileText,
  User,
  HeartHandshake
} from 'lucide-react'
import { AuthContext } from '../App'
import DocumentModal from '../components/DocumentModal'
import { useLanguage } from '../context/LanguageContext'

export const CitizenDashboard = () => {
  const { user } = useContext(AuthContext)
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: '', title: '' })

  const openModal = (type, title) => {
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

      <div className="container mx-auto p-4 lg:p-8 max-w-5xl space-y-8 animate-fade-in text-slate-100">
        {/* Welcome Header */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white tracking-tight">{t('brandName')}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {t('victimSubtitle')}
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight pt-1">
              {t('welcome')}
            </h1>
            <p className="text-xs text-slate-300">
              {t('dashboardSub')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/complaint"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center gap-2"
            >
              <Mic className="w-4 h-4" />
              <span>{t('fileGrievance')}</span>
            </Link>
          </div>
        </div>

        {/* 4 Main Core Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Register Grievance */}
          <div
            onClick={() => navigate('/complaint')}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t('dashCard1Title')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('dashCard1Desc')}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
              <span>{t('fileGrievance')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Track Complaint */}
          <div
            onClick={() => navigate('/track')}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t('dashCard2Title')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('dashCard2Desc')}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
              <span>{t('trackStatus')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: My Legal Rights */}
          <div
            onClick={() => openModal('guidelines', t('legalModalTitle'))}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t('dashCard3Title')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('dashCard3Desc')}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
              <span>{t('dashCard3Title')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Emergency Contacts */}
          <div
            onClick={() => navigate('/emergency')}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-rose-500/40 hover:bg-slate-800/60 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{t('dashCard4Title')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t('dashCard4Desc')}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-1 text-xs font-bold text-rose-400 group-hover:text-rose-300">
              <span>{t('emergency')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CitizenDashboard
