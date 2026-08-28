# SAHAAY (NHAA 14566)
**AI-Assisted Grievance & Vulnerability Assessment Portal**

---

## Overview

SAHAAY is a grievance intake and decision-support portal for the **National Helpline Assessment Authority (NHAA 14566)**. It enables citizens to submit grievances via voice or text in regional languages and assists authorized case officers with an explainable **Stress Vulnerability Index (SVI)**.

---

## Features

- **Multilingual Input**: Voice and text support for Hindi, Marathi, Tamil, Bengali, Telugu, and English.
- **Acoustic & Linguistic Analysis**: Detects distress markers and acoustic voice signals (pitch variance, jitter).
- **Security & Privacy**: 256-bit AES encryption for transcripts and personal identifiers, with pseudonymous docket tracking.
- **Officer Triage Console (`/operator`)**: Role-based access, real-time priority queue, SVI score (0–100), longitudinal trend tracking, and human-in-the-loop verification/overrides.
- **Emergency Escalation**: Direct routing integration for ERSS 112 and Women Helpline 1091.

---

## System Architecture

```
┌─────────────────────────────────┐
│      Citizen Intake Portal      │
│   (Voice / Multilingual Text)   │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│   256-Bit AES Encryption        │
│   & Multimodal Feature Parsing  │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│      AI SVI Decision Engine     │
│   (0-100 Stress Vulnerability)  │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│     Officer Triage Console      │
│  (Human Verification & Actions) │
└────────┬───────────────┬────────┘
         │               │
         ▼               ▼
┌─────────────────┐ ┌───────────────┐
│ Case Redressal  │ │ Emergency 112 │
└─────────────────┘ └───────────────┘
```

---

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, React Router
- **Backend**: Python 3, Flask, SQLAlchemy, CORS
- **Security**: AES-256 Fernet Encryption, Role-Based Route Guards
- **Speech & NLP**: Web Speech Recognition API, Multilingual NLP Engine

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### 1. Backend Setup
```bash
cd backend
pip install -r requirements.txt
python main.py
```
*Server runs at `http://127.0.0.1:8000`.*

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
*Application runs at `http://localhost:5174/`.*

---

## Authentication & Demo Accounts

| Portal | URL | Credentials |
|---|---|---|
| **Public / Citizen** | `http://localhost:5174/` | Public Access |
| **Citizen Dashboard** | `http://localhost:5174/dashboard` | `citizen@demo.in` / `password123` |
| **Officer Console** | `http://localhost:5174/operator` | `officer@nhaa.gov.in` / `password123` |
