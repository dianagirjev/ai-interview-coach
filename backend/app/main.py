from fastapi import FastAPI, HTTPException
from app.data.problems import PROBLEMS
from app.services.problem_service import ProblemService
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/problems")
def get_problems():
    service = ProblemService(PROBLEMS)
    return service.get_all_problems()


@app.get("/problems/{problem_id}")
def get_problem(problem_id: int):
    service = ProblemService(PROBLEMS)
    service_response = service.get_problem_by_id(problem_id)
    if service_response is None:
        raise HTTPException(status_code=404, detail="Problem not found")
    return service_response