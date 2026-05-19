class ProblemService:
    def __init__(self, problems):
        self.problems = problems

    def get_all_problems(self):
        return [problem.to_dict() for problem in self.problems]
    
    def get_problem_by_id(self, problem_id):
        return next((problem.to_dict() for problem in self.problems if problem.id == problem_id), None)