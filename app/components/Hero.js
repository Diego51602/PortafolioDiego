export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-8 pt-32 pb-16 max-w-6xl mx-auto">
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-2 h-2 rounded-full bg-[#b8ff57] animate-pulse"></span>
          <span className="font-mono text-xs text-[#666] uppercase tracking-widest">Disponible para proyectos</span>
        </div>

        <div className="mb-8">
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-none tracking-tighter text-white uppercase">
            Full Stack <span className="text-[#b8ff57]">Developer</span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-[#1a1a1a] pt-8">
          <p className="text-[#888] max-w-sm leading-relaxed text-base">
            Ingeniero en Desarrollo de Software con 3 años de experiencia profesional.
            Especializado en aplicaciones web full stack, migración de sistemas y desarrollo de módulos Odoo.
            Inglés C1.
          </p>
          <div className="flex gap-8">
            {[["3+", "Años exp."], ["10+", "Proyectos"], ["20+", "Tecnologías"]].map(([n, l]) => (
              <div key={l} className="text-right">
                <p className="text-2xl font-black text-white">{n}</p>
                <p className="font-mono text-xs text-[#555] uppercase tracking-widest mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-t border-[#1a1a1a] pt-6">
        <div className="flex gap-12 animate-none">
          {["Angular", "React", "Next.js", ".NET", "C#", "Java", "Spring Boot", "Python", "Laravel", "SQL Server", "PostgreSQL", "MongoDB", "Odoo", "Docker", "AWS"].map((t) => (
            <span key={t} className="font-mono text-xs text-[#444] uppercase tracking-widest whitespace-nowrap">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
