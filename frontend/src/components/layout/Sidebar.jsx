import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  FolderKanban,
  BellRing,
  History,
  ChartPie,
  FileText,
  LifeBuoy,
  MessageSquare,
  Calendar,
  Users,
  Settings,
  LogOut,
  ShieldAlert,
  ChevronRight,
  UserCheck,
  Radio,
  ExternalLink
} from 'lucide-react'

export const Sidebar = ({ isMobileOpen, setIsMobileOpen, user, onLogout }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { label: 'Dashboard', path: '/operator', icon: LayoutDashboard },
    { label: 'Cases', path: '/operator/cases', icon: FolderKanban, badge: '1,248' },
    { label: 'Alerts', path: '/operator/alerts', icon: BellRing, badge: '18', badgeColor: 'bg-rose-500 text-white shadow-[0_0_10px_#f43f5e]' },
    { label: 'Follow-ups', path: '/operator/followups', icon: History, badge: '7' },
    { label: 'Analytics', path: '/operator/analytics', icon: ChartPie },
    { label: 'Reports', path: '/operator/reports', icon: FileText },
    { label: 'Support Resources', path: '/operator/resources', icon: LifeBuoy },
    { label: 'Messages', path: '/operator/messages', icon: MessageSquare },
    { label: 'Calendar', path: '/operator/calendar', icon: Calendar },
    { label: 'Users', path: '/operator/users', icon: Users },
    { label: 'Settings', path: '/operator/settings', icon: Settings }
  ]

  const isActive = (path) => {
    if (path === '/operator') {
      return location.pathname === '/operator' || location.pathname === '/operator/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Main Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#070e20]/90 backdrop-blur-2xl border-r border-white/10 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div>
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-tight text-white">SAHAAY</span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    14566
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium tracking-tight">
                  Officer Triage Network
                </span>
              </div>
            </Link>
          </div>

          {/* System Status Banner */}
          <div className="px-4 py-3 border-b border-white/5 bg-slate-900/40">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-slate-300 font-bold text-[11px]">Triage Engine Active</span>
              </div>
              <span className="text-[10px] text-indigo-400 font-mono font-bold bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                v2.6 Live
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 group ${
                    active
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)] font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${active ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono ${
                        item.badgeColor || (active ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300')
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer: User Profile & Citizen Switcher */}
        <div className="p-3 border-t border-white/10 bg-slate-950/60 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-bold transition-all"
          >
            <span>Switch to Citizen View</span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
          </Link>

          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 border border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
                {user?.name ? user.name[0] : 'O'}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white truncate max-w-[110px]">
                  {user?.name || 'Case Officer'}
                </span>
                <span className="text-[10px] text-slate-400">On Duty · 14566</span>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
              title="Logout session"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
