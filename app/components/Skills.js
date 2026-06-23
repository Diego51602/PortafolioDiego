const groups = [
  { category: "Frontend", skills: ["React", "Angular", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind"] },
  { category: "Backend", skills: ["Java", "Spring Boot", ".NET", "C#", "ASP.NET MVC", "Python", "Node.js"] },
  { category: "Bases de datos", skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"] },
  { category: "Herramientas", skills: ["Docker", "AWS", "Git", "Swagger", "Odoo", "REST APIs", "JWT"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 max-w-6xl mx-auto border-t border-[#1a1a1a]">
      <div className="flex items-baseline justify-between mb-16 border-b border-[#1a1a1a] pb-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#666]">Stack técnico</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {groups.map((g) => (
          <div key={g.category}>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#444] mb-5">{g.category}</p>
            <ul className="space-y-2">
              {g.skills.map((s) => (
                <li key={s} className="text-sm text-[#888] hover:text-white transition-colors duration-150 cursor-default">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
