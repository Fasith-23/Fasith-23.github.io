import { Skill } from "./skills"
import Link from "next/link"
import { slugify } from '../utils/slugify'

type ExperienceItem = {
  company: string
  role: string
  startDate: string
  endDate: string
  description: string[]
  skills?: Skill[]
  link?: string
}

export const experience: ExperienceItem[] = [
  {
    company: 'Ola Consumer',
    role: 'Software Engineer',
    startDate: 'July 2025',
    endDate: 'June 2026',
    description: [
      'Home Screen Revamp: Rebuilt the home screen of the OLA Consumer App in Swift with API driven card ordering following MVVM architecture & SOLID principle, increasing 20% user transfer to Booking screen',
      'Slider Tipping: Created a custom stepped price slider in SwiftUI with geometry-based layout, drag snapping, dynamic segment coloring, haptic feedback, and gesture-based dismissal handling - integrated into UIkit, Coordinators',
      'Automated Promotion Generation: Implemented UTM parameter extraction and deep link routing for universal links, propagating referral source through flows to maintain attribution across user journeys',
      'Worked with observables and concurrency for reactive Home screen card ordering and card updates in Slider Tipping',
      'Independently built key UI components such as Shimmer animations, interactive layouts & released builds via Jenkins and Fastlane',
      'Debugged and eliminated 4 memory leaks using Xcode Instruments (Allocations, Leaks tools)',
    ],
    skills: ['Swift', 'SwiftUI', 'UIKit', 'async/await', 'Concurrency', 'Cocoapods', 'Carthage', 'Jenkins', 'Fastlane', 'Git', 'Objective-C',],
  },
  {
    company: 'Ghost Vision Pvt. Ltd',
    role: 'Research Developer Intern ',
    startDate: 'Dec 2023',
    endDate: 'May 2024',
    description: [
      'Developed a sensor fusion solution for an Augmented Reality app to store and retrieve geolocated entities in realtime',
      'Implemented a microservices architecture, includes Broadcast service (FastAPI, Python), display (ReactJS), data processing (Python) and backend (.NET, c#, mongoDB), using REST and Websockets, to be containerized in Docker',
      'Written Shell Scripts for the build & installation of ORB-SLAM 2,3 & ROS in a Virtual Machine for geolocation (camera)',
    ],
    skills: ['Python', 'FastAPI', '.NET', 'ReactJS', 'C#', 'Docker', 'mongoDB', 'REST', 'Websockets', 'Shell Scripts', 'ROS', 'Virtual Machine', 'ORB-SLAM'],
  },
  {
    company: 'IIT Madras',
    role: 'Dual Degree Thesis',
    startDate: 'June 2024',
    endDate: 'May 2025',
    description: [
      'Developed a pipeline for an Augmented Reality setup to project an optimum tennis swing; with Unity to display humanoid model, FastAPI to broadcast IMU and camera data and Backend (python) to match 3D pose from a pre-trained model',
      'Designed a YOLO player/ball detection(0.89/0.73 mAP) on tennis videos to be used in training Pose estimation model',
    ],
    skills: ['Python', 'Unity 3D', 'Augmented Reality', 'C#', 'FastAPI',],
  },
  {
    company: 'IIT Madras',
    role: 'Young Research Fellow',
    startDate: 'Sep 2022',
    endDate: 'Aug 2023',
    description: [
      'Analyzed musical instrument geometry to relate it to its vibrational properties & frequencies for 3D reconstruction',
      'Developed a 3D model generator in Blender (Python scripts) to create Ukulele & Veena and generated a 1500+ dataset',
      'Selected as one of the 30 students among 300+ candidates for the Young Research Fellowship 2022 by IIT Madras',
    ],
    skills: ['Python', 'Blender', 'Geometry'],
  },

]

export const Experience = () => {
  return (
    <div className="my-4 space-y-8 ">
      {experience.map((item) => (
        <article
          key={`${item.company}-${item.role}`}
          id={slugify(`${item.role}-${item.company}`)}
          className="px-4 grid sm:gap-4 sm:grid-cols-[1fr_5fr]"
        >
          <p className="text-sm mt-1 text-body">
            {item.startDate} — {item.endDate}
          </p>

          <div>
            <h3 className=" text-2xl text-secondary">
              {item.role}
            </h3>

            <p className=" text-sm text-green">
              {item.company}
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-body">
              {item.description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>

            {item.skills && item.skills.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Link
                    key={skill}
                    href={`/skills#${slugify(skill)}`}
                    className="rounded-full border px-2 py-1 text-xs border-secondary text-body transition-colors hover:bg-secondary hover:text-white"
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            )}

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-orange hover:text-secondary"
              >
                Visit company →
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export const ExperienceList = () => {
  return (
    <div className=" my-4 grid gap-2 md:grid-cols-2">
              {experience.map((item) => (
                <article
                  key={item.role}
                  className=" py-2 px-4 hover:border-line flex gap-4"
                >
                  
                  <div>
                  <p className="text-sm text-secondary">{item.startDate} - {item.endDate}</p>
                  <h3 className="text-2xl">
                    {item.role}
                  </h3>
                  <p className=" text-sm text-body">
                    {item.company}
                  </p>
                  {item.skills && item.skills.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Link
                    key={skill}
                    href={`/skills#${slugify(skill)}`}
                    className="rounded-full border px-2 py-1 text-xs text-body transition-colors border-secondary hover:bg-secondary hover:text-white"
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            )}

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-orange hover:text-secondary"
              >
                Visit company →
              </a>
            )}
                  </div>  
                </article>
              ))}
            </div>
  )
}