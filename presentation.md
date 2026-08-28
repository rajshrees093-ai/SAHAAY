# SAHAAY (NHAA 14566)
## AI-Assisted Grievance Triage & Vulnerability Support System

---

## 1. Problem Statement
- Complainants in distress often struggle with structured communication due to stress and regional language barriers.
- Standard helpline queues review submissions chronologically rather than by urgency.
- Subtle, escalating risks can be missed in high-volume environments.

---

## 2. Comparison

| Aspect | Traditional Helplines | SAHAAY AI Framework |
|---|---|---|
| **Response** | Reactive (post-crisis) | Early-warning (distress markers) |
| **Input Format** | Rigid text forms | Voice + text in 6 Indian languages |
| **Analysis** | Single snapshot | 18-day longitudinal trend curves |
| **Scoring** | Manual triage | Explainable SVI (0–100) + evidence breakdown |
| **Governance** | Unstructured | Strict human-in-the-loop with audit logs |

---

## 3. Operational Pipeline

1. **Citizen Intake**: Voice (locale-aware STT) and multilingual text (Hindi, Marathi, Tamil, Bengali, Telugu, English).
2. **Security & Extraction**: 256-bit AES encryption, NLP distress parsing, acoustic speech metrics.
3. **SVI Decision Engine**: Computes Stress Vulnerability Index (0–100), risk tier (LOW, MODERATE, HIGH, CRITICAL), and longitudinal trend.
4. **Officer Triage**: Case prioritization, signal verification, score override logging, and action routing (Redressal / Emergency 112).

---

## 4. Stress Vulnerability Index (SVI)
- **Tiers**:
  - LOW (0–30): Routine inquiries
  - MODERATE (31–60): Mild distress, procedural delays
  - HIGH (61–80): Persistent harassment, escalating threats
  - CRITICAL (81–100): Immediate physical danger, panic cues
- **Advisory Only**: Designed for prioritization and decision-support, not automated determinations.

---

## 5. Security & Privacy
- **Encryption**: AES-256 Fernet encryption for transcripts and identifiers.
- **Pseudonymity**: Complainants tracked via docket numbers.
- **Audit Logging**: Mandatory officer justifications for all score overrides.
- **Graceful Degradation**: Automatic fallback to text NLP if acoustic quality is low.

---

## 6. Technology Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React, React Router
- **Backend**: Python 3, Flask, SQLAlchemy, CORS
- **Security**: Python Cryptography (AES-256 Fernet)
- **Speech/NLP**: Web Speech Recognition API + Multilingual NLP Engine
