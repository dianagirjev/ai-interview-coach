from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)

def test_get_problems():
    response = client.get("/problems")
    data = response.json()

    assert response.status_code == 200
    assert isinstance(data, list)
    assert len(data) == 2
    assert data[0]["id"] == 1