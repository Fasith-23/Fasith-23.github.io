import { Skill } from "./skills";
import { slugify } from '../utils/slugify'
import Link from "next/link";
import Image from "next/image";

type Project = {
  year: string
  title: string
  description: string
  image: string
  skills: Skill[]
  links: Record<string, string>
}

export const projects: Project[] = [
  {
    year: "Aug 2026 - Sep 2026",
    title: "Boids Simulation",
    description: "Bird movement simulation - Spatial Hash and QuadTree",
    image: '/images/projects/boids.jpg',
    skills: ['Swift', 'SwiftUI', 'Swift Package Manager', 'Concurrency', 'async/await'],
    links: {"Package" : "https://github.com/Fasith-23/SimulationBoids2D", "Demo" : "https://github.com/Fasith-23/BoidsDemo"},
  },
  {
    year: "Aug 2023 - Nov 2023",
    title: "Triangulation Visualizer",
    description: "n-d Delaunay Triangulation through a n+1 d convex hull",
    image: '/images/projects/triangulation.jpg',
    skills: ['Python', 'C++', 'ReactJS', 'Next.js', 'FastAPI', 'TypeScript', 'Tailwind CSS'],
    links: {"Website" : "https://fasith-23.github.io/triangulation_visualiser/", "Source" : "https://github.com/Fasith-23/triangulation_visualiser"},
  },
  {
    year: "Jan 2024 - Mar 2024",
    title: "Blue Fish Yokohama",
    description: "UI for this cute puzzle game",
    image: '/images/projects/bfy.png',
    skills: ['C#', 'Unity', 'Figma', 'Pixel Art'],
    links: {"Steam" : "https://store.steampowered.com/app/1716500/Blue_Fish_Yokohama/"},
  },
  {
    year: "Aug 2021",
    title: "Scouts of the Void",
    description: "Submission for NASA Space Apps 2021",
    image: '/images/projects/scouts.jpg',
    skills: ['C#', 'Unity 3D', 'Blender'],
    links: {"Play" : "https://dotfic-gaming.itch.io/scouts-of-the-void", "Source" : "https://github.com/Fasith-23/Scouts-of-the-Void"},
  },
  {
    year: "Jan 2025",
    title: "Temenos Hackathon 2025",
    description: "Finalist. Green Finance Optimization Platform",
    image: '/images/projects/industriai.png',
    skills: ['Python', 'FastAPI',  'Next.js', 'ReactJS', 'TypeScript', 'Tailwind CSS'],
    links: {"Source" : "https://github.com/Fasith-23/temenos_24hr_hackathon"},
  },
  {
    year: "Oct 2023",
    title: "Feature Matching",
    description: "Course Project: ED5310",
    image: '/images/projects/featurem.jpg',
    skills: ['Python', 'FastAPI', 'OpenCV'],
    links: {"Source" : "https://github.com/Fasith-23/Feature_Matching_DT"},
  },
  {
    year: "June 2022",
    title: "BeachSweeper",
    description: "MineSweeper in 3D? and has crabs?",
    image: '/images/projects/beachsweeper.png',
    skills: ['C#', 'Unity 3D', 'Blender', 'Figma'],
    links: {"Play" : "https://fasith.itch.io/beachsweeper", "Source" : "https://github.com/Fasith-23/BeachSweeper"},
  },
  {
    year: "Aug 2022",
    title: "Glitch",
    description: "2D puzzle game",
    image: '/images/projects/glitch.png',
    skills: ['C#', 'Unity'],
    links: {"Play" : "https://dice-king.itch.io/glitch", "Source" : "https://github.com/Dice-Organization/LowRez-Game"},
  },
];

type ProjectsProps = {
  limit?: number
}

export const Projects = ({limit}:ProjectsProps) => {
  const visibleProjects = limit === undefined ? projects : projects.slice(0, limit)
  return (
    
            <div className="my-4 grid gap-4 lg:grid-cols-2">
              {visibleProjects.map((project) => (
                <article
                  key={project.title}
                  id={slugify(project.title)}
                  className=" py-2 px-4 hover:border-orange flex gap-4 "
                >
                  <div className="text-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-md">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-2 flex gap-4 text-xs  justify-between">
                    {Object.entries(project.links).map(([name, link]) => (
                      <a href={link} key={name} className=" underline decoration-secondary decoration-2 underline-offset-4 hover:text-sidebar  hover:decoration-sidebar ">
                        {name}
                      </a>
                    ))}
                  </div>
                  </div>
                  <div>
                  <p className="text-sm text-secondary">{project.year}</p>
                  <h3 className=" text-2xl">
                    {project.title}
                  </h3>
                  <p className=" text-sm text-body">
                    {project.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Link
                        key={skill}
                        href={`/skills#${skill.toLowerCase().replace(/\s+/g, '-')}`}
                        className="rounded-full border px-2 py-1 text-xs text-body border-secondary transition-colors hover:bg-secondary hover:text-white"
                      >
                        {skill}
                      </Link>
                    ))}
                  </div>
                  
                  </div>  
                </article>
              ))}
            </div>
  )
}