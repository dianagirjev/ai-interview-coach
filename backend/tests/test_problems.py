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


def test_get_problem_by_id():
    response = client.get("/problems/1")
    data = response.json()

    assert response.status_code == 200
    assert data["id"] == 1
    assert "title" in data
    assert "description" in data


def test_get_problem_by_id_not_found():
    response = client.get("/problems/999")
    data = response.json()

    assert response.status_code == 404
    assert data["detail"] == "Problem not found"