# SAHAAY — Frontend Application

Modern **React 18 + Vite** frontend implementing a **Dark Blue Glassmorphism Design System** for the SAHAAY (NHAA 14566) Grievance & Vulnerability Assessment Portal.

---

## 🎨 Design System & Styling
- **Base Canvas**: Midnight Blue (`#070d1e` / `#050914`) with ambient luminous radial glows.
- **Glassmorphism**: `backdrop-blur-xl`, `bg-slate-900/60`, `border-white/10`, and `shadow-2xl`.
- **Luminous Highlights**: Soft purple/indigo accents (`#4F46E5` / `#6366F1`) and color-coded risk indicators.
- **Icons**: Lucide React.
- **Charts & Data Viz**: Responsive SVG Donut Charts, Semi-Circular Risk Gauges, and Neon Trendlines.

---

## 🌐 Multi-Language Architecture (`/src/context/LanguageContext.jsx`)
Features instant multi-language switching supporting 6 primary Indian regional languages:
- **English (`en`)**
- **हिन्दी (`hi`)**
- **मराठी (`mr`)**
- **தமிழ் (`ta`)**
- **বাংলা (`bn`)**
- **తెలుగు (`te`)**

### Capabilities:
- Instant UI string translations without page reloads.
- Dialect-aware Web Speech API speech-to-text binding (`recognition.lang = 'hi-IN'`, `'mr-IN'`, etc.).
- Google Translate cookie synchronization for external elements.

---

## 📁 Directory Structure

```
frontend/
├── src/
│   ├── assets/               # Static images and branding assets
│   ├── components/
│   │   ├── layout/           # Sidebar, Header, OperatorLayout, Navbar
│   │   └── ui/               # RiskBadge, KpiCard, DonutChart, RiskGauge, RiskTrendLine, OverrideModal
│   ├── context/
│   │   └── LanguageContext.jsx # Multi-language dictionary and provider
│   ├── pages/
│   │   ├── LandingPage.jsx          # Public hero, feature pillars, emergency callout
│   │   ├── CitizenDashboard.jsx     # Citizen self-service portal
│   │   ├── ComplaintInteraction.jsx # Voice & text multimodal intake
│   │   ├── TrackStatus.jsx          # Milestone stepper status tracking
│   │   ├── EmergencyContacts.jsx    # Emergency hotline directory (112, 1091, 14566)
│   │   ├── LoginPage.jsx            # Tabbed Citizen / Official Login
│   │   ├── SignupPage.jsx           # Citizen & Official registration
│   │   ├── UserProfile.jsx          # Account settings & credentials
│   │   ├── ProblemStatement.jsx     # Pitch presentation viewer
│   │   └── operator/                # Officer Triage Subsystem
│   │       ├── DashboardOverview.jsx # 2-column triage decision-support workstation
│   │       ├── CaseQueue.jsx         # Case management table
│   │       ├── AlertsView.jsx        # Real-time alert feed
│   │       ├── FollowUpsView.jsx     # Citizen follow-up schedule
│   │       ├── AnalyticsView.jsx     # Longitudinal stress analytics
│   │       ├── ReportsView.jsx       # Exportable audit reports
│   │       └── ResourcesView.jsx     # Emergency dispatch & referrals
│   ├── App.jsx               # Routes, AuthContext, ProtectedRoute guards
│   ├── index.css             # Tailwind v4 import & ambient utilities
│   └── main.jsx              # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 🚀 Running the Frontend

```bash
# Install dependencies
npm install

# Start development server (Port 5174)
npm run dev

# Create production build
npm run build
```
