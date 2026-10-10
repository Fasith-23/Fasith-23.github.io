import { projects } from './projects'
import { experience } from './experience'
import Link from 'next/link'
export const skills = [
  'Swift', 'C#', 
  'Python', 
  'TypeScript',
  'mongoDB', 'REST', 'Websockets', 'Shell Scripts', 'ReactJS', 'Docker',
  'Next.js',
  'C++', 
  'Swift Package Manager', 'Cocoapods', 'Unity',
  'Tailwind CSS',
   'UIKit', 'async/await',  'SwiftUI','Concurrency', 'Blender', 'Carthage', 'Jenkins', 'Fastlane', 'Git', 'Objective-C',  'Augmented Reality',  'FastAPI', '.NET',  'Unity 3D', 'ROS', 'Virtual Machine', 'ORB-SLAM', 'Geometry',  'Figma', 'Pixel Art', 'OpenCV'
] as const

export type Skill = (typeof skills)[number]

export const skillItems: Record<
  Skill,
  {
    projects: typeof projects
    experience: typeof experience
  }
> = Object.fromEntries(
  skills.map((skill) => [
    skill,
    {
      projects: projects.filter((project) =>
        project.skills.includes(skill),
      ),
      experience: experience.filter((item) =>
        item.skills?.includes(skill),
      ),
    },
  ]),
) as Record<
  Skill,
  {
    projects: typeof projects
    experience: typeof experience
  }
>

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, '-')
}

export const Skills = () => {
  return (
<main className="mx-auto my-8 max-w-5xl px-4">
  <div className=" gap-4 columns-2 lg:columns-3 xl:columns-4">
    {skills.map((skill) => {
      const items = skillItems[skill]

      return (
        <section
          key={skill}
          id={slugify(skill)}
          className="mb-4 inline-block w-full break-inside-avoid rounded-md border-2  border-secondary p-4 align-top scroll-mt-10"
        >
          <h2 className="text-2xl font-bold">{skill}</h2>

          {items.projects.length > 0 && (
            <div className="mt-5">
              {/* <h3 className="text-sm font-bold">Projects</h3> */}

              <ul className="mt-2 space-y-2 text-sm text-body">
                {items.projects.map((project) => (
                  <li key={project.title}>
                    <Link
                      href={`/projects#${slugify(project.title)}`}
                      className="hover:underline decoration-2  underline-offset-2"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {items.experience.length > 0 && (
            <div className="mt-5">
              {/* <h3 className="text-sm font-bold">Experience</h3> */}

              <ul className="mt-2 space-y-2 text-sm text-body">
                {items.experience.map((item) => (
                  <li key={`${item.company}-${item.role}`}>
                  <Link
                    href={`/experience#${slugify(`${item.role}-${item.company}`)}`}
                    className="hover:underline decoration-2  underline-offset-2"
                  >
                    {item.role} at {item.company}
                  </Link>                  
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )
    })}
  </div>
</main>

  )
}

export const SkillsList = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <Link
          key={skill}
          href={`/skills#${skill.toLowerCase().replace(/\s+/g, '-')}`}
          className="rounded-full border px-3 py-2 text-sm text-body border-secondary transition-colors hover:bg-secondary hover:text-white"
        >
          {skill}
        </Link>
      ))}
    </div>
  )
}