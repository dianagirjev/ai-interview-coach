import StatCard from "@/components/StatCard";
import ProblemCard from "@/components/ProblemCard";

const problems = [
  {
    title: "Hello World",
    difficulty: "Easy",
    topic: "Introduction",
  },
  {
    title: "Sum of 2",
    difficulty: "Easy",
    topic: "Math",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-900">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">AI Interview Coach</h1>
        <p className="mt-3 text-gray-600">
          Practice algorithms with guided feedback.
        </p>
        <button className="mt-6 bg-black px-4 py-2 rounded-md text-white">
          Start practicing
        </button>
      </section>
      <section className="mx-auto mt-8 max-w-4xl">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Problems" value="2" />
          <StatCard label="Tests" value="7" />
          <StatCard label="Frontend" value="Online" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl mt-4">
        <h2 className="text-xl font-semibold">Practice Problems</h2>
        <div className="mt-4 grid gap-4">
          {problems.map((problem) => (
            <ProblemCard
              key={problem.title}
              title={problem.title}
              difficulty={problem.difficulty}
              topic={problem.topic}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
