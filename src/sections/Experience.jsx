import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="border-y border-slate-200 bg-white/64">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Production ownership across platforms, data, and secure infrastructure.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Recent work spans research systems at ADAPT Centre and enterprise SaaS engineering at Stratforge.
          </p>
        </div>

        <div className="mt-14 grid gap-6">
          {experience.map((role, index) => (
            <article key={role.company} className="professional-card rounded-lg p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.3fr_0.7fr]">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                    {role.period}
                  </p>
                  <h3 className="mt-4 text-2xl font-[760] text-slate-950">{role.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-600">{role.company}</p>
                  <p className="mt-1 text-sm text-slate-500">{role.location}</p>
                  <span className="mt-5 inline-flex rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    Role {index + 1}
                  </span>
                </div>

                <div>
                  <p className="text-base leading-7 text-slate-700">{role.summary}</p>
                  <ul className="mt-6 grid gap-3">
                    {role.points.map((point) => (
                      <li key={point} className="grid grid-cols-[16px_1fr] gap-3 text-sm leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
