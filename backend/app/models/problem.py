class Problem:
    def __init__(self, problem_id, title, difficulty, topic, description):
        self.id = problem_id
        self.title = title
        self.difficulty = difficulty
        self.topic = topic
        self.description = description

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "difficulty": self.difficulty,
            "topic": self.topic,
            "description": self.description
        }