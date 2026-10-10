import { Projects} from '../../components/projects'

export default function ProjectsPage() {
  return (     
    <section id="projects" className="mb-28 scroll-mt-10">
        <h1 className='text-4xl text-secondary font-bold leading-none tracking-[-0.04em]'>Projects</h1>
        <p className="mb-7 max-w-2xl text-body">
          Open-source projects I&apos;ve worked on over the years.
        </p>
        <Projects />
    </section>
  )
}
