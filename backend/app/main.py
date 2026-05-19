from fastapi import FastAPI
from app.data.problems import PROBLEMS
from app.services.problem_service import ProblemService

app = FastAPI()


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/problems")
def get_problems():
    service = ProblemService(PROBLEMS)
    return service.get_all_problems()