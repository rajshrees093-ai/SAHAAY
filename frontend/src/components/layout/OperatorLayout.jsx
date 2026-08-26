import React, { useState, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { AuthContext } from '../../App'
import { ShieldCheck, Info } from 'lucide-react'

export const OperatorLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/login')
  }

  const handleNewCase = () => {
    navigate('/complaint')
  }

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 flex flex-col font-sans relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Ambient background glow orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="fixed top-1/2 right-1/3 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Persistent Left Sidebar */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        user={user}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col flex-1 min-w-0">
        {/* Top Header */}
        <Header
          onMenuClick={() => setIsMobileOpen(true)}
          onNewCaseClick={handleNewCase}
        />

        {/* Page Views Container */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          <Outlet />
        </main>

        {/* Footer Notice */}
        <footer className="py-4 px-6 border-t border-white/5 bg-[#060a17]/80 text-[11px] text-slate-500 text-center backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 justify-center">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>CONFIDENTIAL TRIAGE WORKSTATION · DESIGNED FOR INTEGRATION WITH NHAA 14566 · SIH 2026 PROTOTYPE</span>
          </div>
          <div>
            SAHAAY Decision-Support Engine · Advisory Evaluation System
          </div>
        </footer>
      </div>
    </div>
  )
}

export default OperatorLayout
