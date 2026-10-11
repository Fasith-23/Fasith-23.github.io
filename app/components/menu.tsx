import {
  Code2,
  Mail,
  Moon,
  Rss,
  Send,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLink = {
  url: string
  label: string
  image: string
  image2: string
}

const mainNavLinks: NavLink[] = [
  {
    url: '/projects',
    label: 'Projects',
    image: '/images/menu/Projects.png',
    image2: '/images/sidebar/Projects.png',
  },
  {
    url: '/experience',
    label: 'Experience',
    image: '/images/menu/Experience.png',
    image2: '/images/sidebar/Experience.png',
  },
  {
    url: '/skills',
    label: 'Skills',
    image: '/images/menu/Skills.png',  
    image2: '/images/sidebar/Skills.png',

  },
  {
    url: '/about',
    label: 'About Me',
    image: '/images/menu/About.png',
    image2: '/images/sidebar/About.png',  
  },
]

export const Menu = () => {
    const pathname = usePathname()

  const isActive = (url: string) =>
    pathname === url || pathname.startsWith(`${url}/`)
    return(
        <section className="sidebar-section font-bitcount mb-6 md:border-b md:pb-4">
        <nav className="sidebar-nav-links flex w-full justify-between sm:gap-2 md:flex-col">
          <div className="sidebar-title-link md:hidden ">
              <Link href="/" className="flex items-center gap-2">
                <span className="relative sm:h-6 sm:w-6 h-7 w-7 overflow-hidden rounded-md">
                  <Image
                      src={'/images/menu/Home.png'}
                      alt={`logo`}
                      fill
                      className="object-cover"
                    />
                </span>
                <span className="site-name hover:underline lg:decoration-4 decoration-2 font-bitcount text-xs hidden sm:block lg:text-base ">fasith.io</span>
              </Link>
            </div>
          {mainNavLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={`flex sm:flex-row flex-col items-center sm:gap-2 md:space-y-1 ${
                isActive(link.url) ? 'active' : ''
              }`}
            >
              <div className="md:hidden relative sm:h-6 sm:w-6 h-4 w-4 overflow-hidden rounded-md ">
                    <Image
                      src={link.image}
                      alt={`${link.label} preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
                   <div className="md:block hidden relative h-6 w-6 overflow-hidden mr-2 rounded-md ">
                    <Image
                      src={link.image}
                      alt={`${link.label} preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
              <span className='hover:underline lg:decoration-4 decoration-2 text-xs  lg:text-base '>{link.label}</span>
            </Link>

          ))}
        </nav>
      </section>
    )
}