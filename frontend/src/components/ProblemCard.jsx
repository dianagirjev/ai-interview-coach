export default function ProblemCard({ title, difficulty, topic, onClick }) {
  return (
    <div
      className="rounded-lg border bg-white p-4 cursor-pointer hover:border-gray-400"
      onClick={onClick}
    >
      <h2 className="font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">{difficulty}</p>
      <p className="mt-2 text-sm text-gray-500">{topic}</p>
    </div>
  );
}
