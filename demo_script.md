# SAHAAY — Demonstration Guide & Q&A

---

## Summary

SAHAAY is an AI-assisted grievance intake and decision-support portal for NHAA 14566:
1. Citizens submit complaints via voice or text in 6 Indian languages.
2. The pipeline extracts linguistic distress markers and acoustic voice signals.
3. It computes an explainable Stress Vulnerability Index (SVI 0–100) and longitudinal trends.
4. Case officers verify signals, override scores with audit logs, and trigger redressal or emergency dispatch.

---

## Walkthrough Steps

### 1. Citizen Intake (`/complaint`)
1. **Language Selection**: Switch languages (English, Hindi, Marathi, etc.) to show dynamic UI adaptation.
2. **Multimodal Input**: Use speech input or sample distress text.
3. **Encryption & Docket**: Submit complaint, showing AES-256 encryption and generated docket tracking number.
4. **Status Tracking**: Navigate to `/track` to view milestone progression.

### 2. Officer Triage Console (`/operator`)
1. **Authentication**: Sign in using `officer@nhaa.gov.in`.
2. **Priority Queue**: View real-time incoming cases ranked by SVI priority.
3. **Case Dossier**:
   - Inspect SVI gauge (0–100) and confidence score.
   - Review 18-day longitudinal stress trend.
   - Examine transcript, acoustic features, and situational risks.
4. **Officer Actions**:
   - Verify signals.
   - Approve assessment or override score with audit justification.
   - Schedule follow-up or trigger Emergency Dispatch (ERSS 112).

---

## Evaluator Q&A

### Q1: How does SAHAAY differ from generic sentiment analysis?
Combines linguistic semantics, acoustic voice cues (pitch variance, jitter), situational risks, and 18-day longitudinal trend analysis rather than simple positive/negative text tagging.

### Q2: Does AI replace human officers?
No. SVI outputs are advisory. Officers make final decisions, and all score modifications are recorded in an audit trail.

### Q3: How is data privacy handled?
Transcripts and audio features use 256-bit AES encryption. Citizens interact via pseudonymous docket numbers.

### Q4: How are regional languages supported?
Multi-language translation architecture coupled with locale-aware Web Speech recognition (`hi-IN`, `mr-IN`, `ta-IN`, etc.).

### Q5: What happens if audio quality is poor?
The system flags low acoustic confidence and falls back to text NLP without skewing the assessment.
