export default function ProblemDetails({ problem, onClear }) {
  return problem ? (
    <div className="mt-6 border px-4 py-2 rounded-md bg-white">
      <h3 className="text-lg font-semibold">{problem.title}</h3>
      <p className="mt-2 text-sm text-gray-600">
        Difficulty: {problem.difficulty}
      </p>
      <p className="mt-1 text-sm text-gray-600">Topic: {problem.topic}</p>
      <p className="mt-1 text-sm text-gray-600">{problem.description}</p>
      <pre className="mt-4 overflow-x-auto rounded-md bg-gray-900 p-4 text-sm text-gray-100">
        {problem.starter_code}
      </pre>
      <button
        className="mt-4 bg-black px-4 py-2 rounded-md text-white text-sm"
        onClick={onClear}
      >
        Clear selection
      </button>
    </div>
  ) : null;
}
