import { link } from 'fs'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  children: ReactNode
  href?: string
  linkTitle?: string
}

export const SectionHeading = ({
  children,
  href,
  linkTitle,
}: SectionHeadingProps) => {
  return (
    <div className="mb-2 flex items-center  gap-6">
      <h2 className="text-2xl font-semibold  text-secondary leading-none tracking-[-0.04em]">
        {children}
      </h2>

      {href && (
        <a
          href={href}
          className="flex items-center gap-1 text-sm sm:text-base px-3 sm:px-6 py-1 font-bold font-bitcount text-sidebar border-2 rounded-3xl border-sidebar hover:text-white hover:bg-sidebar"
        >
          <span>
            {linkTitle
              ? `${linkTitle} ${String(children)}`
              : `All ${String(children)}`}
          </span>

          {/* <Arrow /> */}
        </a>
      )}
    </div>
  )
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 19 19 5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 5h11v11"
      />
    </svg>
  )
}
