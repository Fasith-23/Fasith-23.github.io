'use client'

import Link from 'next/link'
import { Timeline } from './timeline'
import { Footer } from './footer'
import { Menu } from './menu'
import Image from 'next/image'



export const Sidebar = () => {

  return (
    <aside className="sidebar md:text-sidebar-text h-screen w-full hidden bg-sidebar  pb-4 md:flex flex-col justify-between">
    <div className='min-h-0 overflow-y-auto lg:px-16 px-12 pt-8'>
      <section className="sidebar-section mb-4 border-b pb-2">
        <div className="sidebar-title-link">
          <Link href="/" className="flex items-center gap-2  ">
            <div className="relative h-6 w-6 overflow-hidden mr-2 rounded-md" >
              <Image
                      src={'/images/sidebar/Home.png'}
                      alt={`logo`}
                      fill
                      className="object-cover"
                    />
            </div>

            <span className="site-name hover:underline lg:decoration-4 decoration-2 lg:text-base text-xs font-bitcount">fasith.io</span>
          </Link>
        </div>
      </section>

      {/* <section className="sidebar-section mb-8">
        <div className="sidebar-content">
          <p>
            I&apos;m <Link href="/me">Fasith</Link>, software engineer and open-source
            creator. This is my digital garden. 🌱
          </p>
        </div>
      </section> */}
      <Menu />
      <Timeline />
      
    </div>
        <Footer />
    </aside>
  )
}
