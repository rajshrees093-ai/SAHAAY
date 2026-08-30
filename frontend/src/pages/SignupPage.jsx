import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  Phone,
  Briefcase,
  User as UserIcon
} from 'lucide-react'
import { AuthContext } from '../App'
import DocumentModal from '../components/DocumentModal'
import { useLanguage } from '../context/LanguageContext'

export const SignupPage = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)
  const { t } = useLanguage()
  const [signupType, setSignupType] = useState('citizen')
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: '', title: '' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    termsAccepted: false
  })

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const handleSignup = (e) => {
    e.preventDefault()
    if (signupType === 'official') {
      const finalEmail = formData.email.includes('@') ? formData.email : formData.email + '@nhaa.gov.in'
      setUser({ name: formData.name || 'Case Officer', role: 'operator', email: finalEmail })
      navigate('/operator')
    } else {
      setUser({ name: formData.name || 'Citizen User', role: 'user', email: formData.email })
      navigate('/complaint')
    }
  }

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

      <div className="flex-grow flex items-center justify-center p-4 lg:p-8 animate-fade-in text-slate-100 relative">
        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Role Toggle Tabs */}
          <div className="flex w-full bg-slate-950/60 border-b border-white/10">
            <button
              type="button"
              onClick={() => setSignupType('citizen')}
              className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                signupType === 'citizen'
                  ? 'bg-indigo-600/30 text-indigo-300 border-b-2 border-indigo-500 shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span>{t('citizenRegTab')}</span>
            </button>
            <button
              type="button"
              onClick={() => setSignupType('official')}
              className={`flex-1 py-3.5 text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                signupType === 'official'
                  ? 'bg-indigo-600/30 text-indigo-300 border-b-2 border-indigo-500 shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{t('officialRegTab')}</span>
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
              <span>{t('topStripText')}</span>
            </div>
            <h2 className="text-sm font-bold text-slate-400 mt-3">
              {signupType === 'official' ? t('officialRegTitle') : t('newCitizenRegTitle')}
            </h2>
          </div>

          <div className="p-6 lg:p-8 space-y-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  {t('fullNameLabel')}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={signupType === 'official' ? 'Officer Name' : 'As per official ID'}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  {signupType === 'official' ? t('officialIdLabel') : t('emailLabel')}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={signupType === 'official' ? 'officer@nhaa.gov.in' : 'name@example.com'}
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  {t('phoneLabel')}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  {t('passwordLabel')}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>

              <div className="text-xs text-slate-400">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    required
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="h-3.5 w-3.5 rounded border-slate-700 bg-slate-900 text-indigo-600 mt-0.5"
                  />
                  <span>
                    {t('iAgreeTo')}{' '}
                    <a
                      href="#"
                      onClick={(e) => openModal('terms', 'Terms of Service', e)}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                      {t('termsOfService')}
                    </a>{' '}
                    {t('and')}{' '}
                    <a
                      href="#"
                      onClick={(e) => openModal('terms', 'Privacy Policy', e)}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                      {t('privacyPolicy')}
                    </a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold py-3 px-4 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
              >
                <span>{signupType === 'official' ? t('createOfficerAccount') : t('createCitizenAccount')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="pt-4 border-t border-white/10 text-center text-xs text-slate-400">
              {t('alreadyHaveAccount')}{' '}
              <Link
                to={signupType === 'official' ? '/login?tab=official' : '/login?tab=citizen'}
                className="font-bold text-indigo-400 hover:text-indigo-300"
              >
                {t('loginNow')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage
