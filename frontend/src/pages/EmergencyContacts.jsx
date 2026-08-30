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
import { useLanguage } from '../context/LanguageContext'

export const EmergencyContacts = () => {
  const { t } = useLanguage()

  const helplines = [
    {
      title: t('emergency112Title'),
      number: '112',
      category: t('emergency112Cat'),
      desc: t('emergency112Desc'),
      color: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      badge: t('emergency112Badge')
    },
    {
      title: t('emergency1091Title'),
      number: '1091',
      category: t('emergency1091Cat'),
      desc: t('emergency1091Desc'),
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      badge: t('emergency1091Badge')
    },
    {
      title: t('emergency14566Title'),
      number: '14566',
      category: t('emergency14566Cat'),
      desc: t('emergency14566Desc'),
      color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      badge: t('emergency14566Badge')
    },
    {
      title: t('emergency1930Title'),
      number: '1930',
      category: t('emergency1930Cat'),
      desc: t('emergency1930Desc'),
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      badge: t('emergency1930Badge')
    },
    {
      title: t('emergency14416Title'),
      number: '14416',
      category: t('emergency14416Cat'),
      desc: t('emergency14416Desc'),
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      badge: t('emergency14416Badge')
    },
    {
      title: t('emergency15100Title'),
      number: '15100',
      category: t('emergency15100Cat'),
      desc: t('emergency15100Desc'),
      color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      badge: t('emergency15100Badge')
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
          {t('emergencyTitle')}
        </h1>
        <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
          {t('emergencySubtitle')}
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
                <span>{t('callNow')}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmergencyContacts
