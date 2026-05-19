from fastapi import FastAPI
from app.data.problems import PROBLEMS

app = FastAPI()


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/problems")
def get_problems():
    return [problem.to_dict() for problem in PROBLEMS]