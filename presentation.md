# SAHAAY (NHAA 14566) — Presentation Architecture
## AI-Assisted Grievance Triage & Vulnerability Support System

> **"From hidden distress signals to timely human support."**  
> A consent-based, human-in-the-loop decision-support system helping authorized case officers identify and prioritize emerging distress — without ever replacing human judgment.

---

## 01. The Problem: Silent Distress Escalation

```
[ Victim in Distress ] ──► [ Hesitant / Fragmented Speech ] ──► [ Overloaded Helpline (14566) ]
                                                                          │
                                                                   Delayed Triage?
                                                                          │
                                                                          ▼
                                                             [ Crisis Escalates Unnoticed ]
```

* **The Reality**: In acute distress, complainants experience trauma that prevents linear, clear communication.
* **The Gap**: Traditional helpline portals rely on rigid forms and manual review, missing subtle longitudinal escalation shifts.
* **The Core Question**: *"How can emerging distress signals be identified early enough for sensitive, prioritized human intervention?"*

---

## 02. Paradigm Comparison

| Traditional Portals | SAHAAY AI Framework |
|---|---|
| **Reactive** (Acts after crisis peaks) | **Early-Warning** (Detects rising distress markers) |
| **Rigid Forms** (Requires formal legal jargon) | **Multimodal Expression** (Voice + 6 Regional Dialects) |
| **Isolated Snapshots** (One-off submission review) | **Longitudinal Analysis** (18-day escalation curves) |
| **Black-box / Manual Guesses** | **Explainable SVI Index** (0–100 score + evidence cards) |
| **Risk of Unchecked AI Automation** | **Strict Human-in-the-Loop** (Officer verification & audit) |

---

## 03. End-to-End Operational Pipeline

```
  1. CITIZEN INTAKE
     ├── Voice Speech Input (Optional, locale-aware STT)
     └── Multilingual Text (Hindi, Marathi, Tamil, Bengali, Telugu, English)
          │
          ▼
  2. SECURITY & EXTRACTION
     ├── 256-Bit AES Encryption (Fernet)
     ├── NLP Semantic Analysis (Distress keywords, urgency syntax)
     └── Acoustic Feature Extraction (Pitch variance, jitter, panic tremors)
          │
          ▼
  3. SVI DECISION ENGINE
     ├── Stress Vulnerability Index (0–100)
     ├── Risk Categorization (LOW, MODERATE, HIGH, CRITICAL)
     └── 18-Day Longitudinal Trajectory Mapping
          │
          ▼
  4. OFFICER TRIAGE WORKSTATION
     ├── Reactive Priority Queue
     ├── Signal Verification Check-Pills
     ├── Audit-Logged Score Overrides
     └── Action Ribbon: Redressal Approval | Follow-up | Emergency 112 Dispatch
```

---

## 04. Core Innovation: The Stress Vulnerability Index (SVI)

* **Advisory Metric, Not Clinical Diagnosis**: Designed exclusively for case prioritization and sensitive handling.
* **Risk Levels**:
  - 🟢 **LOW (0–30)**: Informational inquiries & routine requests.
  - 🟡 **MODERATE (31–60)**: Mild distress, compensation requests, procedural delays.
  - 🟠 **HIGH (61–80)**: Persistent harassment, stalking, escalating threats.
  - 🔴 **CRITICAL (81–100)**: Immediate physical danger, domestic violence, panic cues.
* **Multi-Signal Feature Fusion**:
  $$\text{SVI} = w_1 \cdot \text{NLP}_{\text{distress}} + w_2 \cdot \text{Acoustics}_{\text{tremor}} + w_3 \cdot \text{Context}_{\text{urgency}} + w_4 \cdot \text{Trend}_{\text{18d}}$$

---

## 05. Security, Ethics & Responsible AI

1. **Human-in-the-Loop Supremacy**:
   - AI outputs are strictly advisory.
   - Case officers retain final decision authority.
   - Every score override requires mandatory justification logged to an immutable audit record.
2. **256-Bit AES Data Protection**:
   - Transcripts, audio metrics, and identifiers are encrypted using AES-256 Fernet.
   - Complainants interact pseudonymously via docket numbers (e.g. `NHAA/2026/05/2854`).
3. **Data Minimization & Consent**:
   - Voice intake is purely opt-in with explicit browser permission prompts.
   - Biometric identifiers are never stored unencrypted.
4. **Resilient Edge Case Fallbacks**:
   - Low audio quality $\rightarrow$ System falls back seamlessly to text NLP with reduced acoustic confidence.
   - Sarcasm or ambiguity $\rightarrow$ Confidence score flagged low, prompting mandatory officer interview.

---

## 06. Technology Stack

* **Frontend**: React 18, Vite, Tailwind CSS v4, Lucide React, React Router v7
* **Design System**: Dark Blue Glassmorphism (`#070d1e`, `backdrop-blur-xl`, glowing luminous SVG charts)
* **Backend API**: Python 3, Flask, SQLAlchemy, CORS
* **Security Layer**: Python `cryptography` (Fernet 256-Bit AES)
* **Speech & NLP**: Web Speech Recognition API + Multilingual Transformer Pipeline

---

## 07. Conclusion

$$\text{Detect Early} \longrightarrow \text{Protect Dignity} \longrightarrow \text{Prioritize Human Care} \longrightarrow \text{Deliver Timely Relief}$$

> *"AI should never replace the empathy of a human officer. It should empower that officer with the right insights at the moment it matters most."*
