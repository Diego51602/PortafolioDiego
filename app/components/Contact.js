export default function Contact() {
  return (
    <section id="contacto" className="py-32 px-8 max-w-6xl mx-auto border-t border-[#1a1a1a]">
      <div className="flex items-baseline justify-between mb-16 border-b border-[#1a1a1a] pb-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-[#666]">Contacto</h2>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-12">
        <div>
          <p className="text-5xl font-black text-white tracking-tight leading-tight mb-2">
            ¿Tienes un<br />
            <span className="text-[#333]">proyecto?</span>
          </p>
          <p className="text-[#555] text-sm mt-6 max-w-xs leading-relaxed">
            Escríbeme directo. Sin formularios, sin esperas — respondo el mismo día.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a href="mailto:diegoaguirreuribe516@gmail.com"
            className="group flex items-center gap-3 font-mono text-sm text-white border border-[#222] px-6 py-4 rounded-lg hover:border-[#b8ff57] hover:text-[#b8ff57] transition-all duration-200">
            <span>diegoaguirreuribe516@gmail.com</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
          <a href="tel:+528123710830"
            className="group flex items-center gap-3 font-mono text-sm text-[#555] border border-[#1a1a1a] px-6 py-4 rounded-lg hover:border-[#333] hover:text-[#888] transition-all duration-200">
            <span>+52 812 371 0830</span>
          </a>
          <a href="https://github.com/Diego51602" target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-3 font-mono text-sm text-[#555] border border-[#1a1a1a] px-6 py-4 rounded-lg hover:border-[#333] hover:text-[#888] transition-all duration-200">
            <span>github.com/Diego51602</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        </div>
      </div>

      <div className="mt-32 flex items-center justify-between">
        <span className="font-mono text-xs text-[#333]">Diego Aguirre — Monterrey, México</span>
        <span className="font-mono text-xs text-[#333]">2026</span>
      </div>
    </section>
  );
}
