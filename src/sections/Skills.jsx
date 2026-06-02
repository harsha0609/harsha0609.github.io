import { skills } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="border-y border-slate-200 bg-slate-950 text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-teal-300">Technical Skill Map</p>
            <h2 className="mt-3 text-4xl font-[760] leading-none tracking-normal text-white md:text-5xl">
              Breadth where it supports ownership. Depth where systems get difficult.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((category) => (
              <article key={category.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-base font-semibold text-white">{category.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
