import React, { useState, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import LandingPage from './pages/LandingPage'
import ComplaintInteraction from './pages/ComplaintInteraction'
import CitizenDashboard from './pages/CitizenDashboard'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProblemStatement from './pages/ProblemStatement'
import TrackStatus from './pages/TrackStatus'
import EmergencyContacts from './pages/EmergencyContacts'
import UserProfile from './pages/UserProfile'

// Operator Layout & Views
import OperatorLayout from './components/layout/OperatorLayout'
import DashboardOverview from './pages/operator/DashboardOverview'
import CaseQueue from './pages/operator/CaseQueue'
import AlertsView from './pages/operator/AlertsView'
import FollowUpsView from './pages/operator/FollowUpsView'
import AnalyticsView from './pages/operator/AnalyticsView'
import ReportsView from './pages/operator/ReportsView'
import ResourcesView from './pages/operator/ResourcesView'
import GenericPlaceholderView from './pages/operator/GenericPlaceholderView'

import {
  ShieldAlert,
  LogOut,
  User as UserIcon,
  HeartHandshake,
  MessageSquare,
  Calendar,
  Users,
  Settings,
  Globe,
  Phone,
  Search,
  ExternalLink,
  Menu,
  X
} from 'lucide-react'

export const AuthContext = createContext(null)

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  if (!user) {
    const tab = allowedRole === 'operator' ? 'official' : 'citizen'
    return <Navigate to={`/login?tab=${tab}`} state={{ from: location }} replace />
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to={user.role === 'operator' ? '/operator' : '/dashboard'} replace />
  }

  return children
}

