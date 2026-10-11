import { Skills } from '../../components/skills'
import Link from 'next/link'

export default function SkillsPage() {
  return (
    <div className="min-h-0 overflow-y-auto">
      <h1 className='text-4xl text-secondary font-bold leading-none tracking-[-0.04em]'>Skills</h1>
      <p className=" max-w-2xl text-body">
        Technologies and tools I&apos;ve worked with.
      </p>
      <Skills />
    
      <Link
        href="/projects"
        className="my-2 inline-block text-sm text-sidebar hover:text-secondary"
      >
        View all projects →
      </Link>
    </div>
  )
}