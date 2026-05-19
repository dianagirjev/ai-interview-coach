from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/problems")
def get_problems():
    return [
        {
            "id": 1,
            "title": "Hello World",
            "difficulty": "Easy",
            "topic": "introduction"        
        }, 
        {
            "id": 2,
            "title": "Sum of 2",
            "difficulty": "Easy",
            "topic": "math"
        }
    ]