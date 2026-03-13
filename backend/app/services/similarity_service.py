from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

model = SentenceTransformer("all-MiniLM-L6-v2")

def check_similarity(new_complaint, old_complaints):

    new_vec = model.encode([new_complaint])

    old_vecs = model.encode(old_complaints)

    similarity = cosine_similarity(new_vec, old_vecs)

    return similarity.tolist()