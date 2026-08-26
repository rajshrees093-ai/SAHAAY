import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Search,
  Bell,
  Globe,
  PlusCircle,
  Menu,
  Clock,
  Calendar,
  AlertTriangle,
  User,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'

import { useLanguage } from '../../context/LanguageContext'

export const Header = ({ onMenuClick, onNewCaseClick }) => {
  const navigate = useNavigate()
  const { language, setLanguage } = useLanguage()
  const [currentDateTime, setCurrentDateTime] = useState('')
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentDateTime(
        now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/operator/cases?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-30 h-16 bg-[#070e20]/80 backdrop-blur-xl border-b border-white/10 px-4 lg:px-8 flex items-center justify-between gap-4">
      {/* Left: Mobile Menu & Search Bar */}
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by case ID, docket number, phone, name..."
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
        </form>
      </div>

      {/* Right: Date/Time, Language, Notifications, + New Case */}
      <div className="flex items-center gap-3 lg:gap-4">
        {/* Date & Time Widget */}
        <div className="hidden xl:flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 border border-white/10 px-3 py-1.5 rounded-xl backdrop-blur-md">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-mono">{currentDateTime}</span>
        </div>

        {/* Multilingual Switcher */}
        <div className="hidden sm:flex items-center gap-1.5 bg-slate-900/60 border border-white/10 px-2.5 py-1.5 rounded-xl text-xs text-slate-300">
          <Globe className="w-3.5 h-3.5 text-indigo-400" />
          <select
            className="bg-transparent text-xs text-white font-bold focus:outline-none cursor-pointer"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en" className="bg-slate-900 text-white">English (EN)</option>
            <option value="hi" className="bg-slate-900 text-white">हिन्दी (HI)</option>
            <option value="hinglish" className="bg-slate-900 text-white">Hinglish (हिन्दी+EN)</option>
            <option value="mr" className="bg-slate-900 text-white">मराठी (MR)</option>
            <option value="ta" className="bg-slate-900 text-white">தமிழ் (TA)</option>
            <option value="bn" className="bg-slate-900 text-white">বাংলা (BN)</option>
            <option value="te" className="bg-slate-900 text-white">తెలుగు (TE)</option>
          </select>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors border border-white/5"
            title="Immediate Alerts"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-[#070e20] shadow-[0_0_8px_#f43f5e]"></span>
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-4 z-50 animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Priority Triage Alerts</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
                  3 New
                </span>
              </div>
              <div className="py-2 space-y-2.5">
                <Link
                  to="/operator?caseId=NHAA-2841"
                  onClick={() => setNotificationsOpen(false)}
                  className="p-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 flex items-start gap-2.5 transition-colors block"
                >
                  <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-rose-300">Immediate Threat Detected</p>
                    <p className="text-rose-400 text-[11px] mt-0.5">NHAA-2841: SVI 91/100 requiring instant verification.</p>
                  </div>
                </Link>

                <Link
                  to="/operator?caseId=NHAA-2819"
                  onClick={() => setNotificationsOpen(false)}
                  className="p-2.5 rounded-xl bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 flex items-start gap-2.5 transition-colors block"
                >
                  <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-bold text-orange-300">High Risk Case Escalated</p>
                    <p className="text-orange-400 text-[11px] mt-0.5">NHAA-2819: Ongoing harassment signal confirmed.</p>
                  </div>
                </Link>
              </div>
              <div className="pt-2 border-t border-white/10 text-center">
                <Link
                  to="/operator/alerts"
                  onClick={() => setNotificationsOpen(false)}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300"
                >
                  View All 18 Alerts &rarr;
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* + New Case Button */}
        <button
          onClick={onNewCaseClick}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center gap-1.5"
        >
          <PlusCircle className="w-4 h-4" />
          <span className="hidden sm:inline">+ New Case</span>
          <span className="sm:hidden">New</span>
        </button>
      </div>
    </header>
  )
}

export default Header
