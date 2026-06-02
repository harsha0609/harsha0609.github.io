import { focusAreas, metrics, profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200/80 pt-24">
      <div className="section-shell grid gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="section-kicker">{profile.location}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-[780] leading-[1.04] tracking-normal text-slate-950 md:text-5xl lg:text-6xl">
            Senior engineer for backend platforms, real-time systems, and secure product infrastructure.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            {profile.summary} {profile.positioning}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-md bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800 sm:min-w-42 sm:whitespace-nowrap"
            >
              View selected work
            </a>
            <a
              href={profile.resume}
              className="rounded-md border border-slate-300 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-950 sm:min-w-42 sm:whitespace-nowrap"
            >
              Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-transparent px-5 py-3 text-center text-sm font-semibold text-teal-800 transition hover:bg-teal-50 sm:whitespace-nowrap"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <aside className="professional-card rounded-lg p-6">
          <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-5">
            <div>
              <p className="text-sm font-semibold text-slate-950">{profile.name}</p>
              <p className="mt-1 text-sm text-slate-500">Backend, platform, privacy, analytics, and real-time systems</p>
            </div>
            <span className="rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">Senior SWE</span>
          </div>

          <div className="mt-6 grid gap-3">
            {focusAreas.map((area) => (
              <div key={area} className="flex items-center justify-between gap-4 rounded-md border border-slate-200 bg-white px-4 py-3">
                <span className="text-sm font-medium text-slate-700">{area}</span>
                <span className="h-2 w-2 rounded-full bg-teal-700" />
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="mx-auto grid max-w-6xl gap-px bg-slate-200 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-white/78 px-6 py-6">
            <p className="text-3xl font-[780] text-slate-950">{metric.value}</p>
            <p className="mt-2 text-sm leading-5 text-slate-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
