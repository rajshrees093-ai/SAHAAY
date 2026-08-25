import os
from passlib.context import CryptContext
from cryptography.fernet import Fernet
import jwt
from datetime import datetime, timedelta

# JWT Configuration
SECRET_KEY = "sahaayai-super-secret-key-for-sih-2026"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 120

# Encryption Configuration
# In production, this must be loaded from environment variables securely.
# For SIH Demo, we hardcode a generated fernet key:
ENCRYPTION_KEY = b'G-o6d1bFxg4Tj8_dED8Qv0u9-H5XbWdY4gMvG_q3_L4='
cipher_suite = Fernet(ENCRYPTION_KEY)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def encrypt_data(data: str) -> str:
    """Encrypts plaintext data into a string that can be safely stored."""
    return cipher_suite.encrypt(data.encode()).decode()

def decrypt_data(encrypted_data: str) -> str:
    """Decrypts the string back to plaintext."""
    return cipher_suite.decrypt(encrypted_data.encode()).decode()

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
