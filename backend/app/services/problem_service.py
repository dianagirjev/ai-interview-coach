class ProblemService:
    def __init__(self, problems):
        self.problems = problems

    def get_all_problems(self):
        return [problem.to_dict() for problem in self.problems]