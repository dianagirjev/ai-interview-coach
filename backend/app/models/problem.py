class Problem:
    def __init__(self, problem_id, title, difficulty, topic):
        self.id = problem_id
        self.title = title
        self.difficulty = difficulty
        self.topic = topic

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "difficulty": self.difficulty,
            "topic": self.topic
        }