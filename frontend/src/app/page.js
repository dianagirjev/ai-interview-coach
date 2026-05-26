"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/StatCard";
import ProblemCard from "@/components/ProblemCard";

export default function Home() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProblem, setSelectedProblem] = useState(null);

  useEffect(() => {
    async function fetchProblems() {
      try {
        const response = await fetch("http://127.0.0.1:8000/problems");
        if (!response.ok) {
          throw new Error("Failed to fetch the problems");
        }
        const data = await response.json();
        setProblems(data);
      } catch {
        setError("Could not load problems");
      } finally {
        setLoading(false);
      }
    }
    fetchProblems();
  }, []);

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
          <StatCard label="Problems" value={problems.length} />
          <StatCard label="Tests" value="7" />
          <StatCard label="Frontend" value="Online" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl mt-4">
        <h2 className="text-xl font-semibold">Practice Problems</h2>
        {loading && <p>Loading problems ...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <div className="mt-4 grid gap-4">
            {problems.map((problem) => (
              <ProblemCard
                onClick={() => setSelectedProblem(problem)}
                key={problem.id}
                title={problem.title}
                difficulty={problem.difficulty}
                topic={problem.topic}
              />
            ))}
          </div>
        )}
        {selectedProblem && (
          <div className="mt-6 border px-4 py-2 rounded-md bg-white">
            <h3 className="text-lg font-semibold">{selectedProblem.title}</h3>
            <p className="mt-2 text-sm text-gray-600">
              Difficulty: {selectedProblem.difficulty}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Topic: {selectedProblem.topic}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
