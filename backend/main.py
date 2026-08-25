from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid
from sqlalchemy.orm import Session

import models, security, database

# Create tables
models.Base.metadata.create_all(bind=database.engine)

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def root():
    return jsonify({
        "status": "online",
        "service": "SAHAAY AI Backend Pipeline",
        "version": "1.0",
        "message": "Backend API is running securely."
    }), 200

@app.route("/signup", methods=["POST"])
def signup():
    data = request.json
    db = database.SessionLocal()
    try:
        db_user = db.query(models.User).filter(models.User.email == data['email']).first()
        if db_user:
            return jsonify({"detail": "Email already registered"}), 400
        
        hashed_pwd = security.hash_password(data['password'])
        new_user = models.User(
            full_name=data['full_name'],
            email=data['email'],
            hashed_password=hashed_pwd
        )
        db.add(new_user)
        db.commit()
        return jsonify({"message": "User registered successfully securely"}), 201
    finally:
        db.close()

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    db = database.SessionLocal()
    try:
        db_user = db.query(models.User).filter(models.User.email == data['email']).first()
        if not db_user or not security.verify_password(data['password'], db_user.hashed_password):
            return jsonify({"detail": "Invalid credentials"}), 401
        
        access_token = security.create_access_token(data={"sub": db_user.email})
        return jsonify({"access_token": access_token, "token_type": "bearer"}), 200
    finally:
        db.close()

@app.route("/analyze-stress", methods=["POST"])
def analyze_stress():
    data = request.json
    db = database.SessionLocal()
    try:
        # 1. Encrypt data before storing it to Database (AES-256 via Fernet)
        encrypted_text = security.encrypt_data(data['text'])
        
        docket_no = f"NHAA-2026-{uuid.uuid4().hex[:6].upper()}"
        new_complaint = models.Complaint(
            docket_number=docket_no,
            user_id=1, # Mocked user_id since we skipped full JWT bearer dependency for simplicity in MVP
            encrypted_complaint_text=encrypted_text,
        )
        db.add(new_complaint)
        db.commit()
        
        # 2. AI processing on the raw text (mocked)
        # Mock advanced ML analysis mapped directly to the PPT USPs
        response_data = {
            "docket": docket_no,
            "status": "success",
            "message": "Grievance received securely.",
            "ai_analysis": {
                "multimodal_feature_fusion": True,
                "dynamic_distress_score": 82,
                "risk_classification": "CRITICAL",
                "risk_trend_detection": "Escalating (+15% vs baseline)",
                "emotion_linguistic_analysis": ["High distress language", "Fear-related expressions"],
                "behavioural_pattern_analysis": "Fragmented sentence structure indicative of panic",
                "explainable_risk_indicators": [
                    "Significant change in communication pattern",
                    "Immediate safety concern indicated"
                ],
                "edge_case_confidence": "94% (Verified via text-first processing)",
                "human_in_the_loop_required": True
            }
        }
        return jsonify(response_data), 200
    finally:
        db.close()

if __name__ == "__main__":
    app.run(port=8000, debug=True)
