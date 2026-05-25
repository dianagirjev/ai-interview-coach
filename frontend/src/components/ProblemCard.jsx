export default function ProblemCard({ title, difficulty, topic }) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">{difficulty}</p>
      <p className="mt-2 text-sm text-gray-500">{topic}</p>
    </div>
  );
}
