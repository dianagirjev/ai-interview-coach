from app.services.problem_service import ProblemService
from app.data.problems import PROBLEMS

service = ProblemService(PROBLEMS)


def test_get_all_problems():
    problems = service.get_all_problems()
    
    assert isinstance(problems, list)
    assert len(problems) == 2


def test_get_problem_by_id():
    problem = service.get_problem_by_id(1)

    assert isinstance(problem, dict)
    assert problem["id"] == 1


def test_get_problem_by_id_not_found():
    problem = service.get_problem_by_id(999)

    assert problem is None