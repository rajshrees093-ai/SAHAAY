# SAHAAY_AI
**AI-Based Real-Time Stress and Trauma Assessment Module**

This project is bootstrapped based on the Smart India Hackathon (SIH) 2026 idea: *SahaayAI*. 
It provides real-time AI-assisted distress assessment for victims/complainants accessing NHAA (14566) and integrated portal to help prioritize sensitive cases.

## Tech Stack
- **Frontend**: React + Tailwind CSS
- **Backend**: Python (FastAPI)
- **Database**: PostgreSQL (Supabase)
- **AI/ML Pipeline**:
  - STT: Whisper
  - NLP: Transformers
  - ML/Risk: scikit-learn

## Division of Work
- **Member 1:** Backend APIs
- **Member 2:** Risk model
- **Member 3:** NLP pipeline
- **Member 4:** Speech/STT
- **Member 5:** Frontend
- **Member 6:** Security + integration

## Getting Started
### Backend
Navigate to the `backend/` directory and install dependencies:
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
Navigate to the `frontend/` directory and start the application:
```bash
cd frontend
npm install
npm run dev
```
