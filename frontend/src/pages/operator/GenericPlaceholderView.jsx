import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'

export const GenericPlaceholderView = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-xl text-center max-w-xl mx-auto space-y-4 animate-fade-in text-slate-100">
      {Icon && (
        <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto shadow-inner">
          <Icon className="w-8 h-8" />
        </div>
      )}
      <h2 className="text-xl font-black text-white tracking-tight">{title}</h2>
      <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">{description}</p>

      <div className="pt-4 flex justify-center">
        <Link
          to="/operator"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </Link>
      </div>
    </div>
  )
}

export default GenericPlaceholderView
