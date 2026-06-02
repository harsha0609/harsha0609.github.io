import { profile } from '../data/profile'

const contactLinks = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { label: 'GitHub', value: 'github.com/harsha0609', href: profile.github },
  { label: 'LinkedIn', value: 'linkedin.com/in/harsha-vardhan-946b6515a', href: profile.linkedin },
]

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Useful conversations start with a concrete systems problem.</h2>
          <p className="section-lede">
            I am interested in senior software engineering roles and collaborations around backend platforms,
            secure product infrastructure, real-time systems, developer tools, and privacy-preserving applications.
          </p>
        </div>

        <div className="professional-card rounded-lg p-6">
          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col justify-between gap-2 rounded-md border border-slate-200 bg-white px-4 py-4 transition hover:border-teal-700 sm:flex-row sm:items-center"
              >
                <span className="text-sm font-semibold text-slate-950">{link.label}</span>
                <span className="text-sm text-slate-500 transition group-hover:text-teal-800">{link.value}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
            <a
              href={profile.resume}
              className="rounded-md bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Download resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
