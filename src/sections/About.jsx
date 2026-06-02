import { education, profile } from '../data/profile'

const principles = [
  {
    title: 'Own the system end to end',
    body: 'Architecture, implementation, deployment, debugging, documentation, and production support stay connected.',
  },
  {
    title: 'Make secure behavior usable',
    body: 'Privacy and cryptography work only when the product path is understandable, reliable, and fast enough for real users.',
  },
  {
    title: 'Convert research into software',
    body: 'Ambiguous technical ideas become scoped platforms, operational workflows, and maintainable developer tools.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="section-kicker">Professional Profile</p>
          <h2 className="section-title">A software engineer with research depth and production habits.</h2>
        </div>

        <div>
          <p className="text-xl leading-9 text-slate-700">
            {profile.positioning} My strongest work sits where backend systems, collaboration workflows,
            privacy constraints, and product delivery have to meet cleanly.
          </p>

          <div className="mt-10 grid gap-4">
            {principles.map((principle) => (
              <article key={principle.title} className="professional-card rounded-lg p-5">
                <h3 className="text-base font-semibold text-slate-950">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{principle.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Education</h3>
            <div className="mt-5 grid gap-4">
              {education.map((item) => (
                <div key={item.school} className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 sm:flex-row">
                  <div>
                    <p className="font-semibold text-slate-950">{item.school}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.degree}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-slate-500">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