// Public Navigation Bar for Citizen / Public Pages (Dark Blue Glassmorphic)
const PublicNavbar = ({ user, handleLogout }) => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  // Do not render public navbar inside the operator dashboard layout
  if (location.pathname.startsWith('/operator')) {
    return null
  }

  return (
    <>
      {/* Top Utility Strip */}
      <div className="bg-[#050914] text-slate-400 text-[11px] py-1.5 px-4 lg:px-8 border-b border-white/5 flex justify-between items-center">
        <div className="container mx-auto flex justify-between max-w-7xl">
          <div className="flex items-center gap-2 font-semibold tracking-wider text-slate-300">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>{t('topStripText')}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#main-content" className="hover:text-white transition hidden sm:inline">{t('skip')}</a>
            <span className="hidden sm:inline">|</span>
            <Link to="/login?tab=official" className="text-slate-400 hover:text-indigo-300 transition">
              {t('officerLogin')}
            </Link>
            <span>|</span>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2 py-0.5 rounded-lg">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <select
                className="bg-transparent text-white font-bold focus:outline-none cursor-pointer text-xs"
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
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav className="bg-[#070e20]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40 shadow-2xl">
        <div className="container mx-auto flex justify-between items-center max-w-7xl px-4 lg:px-8 py-3.5">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] flex-shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white">{t('brandName')}</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-tight">
                {t('tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-semibold">
            {location.pathname === '/' ? (
              <>
                <a href="#what-sahaay-does" className="text-slate-300 hover:text-white transition-colors">
                  {t('navAbout')}
                </a>
                <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
                  {t('navHowItWorks')}
                </a>
                <Link to="/complaint" className="text-slate-300 hover:text-white transition-colors">
                  {t('navForVictims')}
                </Link>
                <Link to="/login?tab=official" className="text-slate-300 hover:text-white transition-colors">
                  {t('navForOperators')}
                </Link>
                <Link to="/emergency" className="text-slate-300 hover:text-white transition-colors">
                  {t('navResources')}
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  {t('home')}
                </Link>
                <Link to="/complaint" className="text-indigo-300 hover:text-indigo-200 transition-colors">
                  {t('fileGrievance')}
                </Link>
                <Link to="/track" className="text-slate-300 hover:text-white transition-colors">
                  {t('trackStatus')}
                </Link>
                <Link to="/emergency" className="text-rose-400 hover:text-rose-300 transition-colors">
                  {t('emergency')}
                </Link>
                <Link
                  to="/problem"
                  className="text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl transition-colors border border-white/10"
                >
                  {t('pitchDeck')}
                </Link>
              </>
            )}

            {user?.role === 'user' && (
              <Link to="/dashboard" className="text-indigo-400 hover:text-indigo-300 transition-colors font-bold">
                {t('citizenPortal')}
              </Link>
            )}

            {user?.role === 'operator' && (
              <Link
                to="/operator"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3.5 py-2 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center gap-1.5"
              >
                <span>{t('officerConsole')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            )}

            {/* Right side CTA Button & Auth */}
            <div className="flex items-center gap-3 border-l border-white/10 pl-4">
              <Link
                to="/complaint"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
              >
                {t('getSupport')}
              </Link>

              {!user ? (
                <Link
                  to="/login?tab=citizen"
                  className="text-slate-300 hover:text-white font-bold px-2.5 py-1.5 rounded-lg text-xs transition-colors"
                >
                  {t('citizenLogin')}
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/profile"
                    className="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-full text-slate-300 border border-white/10 transition-colors text-[11px]"
                  >
                    <UserIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-1 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                    title={t('signOut')}
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/complaint"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-3 py-1.5 rounded-xl text-xs shadow-md transition-all"
            >
              <span>{t('getSupport')}</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors border border-white/5"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#070e20]/95 backdrop-blur-2xl px-4 py-4 space-y-3 animate-fade-in text-xs font-semibold">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#what-sahaay-does"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 text-center"
              >
                {t('navAbout')}
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 text-center"
              >
                {t('navHowItWorks')}
              </a>
              <Link
                to="/complaint"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 text-center"
              >
                {t('navForVictims')}
              </Link>
              <Link
                to="/login?tab=official"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 text-center"
              >
                {t('navForOperators')}
              </Link>
              <Link
                to="/emergency"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-rose-500/15 text-rose-300 hover:bg-rose-500/25 col-span-2 text-center"
              >
                {t('navResources')}
              </Link>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              {!user ? (
                <div className="flex items-center gap-2 w-full">
                  <Link
                    to="/login?tab=citizen"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 text-center py-2 rounded-xl bg-white/5 text-slate-200"
                  >
                    Citizen Login
                  </Link>
                  <Link
                    to="/login?tab=official"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 text-center py-2 rounded-xl bg-indigo-600 text-white"
                  >
                    Officer Login
                  </Link>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full">
                  <Link
                    to="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 text-slate-200"
                  >
                    <UserIcon className="w-4 h-4 text-indigo-400" />
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout()
                      setMobileMenuOpen(false)
                    }}
                    className="text-rose-400 font-bold text-xs"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

function App() {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <LanguageProvider>
      <AuthContext.Provider value={{ user, setUser }}>
        <Router>
          <div className="min-h-screen flex flex-col font-sans bg-[#070d1e] text-slate-100 relative selection:bg-indigo-500 selection:text-white">
            {/* Ambient Glows */}
            <div className="fixed top-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
            <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <PublicNavbar user={user} handleLogout={handleLogout} />

            <main id="main-content" className="flex-grow flex flex-col">
              <Routes>
                {/* Public & Citizen Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/problem" element={<ProblemStatement />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
                <Route path="/track" element={<TrackStatus />} />
                <Route path="/emergency" element={<EmergencyContacts />} />
                <Route path="/dashboard" element={<ProtectedRoute><CitizenDashboard /></ProtectedRoute>} />
                <Route path="/complaint" element={<ProtectedRoute><ComplaintInteraction /></ProtectedRoute>} />

                {/* Operator Portal Routes with Persistent Layout */}
                <Route
                  path="/operator"
                  element={
                    <ProtectedRoute allowedRole="operator">
                      <OperatorLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<DashboardOverview />} />
                  <Route path="cases" element={<CaseQueue />} />
                  <Route path="alerts" element={<AlertsView />} />
                  <Route path="followups" element={<FollowUpsView />} />
                  <Route path="analytics" element={<AnalyticsView />} />
                  <Route path="reports" element={<ReportsView />} />
                  <Route path="resources" element={<ResourcesView />} />
                  <Route
                    path="messages"
                    element={
                      <GenericPlaceholderView
                        title="Secure Officer Messaging Channel"
                        description="End-to-end encrypted peer consultation and supervisor escalation channel."
                        icon={MessageSquare}
                      />
                    }
                  />
                  <Route
                    path="calendar"
                    element={
                      <GenericPlaceholderView
                        title="Duty Shifts & Case Hearing Calendar"
                        description="Shift schedules, scheduled follow-up timings, and court deposition dates."
                        icon={Calendar}
                      />
                    }
                  />
                  <Route
                    path="users"
                    element={
                      <GenericPlaceholderView
                        title="Officer & Role Access Control"
                        description="Role assignments, badge authorizations, and duty logs."
                        icon={Users}
                      />
                    }
                  />
                  <Route
                    path="settings"
                    element={
                      <GenericPlaceholderView
                        title="Triage Engine & System Settings"
                        description="SVI risk thresholds, multilingual NLP model settings, and audit retention policies."
                        icon={Settings}
                      />
                    }
                  />
                </Route>
              </Routes>
            </main>
          </div>
        </Router>
      </AuthContext.Provider>
    </LanguageProvider>
  )
}

export default App
