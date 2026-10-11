import { Timeline } from "../components/timeline";
import Link from "next/link";
import { Projects } from "../components/projects";
import { SectionHeading } from "../components/sectionHeading";
import { SkillsList } from "../components/skills";
import { ExperienceList } from "../components/experience";

export default function HomePage() {
  return (
    <div className="min-h-0 overflow-y-auto">
      <div className="flex gap-8">
        <section id="home" className="mb-8 scroll-mt-10">
          <h1 className=" font-bitcount mb-2 font-medium text-2xl md:text-4xl lg:text-6xl">
            Hey, I&apos;m <span className="  text-sidebar">Fasith!</span>
          </h1>
          <p className="mb-2 text-md md:text-xl lg:text-2xl">
            Software Engineer, Game Developer and Designer 
          </p>
          <div className="md:hidden">
            {/* <section className="sidebar-section mb-2">
              <div className="sidebar-content">
                <p>
                  I&apos;m <Link href="/me">Fasith</Link>, software engineer and open-source
                  creator. This is my digital garden. 🌱
                </p>
              </div>
            </section> */}
          </div>
          <p className=" text-sm md:text-lg font-light text-body">
            I also am a Researcher and an Open Source Creator. Welcome to my web house!
          </p>
        </section>
      </div>
    
      <div className="md:hidden">
        <Timeline />
      </div>
      <section id="projects" className="mb-12 mt-4 scroll-mt-10">
      <SectionHeading href="/projects">Projects</SectionHeading>
      <p className=" max-w-2xl text-body">
        Open-source projects I&apos;ve worked on over the years.
      </p>
      <Projects limit={4} />
      </section>
      
      <section id="experience" className="my-12 scroll-mt-10">
        
        <SectionHeading href="/experience" linkTitle="Detailed">Experience</SectionHeading>
        <p className="max-w-2xl text-body">
        Thats all my Work Experience 
        </p>
        <ExperienceList />
      </section>
      <section id="skills" className="my-12 scroll-mt-10">
      <SectionHeading href="/skills">Skills</SectionHeading>
      <p className="mb-4 max-w-2xl text-body">
        My skillset
      </p>
      <SkillsList />
      </section>
      
    </div>

  );
}
