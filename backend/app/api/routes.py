from fastapi import APIRouter
from app.services.classification_service import classify_complaint

router = APIRouter()

@router.post("/complaint")
def submit_complaint(text: str):
    result = classify_complaint(text)
    return result