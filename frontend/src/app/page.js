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
          <div className="rounded-lg border bg-white p-4">
            <p className="text-sm text-gray-500">Problems</p>
            <p className="mt-2 text-2xl font-semibold">2</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <p className="text-sm text-gray-500">Tests</p>
            <p className="mt-2 text-2xl font-semibold">7</p>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <p className="text-sm text-gray-500">Backend</p>
            <p className="mt-2 text-2xl font-semibold">Online</p>
          </div>
        </div>
      </section>
    </main>
  );
}
