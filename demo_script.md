# SAHAAY (NHAA 14566) — Live Demo Script & Evaluator Q&A

---

## ⏱️ 60–90 Second Elevator Pitch

> *"Good morning respected evaluators and jury members.*
>
> *When citizens reach out in acute distress, fear and trauma impair linear communication. Their statements may be fragmented, hesitant, or written in regional dialects, making it difficult for overloaded helpline operators to immediately identify escalating danger.*
>
> *Our solution is **SAHAAY**, an AI-assisted grievance intake and early-warning vulnerability assessment portal built for the **National Helpline Assessment Authority (NHAA 14566)**.*
>
> *SAHAAY acts as an intelligent decision-support layer between the citizen and the case officer:*
> 1. *Citizens speak or type freely in their mother tongue—supporting 6 major Indian languages.*
> 2. *Our pipeline extracts both linguistic cues and acoustic voice signals (panic tremors, pitch variance, speech cadence).*
> 3. *It computes an explainable **Stress Vulnerability Index (SVI 0–100)** and charts longitudinal escalation trends.*
>
> *Crucially, **AI never makes unilateral punitive decisions**. Trained case officers retain full authority, using our streamlined 2-column triage workstation to verify signals, override scores with audit logs, schedule follow-ups, or trigger emergency dispatches.*
>
> *SAHAAY: A safer, calmer way to be heard."*

---

## 🎬 Live Walkthrough Flow

### Step 1: Multi-Language & Citizen Experience (`http://localhost:5174/`)
1. **Language Switching**:
   - Show the language dropdown in the top navigation bar.
   - Switch from **English** $\rightarrow$ **हिन्दी (Hindi)** $\rightarrow$ **मराठी (Marathi)**.
   - Highlight that the UI and sample prompts update **instantly** without reloading the page.

2. **Multimodal Grievance Intake (`/complaint`)**:
   - Click **"Speak or Submit Now"**.
   - Show the glowing microphone with browser audio permission handling.
   - Click **"Paste Sample Hindi Distress Text"** to demonstrate rapid intake.
   - Check the **Consent Checkbox** under NHAA 14566 privacy protocols.
   - Click **"Submit for Officer Triage"**.

3. **256-Bit AES Encryption & Pseudonymous Docket**:
   - Watch the multi-step intake animation: *Encrypting AES-256 $\rightarrow$ NLP extraction $\rightarrow$ SVI scoring*.
   - Show the generated copyable Docket Number (e.g. `NHAA/2026/05/2854`).
   - Click **"Track Grievance Status"** to view the 5-stage milestone stepper (`/track`).

---

### Step 2: Reactive Officer Triage Console (`http://localhost:5174/operator`)
1. **Strict Role Separation**:
   - Show that opening `/operator` requires official authentication (`officer@nhaa.gov.in`).
   - Click **"Login with Demo SSO"** to enter the Officer Console.

2. **Reactive Priority Queue (Left Column)**:
   - Point to the top of the queue: the complaint filed by the citizen in Step 1 appears dynamically at the top as **`Pending Verification`**.
   - Filter by risk levels (**CRITICAL**, **HIGH**, **MODERATE**, **LOW**) and view the risk distribution donut chart.

3. **Active Case Dossier (Right Column)**:
   - **SVI Stress Score**: Point to the glowing semi-circular gauge (**91/100 · 88% Confidence**).
   - **Longitudinal Trend**: Inspect the 18-day escalation chart showing rising distress signals over time.
   - **Multimodal Evidence**: Review the 3 categorized evidence cards:
     - 📝 *Transcribed Statement*
     - 🎙️ *Acoustic Speech Signals (+40dB variance, panic tremors)*
     - ⚠️ *Environmental Risk Factors (isolated zone, unsafe return)*

4. **Human-in-the-Loop Interventions**:
   - Check the interactive verification pills (*Confirmed ✓*).
   - Click **"Verify & Approve Assessment"** $\rightarrow$ shows instant toast notification that redressal has been initiated.
   - Click **"Override Score"** $\rightarrow$ open the dark glass modal to adjust risk ratings with mandatory audit justification.
   - Demonstrate **"Schedule Follow-up"** and **"Emergency Dispatch"** (routes to ERSS 112).


---

## ❓ Frequently Asked Questions (Jury Q&A)

### Q1: How does SAHAAY differ from generic sentiment analysis?
> **Answer:** Standard sentiment analysis only classifies words as positive, neutral, or negative. SAHAAY combines **linguistic distress semantics**, **voice acoustic markers** (pitch variance, jitter, panic tremors), **situational risk factors**, and **18-day longitudinal trends** to generate an operational Stress Vulnerability Index (SVI).

### Q2: Does AI replace case officers or make legal determinations?
> **Answer:** Absolutely not. SAHAAY is built on a strict **Human-in-the-Loop** model. AI scores are strictly advisory. Officers must individually verify signals, and any score override is logged in an immutable audit trail.

### Q3: How is citizen privacy and confidentiality protected?
> **Answer:** All statements and audio features are encrypted with **256-bit AES via Fernet encryption**. Complainants interact through **pseudonymous docket numbers**, ensuring personal identities remain isolated in a protected credential vault.

### Q4: How does the system handle regional Indian languages?
> **Answer:** SAHAAY features a native **6-language translation architecture** (English, Hindi, Marathi, Tamil, Bengali, Telugu) coupled with locale-aware Web Speech recognition (`hi-IN`, `mr-IN`, `ta-IN`, etc.) to transcribe regional dialects accurately.

### Q5: What happens if audio quality is poor or background noise is high?
> **Answer:** The pipeline calculates confidence scores for acoustic features. If audio quality falls below threshold, the system gracefully falls back to text NLP analysis without skewing the overall SVI score.
