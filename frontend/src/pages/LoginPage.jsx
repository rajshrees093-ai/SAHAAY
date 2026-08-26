import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import {
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  User,
  Briefcase,
  AlertCircle,
  Building,
  Key
} from 'lucide-react'
import { AuthContext } from '../App'
import { useLanguage } from '../context/LanguageContext'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const { t } = useLanguage()
  const initialTab = searchParams.get('tab') || 'citizen'
  const [loginType, setLoginType] = useState(initialTab) // 'citizen' or 'official'
  const [email, setEmail] = useState(initialTab === 'official' ? 'officer@nhaa.gov.in' : 'citizen@demo.in')
  const [password, setPassword] = useState('password123')
  const [error, setError] = useState('')
  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab === 'official' || tab === 'citizen') {
      setLoginType(tab)
      setEmail(tab === 'official' ? 'officer@nhaa.gov.in' : 'citizen@demo.in')
    }
  }, [searchParams])

  const handleTabChange = (type) => {
    setLoginType(type)
    setError('')
    if (type === 'official') {
      setEmail('officer@nhaa.gov.in')
      setPassword('password123')
    } else {
      setEmail('citizen@demo.in')
      setPassword('password123')
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')

    if (loginType === 'official') {
      if (!email.toLowerCase().includes('@nhaa.gov.in') && !email.toLowerCase().includes('officer')) {
        setError('Official logins require an authorized @nhaa.gov.in email domain.')
        return
      }
      setUser({ name: 'Case Officer Sharma', role: 'operator', email })
      const redirectPath = location.state?.from?.pathname || '/operator'
      navigate(redirectPath)
    } else {
      setUser({ name: 'Citizen Demo User', role: 'user', email })
      const redirectPath = location.state?.from?.pathname || '/complaint'
      navigate(redirectPath)
    }
  }

  const handleQuickDemoSSO = () => {
    if (loginType === 'official') {
      setUser({ name: 'Case Officer Sharma', role: 'operator', email: 'officer@nhaa.gov.in' })
      const redirectPath = location.state?.from?.pathname || '/operator'
      navigate(redirectPath)
    } else {
      setUser({ name: 'Citizen Demo User', role: 'user', email: 'citizen@demo.in' })
      const redirectPath = location.state?.from?.pathname || '/complaint'
      navigate(redirectPath)
    }
  }

  return (
    <div className="flex-grow flex items-center justify-center p-4 lg:p-8 animate-fade-in text-slate-100 relative">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Role Toggle Tabs */}
        <div className="flex w-full bg-slate-950/60 border-b border-white/10">
          <button
            type="button"
            onClick={() => handleTabChange('citizen')}
            className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              loginType === 'citizen'
                ? 'bg-indigo-600/30 text-indigo-300 border-b-2 border-indigo-500 shadow-inner'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-4 h-4" />
            <span>CITIZEN ACCESS</span>
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('official')}
            className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              loginType === 'official'
                ? 'bg-indigo-600/30 text-indigo-300 border-b-2 border-indigo-500 shadow-inner'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>OFFICIAL ACCESS</span>
          </button>
        </div>

        {/* Card Header */}
        <div className="p-6 text-center border-b border-white/5 bg-slate-950/30">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-3 shadow-inner">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            {t('brandName')}
          </h1>
          <p className="text-xs font-semibold text-slate-200 mt-1">
            {t('subtitleShort')}
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[11px] font-medium mt-2">
            <span>NHAA 14566 Integrated Portal · SIH 2026 Prototype</span>
          </div>
          <h2 className="text-sm font-bold text-slate-400 mt-3">
            {loginType === 'official' ? 'Official Case Officer Portal' : 'Citizen Grievance Login'}
          </h2>
        </div>

        <div className="p-6 lg:p-8 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {loginType === 'official' ? 'Official Government ID / Email' : 'Email Address'}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={loginType === 'official' ? 'officer@nhaa.gov.in' : 'name@example.com'}
                  className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-400">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-indigo-600"
                />
                <span>Remember session</span>
              </label>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              <span>{loginType === 'official' ? 'Authenticate Officer Session' : 'Sign In as Citizen'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo One-Click Login */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleQuickDemoSSO}
              className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Key className="w-3.5 h-3.5 text-indigo-400" />
              <span>Login with Demo SSO (1-Click)</span>
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 text-center text-xs text-slate-400">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-indigo-400 hover:text-indigo-300">
              Register now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
