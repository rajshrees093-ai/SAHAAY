# SAHAAY (NHAA 14566)
> **AI-Assisted Victim & Grievance Vulnerability Assessment Portal**  
> *A safer, calmer way to be heard.*

[![React](https://img.shields.io/badge/Frontend-React_18_+_Vite-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4_Glassmorphism-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Backend-Python_Flask_API-3776AB?logo=python&logoColor=white)](https://python.org/)
[![Security](https://img.shields.io/badge/Security-256--Bit_AES_Fernet-4CAF50)](https://cryptography.io/)
[![Multi-Language](https://img.shields.io/badge/Languages-EN_|_HI_|_MR_|_TA_|_BN_|_TE-indigo)](https://github.com/)

---

## 🌟 Overview

**SAHAAY** is a national AI-assisted grievance intake and early-warning decision-support portal built for the **National Helpline Assessment Authority (NHAA 14566)**. 

The system provides a compassionate, secure channel for citizens to express grievances in their regional dialect via voice or text, while empowering authorized case officers with explainable **Stress Vulnerability Index (SVI)** metrics without ever replacing human judgment.

---

## 🚀 Key Features

### 🕊️ 1. Citizen Self-Service & Intake Channel
- **Dialect-Aware Voice & Text Input:** Speak or type naturally in **Hindi, Marathi, Tamil, Bengali, Telugu, or English**.
- **Live Speech-to-Text & Acoustic Analysis:** Captures linguistic distress markers and acoustic voice signals (pitch variance, jitter, panic tremors).
- **256-Bit AES Encryption:** All grievance transcripts and personal identifiers are encrypted at rest and in transit.
- **Pseudonymous Docket Generation:** Instant tracking numbers (e.g. `NHAA/2026/05/2854`) for status tracking without exposing sensitive details.
- **Integrated Emergency Directory:** 1-click hotline dialing for **112 (Emergency Dispatch)**, **1091 (Women Helpline)**, and **14566 (NHAA Toll-Free)**.

### 👨‍💼 2. Streamlined Officer Triage Center (`/operator`)
- **Strict Role Separation:** Unauthenticated by default; requires verified `@nhaa.gov.in` officer authentication.
- **Reactive Priority Queue:** Real-time stream dynamically updated whenever a citizen files a complaint.
- **Explainable SVI Gauge:** Semi-circular Stress Vulnerability Index (0–100) with confidence scoring.
- **18-Day Escalation Curves:** Longitudinal trendline charting gradual behavioral and stress shifts.
- **Human-in-the-Loop Decision Support:**
  - 🟢 **Verify & Approve Assessment** (initiates redressal)
  - ⚪ **Override Score** (adjusts audit risk rating with mandatory reasoning)
  - 🔵 **Schedule Follow-up** (assigns citizen wellness check)
  - 🔴 **Emergency Dispatch** (escalates to emergency responders)

### 🌌 3. Dark Blue Glassmorphism UI
- Midnight navy canvas (`#070d1e`) with ambient luminous indigo, purple, and cyan light orbs.
- Frosted glass cards (`backdrop-blur-xl`, `bg-slate-900/60`, `border-white/10`).
- Fully responsive across mobile smartphones, tablets, laptops, and desktop displays.

---

## 🏛️ System Architecture

```
                               ┌───────────────────────────┐
                               │   Citizen Intake Portal   │
                               │ (Voice / Multilingual Text)│
                               └─────────────┬─────────────┘
                                             │
                                             ▼
                             ┌───────────────────────────────┐
                             │  256-Bit AES Fernet Security  │
                             │   & Multimodal Audio/NLP Cues │
                             └───────────────┬───────────────┘
                                             │
                                             ▼
                             ┌───────────────────────────────┐
                             │   AI Triage & SVI Engine      │
                             │  (0-100 Vulnerability Index)  │
                             └───────────────┬───────────────┘
                                             │
                                             ▼
                             ┌───────────────────────────────┐
                             │    Officer Triage Console     │
                             │  (Human Verification & Audit) │
                             └───────┬───────────────┬───────┘
                                     │               │
                    ┌────────────────┴───┐       ┌───┴────────────────┐
                    │ Verified Redressal │       │ Emergency Dispatch │
                    │    & Follow-up     │       │    (ERSS 112)      │
                    └────────────────────┘       └────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite, Tailwind CSS v4, Lucide Icons, React Router v7 |
| **Localization** | Custom `LanguageContext` + Dynamic Web Speech API (6 Languages) |
| **Backend API** | Python 3, Flask, CORS, SQLite / SQLAlchemy |
| **Security** | Fernet AES-256 Symmetric Encryption, Role-Based Route Guards |
| **Design System** | Dark Blue Glassmorphism (`#070d1e`, `backdrop-blur-xl`) |

---

## 📦 Getting Started

### Prerequisites
- **Node.js**: v18.0 or higher
- **Python**: v3.9 or higher

---

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start the Flask API server (runs on port 8000)
python main.py
```
*Backend API will be live at `http://127.0.0.1:8000`.*

---

### 2. Frontend Setup

```bash
# Open a new terminal and navigate to frontend
cd frontend

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```
*Frontend will be live at `http://localhost:5174/`.*

---

## 🔑 Demo Access & Authentication

| Role | Access URL | Demo Credentials |
|---|---|---|
| **Public / Citizen** | `http://localhost:5174/` | Guest / Register on portal |
| **Citizen Dashboard** | `http://localhost:5174/dashboard` | `citizen@demo.in` / `password123` |
| **Officer Portal** | `http://localhost:5174/operator` | `officer@nhaa.gov.in` / `password123` |

---

## 📄 License & Compliance

Developed under the **National Helpline Assessment Authority (NHAA 14566)** framework.  
Data processing adheres to national citizen privacy charters and data minimization standards.
