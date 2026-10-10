import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const socialLinks: SocialLink[] = [
    {
      url: 'mailto:fasith23ahamed@gmail.com',
      label: 'Mail',
      icon: '/images/footer/Mail.png',
    },
    {
      url: 'https://github.com/Fasith-23',
      label: 'GitHub',
      icon: '/images/footer/Github.png',
    },
    {
      url: 'https://www.linkedin.com/in/fasith-ahamed-f/',
      label: 'LinkedIn',
      icon: '/images/footer/Linkedin.png',
    },
    {
      url: 'https://fasith.itch.io/',
      label: 'ItchIo',
      icon: '/images/footer/Itchio.png',
    },
  ]

type SocialLink = {
  url: string
  label: string
  icon: string
}

type NavLink = {
  url: string
  label: string
  download?: boolean
}

const subNavLinks: NavLink[] = [
  { url: '/FasithResume.pdf', label: 'Resume', download: true },
  { url: 'https://github.com/Fasith-23/Fasith-23.github.io', label: 'Source' },
]


export const Footer = () => {
    const pathname = usePathname()
    const isActive = (url: string) =>
        pathname === url || pathname.startsWith(`${url}/`)
    return (
        <div className="sidebar-bottom mt-4 md:mt-0 flex w-full lg:px-16 md:px-12  gap-32 md:gap-0 md:flex-col justify-between">
        <section className="sidebar-section md:border-line md:border-t md:pt-4 w-full mb-2">
          <nav className="sidebar-links flex justify-between">
            {socialLinks.map((link) => {
              const isExternal = link.url.startsWith('http')

              return (
                <div className="tooltip-container tooltip-above" key={link.url}>
                  {isExternal ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="relative block md:h-5 md:w-5 h-4 w-4"
                    >
                      <Image
                        src={link.icon}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </a>
                  ) : (
                    <Link
                      href={link.url}
                      aria-label={link.label}
                      className="relative block md:h-5 md:w-5 h-4 w-4"
                    >
                      <Image
                        src={link.icon}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </Link>
                  )}
                </div>

              )
            })}
          </nav>
        </section>

        <nav className="sidebar-sub-links text-sm w-full flex justify-between">
          {subNavLinks.map((link, index) => (
            <div key={link.url} className="md:text-content text-sidebar hover:text-hover">
              {index > 0 && <div className="divider" />}
                    
              {link.download ? (
                <a href={link.url} download>
                  {link.label}
                </a>
              ) : link.url.startsWith('http') ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link href={link.url} className={isActive(link.url) ? 'active' : undefined}>
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          
        </nav>
      </div>
    )
}