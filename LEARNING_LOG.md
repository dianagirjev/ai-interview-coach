## 2026-05-18

### Worked on

- Created local Git repository
- Added initial project structure
- Created backend virtual environment
- Installed FastAPI and Uvicorn
- Added first FastAPI route: GET /health

### Concepts practiced

- Git status, add, commit
- Branch basics
- Python virtual environment
- pip dependencies
- FastAPI route basics

## 2026-05-19

### Time spent

- Planned: 60-90 min
- Actual:

### Worked on

- Added GET /problems endpoint
- Added tests for problems endpoint
- Moved problems data to a separate module
- Created Problem model
- Added to_dict method
- Created ProblemService
- Added GET /problems/{problem_id}
- Added 404 handling for missing problems
- Added tests for problem detail endpoint

### Concepts practiced

- FastAPI routes
- Path parameters
- HTTPException and 404 errors
- pytest basics
- TestClient responses
- response.json()
- Python classes
- self
- service layer
- list comprehension
- Git commits and .gitignore cleanup

### What felt easier

- Writing simple FastAPI routes
- Understanding status codes
- Creating tests after seeing the pattern

### What felt harder

- Understanding when to use .json()
- Separating model, data, service, and route
- Git cache / ignored files
- Running commands from the correct folder

### Next step

- Add tests directly for ProblemService
- Then prepare backend structure before starting Next.js frontend
