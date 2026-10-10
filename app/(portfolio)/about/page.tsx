
export default function AboutmePage() {
  return (     
    <section id="projects" className="mb-28 scroll-mt-10">
        <h1 className='text-4xl mb-4 text-secondary font-bold leading-none tracking-[-0.04em]'>About Me</h1>
        <p className=" text-xl text-body">
          Fasith.
        </p>
        <p className="  text-body">
          IIT Madras Grad.
        </p>
        <p className="  text-body">
          Engineering Design.
        </p>
        <p className="  text-body">
          8.62 GPA. Belows my resume.
        </p>
        <p className="  text-body">
          You will know more about me soon!
        </p>
        <p className="mb-7  text-sidebar">
          For now, you can trust that I&apos;m very very creative. ISTG!
        </p>
        <section aria-labelledby="resume-heading" className="">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="resume-heading" className="text-xl font-semibold">
              Resume
            </h2>

            <a href="/resume.pdf" download className="underline">
              Download PDF
            </a>
          </div>

          <div className="min-w-0 w-full  max-w-full">
            <iframe
              src="/FasithResume.pdf#view=FitH"
              title="Resume PDF"
              className="block h-[80vh] min-h-[400px]  w-full max-w-full border"
            />
          </div>

        </section>
    </section>
  )
}
