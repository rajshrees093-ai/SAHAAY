# SahaayAI - Demo Script & Q&A

## 60–90 Second Opening Pitch
"Good morning respected judges and everyone present here.

Imagine a victim calling a helpline while experiencing fear, distress, or trauma. They may explain their complaint, but the severity of their emotional state may not always be visible from the words alone.

Our solution, SahaayAI, is an AI-powered real-time Stress and Trauma Assessment Module for NHAA 14566 and its integrated portal. SahaayAI acts as an intelligent assistance layer between the victim's interaction and the authorized operator.

When a victim communicates through voice or text, our system processes the interaction using Speech-to-Text, NLP, emotion analysis, and a risk assessment engine. It generates three key outputs: Stress Score, Trauma-Risk Indicators, and Urgency Level.

Instead of allowing AI to make decisions on behalf of authorities, we use a Human-in-the-Loop approach. The AI provides explainable indicators to the operator, helping them identify cases that may require more sensitive handling or faster review.

Our prototype demonstrates the complete journey: Victim Interaction → AI Analysis → Risk Assessment → Operator Dashboard → Case Prioritization.

Most importantly, SahaayAI does not diagnose trauma or replace human judgment. It helps the human understand the situation better and respond more appropriately.

SahaayAI — turning every interaction into an opportunity for more informed, sensitive and timely assistance."

---

## Live Demo Flow

1. **"Let's see how SahaayAI works with a fictional complaint."**
   *Open victim interface.*
2. **Enter:** *"I have been receiving threats repeatedly. I am very scared and I don't feel safe."*
   *Click Analyze.*
3. **"The interaction is first converted into structured text and passed through our NLP pipeline."**
   *Show Processing animation.*
4. *Dashboard appears.* **Point at Stress Score (82/100):**
   *"The system identifies elevated distress-related indicators."*
5. **Point at Risk (HIGH):**
   *"Based on the combination of linguistic, emotional and contextual features, our prototype generates a high-risk indicator."*
6. **Point at Urgency (CRITICAL):**
   *"The most important part is that SahaayAI does not automatically take action. It provides an explanation and recommendation to the authorized operator."*
7. **Show "Human Review Required"**
   *"So instead of AI replacing the person handling the case, SahaayAI helps that person make a more informed and sensitive decision."*

---

## Team Presentation Division (6 Members)
- **Member 1 (45 sec):** Problem + Introduction
- **Member 2 (45 sec):** Solution + Innovation
- **Member 3 (60 sec):** AI/ML Architecture
- **Member 4 (45 sec):** Voice/NLP pipeline
- **Member 5 (90 sec):** Live Prototype Demo
- **Member 6 (45 sec):** Security + Impact + Future Scope
- **Team Lead (Closing):** *"SahaayAI is not about replacing the human behind the helpline. It is about giving that human better information at the moment it matters. Because when someone reaches out for help, the system should not only hear their complaint — it should help understand the urgency behind it."*

---

## Anticipated Q&A

**Q1. "How is this different from sentiment analysis?"**
**Answer:** "Sentiment analysis alone identifies positive or negative sentiment. SahaayAI combines emotional indicators with linguistic distress signals, incident context and urgency indicators to generate an operator-oriented risk assessment."

**Q2. "Can AI actually detect trauma?"**
**Answer:** "We are not claiming that AI can clinically diagnose trauma. Our system identifies observable distress-related indicators and produces a risk signal. The final interpretation and action always remain with a trained human operator."

**Q3. "What if AI gives a wrong result?"**
**Answer:** "That's why we use a Human-in-the-Loop architecture. AI output is advisory rather than an autonomous decision. We also display confidence and supporting indicators so the operator can verify the result."

**Q4. "Where will you get training data?"**
**Answer:** "For the prototype, we use publicly available emotion and distress-related datasets along with carefully designed synthetic domain-specific examples. For real deployment, domain-specific datasets would need to be collected under appropriate ethical, privacy and governmental protocols."

**Q5. "Why FastAPI?"**
**Answer:** "Our AI pipeline is Python-based, so FastAPI gives us a lightweight way to expose the ML models as APIs and integrate them directly with our React frontend."

**Q6. "Why not just use ChatGPT?"**
**Answer:** "A general-purpose LLM can assist with language understanding, but our system requires a controlled, explainable and domain-specific assessment pipeline. We therefore separate NLP, feature extraction and risk scoring rather than depending entirely on a general-purpose model."

**Q7. "Can this be integrated with 14566?"**
**Answer:** "Our prototype is designed as an integration layer. A production implementation could consume authorized call transcripts or portal interactions through the appropriate NHAA infrastructure and return the assessment to the operator interface."
