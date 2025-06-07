export default function StatsSection() {
  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "2000+", label: "Students Trained" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Expert Faculty" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-school-blue mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
