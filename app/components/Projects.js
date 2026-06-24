const projects = [
  {
    num: "01",
    title: "E-Commerce Full Stack",
    year: "2026",
    description: "Plataforma de comercio electrónico completa autenticación JWT, carrito de compras, gestión de órdenes y panel de administración con roles.",
    tech: ["React", "Java", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
    live: "https://ecommerce-frontend-rose-gamma.vercel.app",
    github: "https://github.com/Diego51602/ecommerce-frontend",
  },
  {
    num: "02",
    title: "Landing Page - Despacho Legal",
    year: "2026",
    description: "Sitio web profesional para despacho de abogados. Diseño elegante con animaciones fluidas, secciones de servicios, testimonios y contacto.",
    tech: ["React", "Framer Motion", "Vite"],
    live: "https://landing-abogado-tau.vercel.app",
    github: "https://github.com/Diego51602/landing-abogado",
  },
  {
    num: "03",
    title: "TaskManager App",
    year: "2024",
    description: "Aplicación full stack para gestión de tareas con autenticación de usuarios, CRUD completo y API REST propia en ASP.NET Core.",
    tech: ["Angular", "Angular Material", "ASP.NET Core", "C#", "SQL Server"],
    live: "https://taskmanagerapp-production-67bf.up.railway.app/login",
    github: "https://github.com/Diego51602/TaskManagerApp",
    githubApi: "https://github.com/Diego51602/TaskManagerAPI",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 px-8 max-w-6xl mx-auto">
      <div className="flex items-baseline justify-between mb-16 border-b border-[#1a1a1a] pb-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#666]">Proyectos</h2>
        <span className="text-xs font-mono text-[#444]">{projects.length} trabajos</span>
      </div>

      <div className="divide-y divide-[#1a1a1a]">
        {projects.map((p) => (
          <div key={p.num} className="group py-10 grid grid-cols-12 gap-6 items-start hover:bg-[#0f0f0f] transition-colors duration-200 px-2 -mx-2 rounded-lg cursor-default">
            <div className="col-span-1">
              <span className="font-mono text-xs text-[#444]">{p.num}</span>
            </div>

            <div className="col-span-7">
              <div className="flex items-center gap-4 mb-3">
                <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#b8ff57] transition-colors duration-200">
                  {p.title}
                </h3>
                <span className="font-mono text-xs text-[#444]">{p.year}</span>
              </div>
              <p className="text-[#666] text-sm leading-relaxed max-w-lg">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] text-[#555] border border-[#222] px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-4 flex flex-col gap-2 items-end pt-1">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-[#b8ff57] border border-[#b8ff57]/30 px-4 py-2 rounded hover:bg-[#b8ff57]/10 transition-colors w-full text-center">
                  Ver demo ↗
                </a>
              )}
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-[#555] border border-[#222] px-4 py-2 rounded hover:border-[#444] hover:text-[#888] transition-colors w-full text-center">
                {p.githubApi ? "GitHub Frontend ↗" : "GitHub ↗"}
              </a>
              {p.githubApi && (
                <a href={p.githubApi} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-xs text-[#555] border border-[#222] px-4 py-2 rounded hover:border-[#444] hover:text-[#888] transition-colors w-full text-center">
                  GitHub API ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
