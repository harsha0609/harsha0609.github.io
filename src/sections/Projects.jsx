import { projects, publications } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div>
        <p className="section-kicker">Selected Work</p>
        <h2 className="section-title">Systems that combine product delivery with hard technical constraints.</h2>
        <p className="section-lede">
          These projects are chosen for the kind of engineering signal they carry: security architecture,
          real-time coordination, developer tooling, backend reliability, and research translation.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 border-y border-slate-200 py-4 text-sm text-slate-600">
        <span className="font-semibold text-slate-950">{projects.length} selected systems</span>
        <span>Backend platforms</span>
        <span>Real-time products</span>
        <span>Security infrastructure</span>
        <span>Research software</span>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`professional-card flex h-full flex-col rounded-lg p-6 ${
              project.featured || project.wide
                ? 'md:col-span-2 md:grid md:grid-cols-[0.82fr_1.18fr] md:gap-8 md:p-8'
                : ''
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{project.type}</span>
                <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{project.context}</span>
                {project.featured && (
                  <span className="rounded-md bg-slate-950 px-3 py-1 text-xs font-semibold text-white">Featured</span>
                )}
              </div>

              <h3 className="mt-5 text-2xl font-[760] text-slate-950">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
            </div>

            <div className={`${project.featured || project.wide ? 'md:mt-0' : 'mt-5'} flex flex-col`}>
              <div className="border-l-2 border-teal-700 pl-4">
                <p className="text-sm font-semibold text-slate-950">Outcome</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{project.impact}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                    {item}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex text-sm font-semibold text-teal-800 hover:text-teal-950"
                >
                  Open reference
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-slate-200 pt-10">
        <p className="section-kicker">Publications</p>
        <div className="mt-6 grid gap-4">
          {publications.map((publication) => (
            <article key={publication.title} className="rounded-lg border border-slate-200 bg-white/70 p-5">
              <h3 className="font-semibold text-slate-950">{publication.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{publication.authors}</p>
              <p className="mt-1 text-sm text-slate-500">{publication.venue}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
