export default function Stats() {
  const stats = [
    { label: "Experience", value: "2 Years" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "100%" },
  ];

  return (
    <div className="flex space-x-6 mt-6">
      {stats.map((s, i) => (
        <div key={i} className="bg-blue-600 text-white rounded-lg px-6 py-4 text-center shadow-lg">
          <h3 className="text-xl font-bold">{s.value}</h3>
          <p className="text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
