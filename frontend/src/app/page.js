import StatCard from "@/components/StatCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-900">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">AI Interview Coach</h1>
        <p className="mt-3 text-gray-600">
          Practice algorithms with guided feedback.
        </p>
        <button className="mt-6 bg-black px-4 py-2 rounded-md text-white ">
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
    </main>
  );
}
