from transformers import pipeline

classifier = pipeline(
    "zero-shot-classification",
    model="facebook/bart-large-mnli"
)

labels = [
    "Road issue",
    "Water issue",
    "Garbage issue",
    "Electricity issue"
]

def classify_complaint(text):
    result = classifier(text, labels)
    return {
        "category": result["labels"][0],
        "confidence": result["scores"][0]
    }