import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import {
  Users,
  ShieldCheck,
  AlertTriangle,
  Flame,
  BellRing,
  Activity,
  Search,
  Filter,
  CheckCircle2,
  Check,
  HelpCircle,
  Eye,
  MessageSquare,
  FileCheck,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Clock,
  Send,
  SlidersHorizontal,
  Layers,
  Phone,
  ShieldAlert
} from 'lucide-react'
import KpiCard from '../../components/ui/KpiCard'
import RiskBadge from '../../components/ui/RiskBadge'
import DonutChart from '../../components/ui/DonutChart'
import RiskGauge from '../../components/ui/RiskGauge'
import RiskTrendLine from '../../components/ui/RiskTrendLine'
import OverrideModal from '../../components/ui/OverrideModal'
import { useLanguage } from '../../context/LanguageContext'

export const initialCases = [
  {
    id: 'NHAA-2841',
    docket: 'NHAA/2026/05/2841',
    risk: 'CRITICAL',
    svi: 91,
    confidence: '88%',
    indicators: ['Immediate threat', 'Isolation', 'Unsafe return home'],
    status: 'Pending Verification',
    actionRequired: 'Immediate dispatch',
    language: 'Hindi (Bundelkhandi)',
    channel: 'Voice Call (14566)',
    location: 'Sector 4, North District',
    category: 'Intimidation & Harassment',
    assignedTo: 'Officer Sharma',
    lastUpdated: '12 mins ago',
    statements: [
      'He is standing right outside my home and threatened violence if I leave.',
      'I have locked myself in the room with my child and need immediate protection.'
    ],
    voiceSignals: ['Trembling speech pattern (+42dB)', 'Elevated pitch variation', 'Acoustic panic tremors'],
    contextFactors: ['Unsafe residence return', 'Isolated geographical zone', 'Zero local family support'],
    nlpIndicators: ['Critical fear lexicons detected (+340%)', 'Explicit physical threat syntax']
  },
  {
    id: 'NHAA-2819',
    docket: 'NHAA/2026/05/2819',
    risk: 'HIGH',
    svi: 78,
    confidence: '84%',
    indicators: ['Stalking', 'Escalating harassment', 'Sleep deprivation'],
    status: 'Under Evaluation',
    actionRequired: 'Initiate safety check',
    language: 'Marathi',
    channel: 'Voice Intake',
    location: 'District West',
    category: 'Persistent Stalking',
    assignedTo: 'Officer Sharma',
    lastUpdated: '45 mins ago',
    statements: [
      'Repeated calls and stalking outside workplace for the past 2 weeks.',
      'I am terrified to commute alone and my mental health is deteriorating.'
    ],
    voiceSignals: ['Hesitation pauses (>4.2s)', 'Breathing rate elevation'],
    contextFactors: ['Repeat offense history', 'Workplace surveillance'],
    nlpIndicators: ['Severe anxiety patterns', 'Coercive control vocabulary']
  },
  {
    id: 'NHAA-2798',
    docket: 'NHAA/2026/05/2798',
    risk: 'HIGH',
    svi: 74,
    confidence: '81%',
    indicators: ['Domestic coercion', 'Financial cutoff'],
    status: 'In Progress',
    actionRequired: 'Legal aid referral',
    language: 'English',
    channel: 'Portal Intake',
    location: 'Central Suburb',
    category: 'Domestic Grievance',
    assignedTo: 'Officer Verma',
    lastUpdated: '1 hour ago',
    statements: ['Bank accounts frozen by estranged spouse and barred from basic utilities.'],
    voiceSignals: ['N/A - Text Intake'],
    contextFactors: ['Economic dependency', 'Dependent minors'],
    nlpIndicators: ['Distress keywords', 'Financial vulnerability']
  },
  {
    id: 'NHAA-2765',
    docket: 'NHAA/2026/05/2765',
    risk: 'MODERATE',
    svi: 43,
    confidence: '71%',
    indicators: ['Procedural delay', 'Financial distress'],
    status: 'Under Review',
    actionRequired: 'Schedule follow-up',
    language: 'Bengali',
    channel: 'Text Submission',
    location: 'District East',
    category: 'Public Compensation',
    assignedTo: 'Officer Sharma',
    lastUpdated: '3 hours ago',
    statements: ['Need urgent guidance on delayed compensation relief from last incident.'],
    voiceSignals: ['N/A'],
    contextFactors: ['Financial strain'],
    nlpIndicators: ['Administrative anxiety markers']
  },
  {
    id: 'NHAA-2722',
    docket: 'NHAA/2026/05/2722',
    risk: 'LOW',
    svi: 18,
    confidence: '65%',
    indicators: ['General inquiry', 'Information request'],
    status: 'Registered',
    actionRequired: 'Provide information',
    language: 'English',
    channel: 'Portal Form',
    location: 'District North',
    category: 'Civil Inquiry',
    assignedTo: 'Officer Ramesh',
    lastUpdated: '5 hours ago',
    statements: ['Inquiring about legal aid clinic timings for next week.'],
    voiceSignals: ['N/A'],
    contextFactors: ['Routine informational request'],
    nlpIndicators: ['Neutral baseline language', 'No threat cues']
  }
]

