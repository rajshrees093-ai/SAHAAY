import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  User,
  Mail,
  Shield,
  ShieldCheck,
  Key,
  Lock,
  ArrowRight,
  LogOut,
  Building,
  CheckCircle2
} from 'lucide-react'
import { AuthContext } from '../App'

export const UserProfile = () => {
  const { user, setUser } = useContext(AuthContext)

  return (
    <div className="container mx-auto p-4 lg:p-8 max-w-3xl space-y-6 animate-fade-in text-slate-100">
      {/* Header */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl flex items-center gap-5">
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-black text-2xl shadow-inner">
          {user?.name ? user.name[0] : 'U'}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-black text-white tracking-tight">{user?.name || 'User Profile'}</h1>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 uppercase">
              {user?.role === 'operator' ? 'Official Case Officer' : 'Verified Citizen'}
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono mt-0.5">{user?.email || 'user@example.com'}</p>
        </div>
      </div>

      {/* Profile Details & Credentials */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-xl space-y-6">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Account & Authentication Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
            <span className="text-slate-400 block mb-1">User Identifier</span>
            <span className="font-bold font-mono text-white">NHAA-UID-92841</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
            <span className="text-slate-400 block mb-1">Authorization Scope</span>
            <span className="font-bold text-emerald-400">
              {user?.role === 'operator' ? 'Tier-2 Triage & Audit Access' : 'Complainant Intake Access'}
            </span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
            <span className="text-slate-400 block mb-1">Assigned Division</span>
            <span className="font-bold text-white">Public Grievances & Redressal (14566)</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10">
            <span className="text-slate-400 block mb-1">Security Protocol</span>
            <span className="font-bold text-indigo-300">256-bit AES Token Auth</span>
          </div>
        </div>

        {/* Security Info */}
        <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-200 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block text-white">Confidential Identity Vault</span>
            <p className="text-[11px] text-indigo-300/80 leading-relaxed">
              Your biometric, voice, and personal identifiers are safeguarded in an isolated credential vault in full compliance with national cyber privacy standards.
            </p>
          </div>
        </div>

        {/* Navigation Shortcut Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <Link
            to={user?.role === 'operator' ? '/operator' : '/dashboard'}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-colors"
          >
            {user?.role === 'operator' ? 'Return to Operator Dashboard' : 'Return to Citizen Portal'}
          </Link>

          <button
            onClick={() => setUser(null)}
            className="text-slate-400 hover:text-rose-400 text-xs font-bold transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Session</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
