import { SectionHeading } from "./sectionHeading";

const timeline: TimelineItem[] = [
  {
    period: "July 2025 – June 2026",
    title: "Software Engineer",
    description: "Ola",
  },
  {
    period: "June 2024 - May 2025",
    title: "Dual Degree Thesis",
    description:
      "IIT Madras",
  },
  {
    period: "Dec 2023 - May 2024",
    title: "Research Developer Intern",
    description:
      "Ghost Vision Pvt. Ltd.",
  },
  {
    period: "Sep 2022 – Aug 2023",
    title: "Young Research Fellow ",
    description:
      "IIT Madras",
  },
  {
    period: "Nov 2020 – June 2025",
    title: "Dual Degree (BTech + MTech) in Engineering Design ",
    description:
      "IIT Madras",
  },
];

type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export const Timeline = () => {
    return (
        
        <section id="timeline" className="mb-8">
        <div className="space-x-3 pt-2 md:space-y-3 md:space-x-0 md:pt-0 md:border-t-0 border-t md:border-l border-sidebar md:border-secondary md:pl-4 md:block flex justify-between">
          {timeline.map((item) => (
            <article key={item.period} className="relative text-xs sm:text-sm">
              <span className="absolute -top-[14.5px]  md:-left-[22.5px] md:top-2 h-3 w-3 rounded-full border-2 border-sidebar md:border-content md:bg-sidebar bg-content " />
              <p className=" md:text-content">{item.period}</p>
              <h3 className="text-sidebar md:text-sidebar-text font-bold ">{item.title}</h3>
              <p className=" md:text-content ">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        {/* <p className="mt-8 leading-7 text-body">
          Also: city explorer, weight-lifter, brick-clicker, accordion
          enthusiast, biker, Magic gatherer, webmaster.
        </p> */}
      </section>
    )
}