export const DashboardOverview = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { t } = useLanguage()

  const getCombinedCases = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('sahaay_active_cases') || '[]')
      const storedIds = new Set(stored.map((c) => c.id))
      const remainingInitial = initialCases.filter((c) => !storedIds.has(c.id))
      return [...stored, ...remainingInitial]
    } catch (e) {
      return initialCases
    }
  }

  const [caseList, setCaseList] = useState(getCombinedCases)
  const [selectedCase, setSelectedCase] = useState(() => getCombinedCases()[0])
  const [searchTerm, setSearchTerm] = useState('')
  const [riskFilter, setRiskFilter] = useState('ALL')
  const [isOverrideOpen, setIsOverrideOpen] = useState(false)
  const [verifiedSignals, setVerifiedSignals] = useState({})
  const [isVerifiedByHuman, setIsVerifiedByHuman] = useState(false)
  const [actionSuccessMessage, setActionSuccessMessage] = useState('')

  // Listen for storage changes if complaints are submitted in another tab
  useEffect(() => {
    const handleStorage = () => {
      const updated = getCombinedCases()
      setCaseList(updated)
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  // Sync selected case from URL query parameter ?caseId=...
  useEffect(() => {
    const paramId = searchParams.get('caseId')
    if (paramId) {
      const found = caseList.find((c) => c.id === paramId || c.docket === paramId)
      if (found) {
        setSelectedCase(found)
        setIsVerifiedByHuman(false)
        const element = document.getElementById('case-dossier')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }, [searchParams, caseList])

  // Filter cases
  const filteredCases = caseList.filter((c) => {
    const matchesSearch =
      c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.docket.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.indicators.some((ind) => ind.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesRisk = riskFilter === 'ALL' || c.risk === riskFilter
    return matchesSearch && matchesRisk
  })

  const toggleVerification = (signalKey) => {
    setVerifiedSignals((prev) => ({
      ...prev,
      [signalKey]: !prev[signalKey]
    }))
  }

  const handleApproveAssessment = () => {
    setIsVerifiedByHuman(true)
    const newStatus = 'Verified & Redressal Initiated ✓'
    const updatedList = caseList.map((c) =>
      c.id === selectedCase.id ? { ...c, status: newStatus } : c
    )
    setCaseList(updatedList)
    setSelectedCase((prev) => ({ ...prev, status: newStatus }))
    try {
      localStorage.setItem('sahaay_active_cases', JSON.stringify(updatedList))
    } catch (e) {}
    setActionSuccessMessage(`Case ${selectedCase.docket} verified by officer. Redressal actions dispatched.`)
    setTimeout(() => setActionSuccessMessage(''), 4000)
  }

  const handleConfirmOverride = (overrideData) => {
    const updatedList = caseList.map((c) =>
      c.id === overrideData.caseId
        ? {
            ...c,
            risk: overrideData.overriddenRisk,
            status: `Overridden to ${overrideData.overriddenRisk}`
          }
        : c
    )
    setCaseList(updatedList)
    setSelectedCase((prev) => ({
      ...prev,
      risk: overrideData.overriddenRisk,
      status: `Overridden to ${overrideData.overriddenRisk}`
    }))
    try {
      localStorage.setItem('sahaay_active_cases', JSON.stringify(updatedList))
    } catch (e) {}
    setActionSuccessMessage(`Case ${selectedCase.docket} audit score overridden to ${overrideData.overriddenRisk}.`)
    setTimeout(() => setActionSuccessMessage(''), 4000)
  }

  return (
    <div className="space-y-6 animate-fade-in text-slate-100">
      {/* Toast Notification Banner */}
      {actionSuccessMessage && (
        <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center justify-between shadow-[0_0_20px_rgba(16,185,129,0.25)] animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{actionSuccessMessage}</span>
          </div>
          <button onClick={() => setActionSuccessMessage('')} className="text-emerald-400 hover:text-white text-xs">
            ✕
          </button>
        </div>
      )}
      {/* 1. Page Header & Quick Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
              Officer Triage Center
            </h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {t('operatorSubtitle')}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Real-time multimodal vulnerability detection and human-in-the-loop verification console.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 transition-colors"
          >
            Citizen Portal &rarr;
          </Link>
          <button
            onClick={() => navigate('/complaint')}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            <span>+ New Intake</span>
          </button>
        </div>
      </div>

      {/* 2. Top Sleek KPI Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Active Cases"
          value="1,248"
          change="+8.2%"
          trend="up"
          subtitle="Total grievances under review"
          icon={Users}
          accentColor="indigo"
          onClick={() => navigate('/operator/cases')}
        />
        <KpiCard
          title="Critical Alerts"
          value="18"
          change="Action Req."
          trend="up"
          subtitle="Immediate threat triggers"
          icon={Flame}
          accentColor="rose"
          onClick={() => navigate('/operator/alerts')}
        />
        <KpiCard
          title="Overdue Follow-ups"
          value="1"
          change="Overdue"
          trend="up"
          subtitle="NHAA-2501 pending 45m"
          icon={Clock}
          accentColor="amber"
          onClick={() => navigate('/operator/followups')}
        />
        <KpiCard
          title="Avg. Triage SVI"
          value="62/100"
          change="-3.1%"
          trend="down"
          subtitle="Stress Vulnerability Index"
          icon={Activity}
          accentColor="cyan"
          onClick={() => navigate('/operator/analytics')}
        />
      </div>

      {/* 3. Main 2-Column Workstation: Left (Case Stream) + Right (Active Case Dossier) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Triage Case Stream (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Stream Header & Filters */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                Priority Case Queue ({filteredCases.length})
              </h2>
              <span className="text-[10px] text-slate-400">Click to inspect</span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter by ID, docket, or signal..."
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            {/* Risk Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar text-[11px]">
              {['ALL', 'CRITICAL', 'HIGH', 'MODERATE', 'LOW'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setRiskFilter(lvl)}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap ${
                    riskFilter === lvl
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Case Cards List */}
          <div className="space-y-2.5 max-h-[620px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredCases.map((c) => {
              const isSelected = selectedCase.id === c.id
              return (
                <div
                  key={c.id}
                  onClick={() => {
                    setSelectedCase(c)
                    setIsVerifiedByHuman(false)
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 backdrop-blur-xl ${
                    isSelected
                      ? 'bg-indigo-950/40 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500/50'
                      : 'bg-slate-900/60 border-white/10 hover:border-white/20 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-white text-sm">{c.id}</span>
                      <RiskBadge level={c.risk} size="xs" />
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-lg border border-indigo-500/20">
                      <span>SVI:</span>
                      <span className="text-white">{c.svi}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-medium line-clamp-1 mb-2">
                    {c.statements[0]}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
                    <span>{c.category}</span>
                    <span className="text-slate-400 font-mono">{c.lastUpdated}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Donut Distribution Card */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-4 flex items-center justify-between">
              <span>Risk Classification Split</span>
              <Link to="/operator/analytics" className="text-indigo-400 hover:text-indigo-300 text-[10px] font-bold">
                Analytics &rarr;
              </Link>
            </h3>
            <DonutChart />
          </div>
        </div>

        {/* RIGHT COLUMN: Active Case Dossier (7 Cols) */}
        <div id="case-dossier" className="lg:col-span-7 space-y-4 scroll-mt-20">
          {/* Case Dossier Container */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Dossier Header */}
            <div className="p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950/60 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-black text-white font-mono tracking-tight">
                    {selectedCase.id}
                  </h2>
                  <RiskBadge level={selectedCase.risk} size="md" />
                </div>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Docket: <span className="text-indigo-300 font-bold">{selectedCase.docket}</span> · Status:{' '}
                  <span className="text-emerald-400 font-bold">{selectedCase.status}</span>
                </p>
              </div>

              {/* Channel / Language Badges */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold">
                  {selectedCase.channel}
                </span>
                <span className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold">
                  {selectedCase.language}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* SVI Gauge & Trajectory Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RiskGauge
                  score={selectedCase.svi}
                  max={100}
                  riskLevel={selectedCase.risk}
                  confidence={selectedCase.confidence}
                />
                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      18-Day Escalation Trend
                    </h3>
                    <RiskTrendLine />
                  </div>
                </div>
              </div>

              {/* AI Multimodal Evidence Dossier (Uncluttered) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Multimodal AI Evidence Breakdown
                  </h3>
                  <span className="text-[10px] text-indigo-400 font-mono">Real-time NLP & Acoustic Fusion</span>
                </div>

                {/* 1. Complainant Statements */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 block">
                    1. Transcribed Grievance Excerpt
                  </span>
                  {selectedCase.statements.map((st, i) => (
                    <p key={i} className="text-xs text-slate-200 italic leading-relaxed border-l-2 border-indigo-500 pl-3">
                      “{st}”
                    </p>
                  ))}
                </div>

                {/* 2. Acoustic Voice Cues & Contextual Markers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      🎙️ Acoustic / Voice Signals
                    </span>
                    <div className="space-y-1.5">
                      {selectedCase.voiceSignals.map((vs, i) => (
                        <div key={i} className="text-xs text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg font-medium">
                          {vs}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2">
                      ⚠️ Environmental Risk Markers
                    </span>
                    <div className="space-y-1.5">
                      {selectedCase.contextFactors.map((cf, i) => (
                        <div key={i} className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg font-medium">
                          {cf}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Human-in-the-Loop Verification Section (Clean Check-Pills) */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-indigo-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Human Officer Signal Verification
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">Mandatory Protocol</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'sig1', label: 'Immediate physical danger confirmed' },
                    { id: 'sig2', label: 'Unsafe home residence validated' },
                    { id: 'sig3', label: 'Acoustic panic distress verified' },
                    { id: 'sig4', label: 'Social & familial isolation confirmed' }
                  ].map((item) => {
                    const isChecked = verifiedSignals[item.id]
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => toggleVerification(item.id)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                          isChecked
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <span className="text-[11px] leading-tight">{item.label}</span>
                        <div
                          className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all ${
                            isChecked ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-slate-600'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Action Buttons Bar */}
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={handleApproveAssessment}
                    className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md ${
                      isVerifiedByHuman
                        ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isVerifiedByHuman ? 'Assessment Verified ✓' : 'Verify & Approve Assessment'}</span>
                  </button>

                  <button
                    onClick={() => setIsOverrideOpen(true)}
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
                  >
                    Override Score
                  </button>

                  <button
                    onClick={() => navigate('/operator/followups')}
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors"
                  >
                    Schedule Follow-up
                  </button>
                </div>

                <button
                  onClick={() => navigate('/operator/resources')}
                  className="px-3.5 py-2.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all flex items-center gap-1.5"
                >
                  <ShieldAlert className="w-4 h-4" />
                  <span>Emergency Dispatch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Override Modal */}
      <OverrideModal
        isOpen={isOverrideOpen}
        onClose={() => setIsOverrideOpen(false)}
        caseId={selectedCase.id}
        currentRisk={selectedCase.risk}
        onConfirmOverride={handleConfirmOverride}
      />
    </div>
  )
}

export default DashboardOverview
