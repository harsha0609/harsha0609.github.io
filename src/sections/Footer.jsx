import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/72 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row md:items-center">
        <p>&copy; 2026 {profile.name}. Senior Software Engineer based in {profile.location}.</p>
        <div className="flex flex-wrap gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-slate-950">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-slate-950">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="font-medium hover:text-slate-950">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
