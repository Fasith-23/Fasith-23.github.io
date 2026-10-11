'use client'
import {Sidebar} from "../components/sidebar";
import {Menu} from "../components/menu";
import {Footer} from "../components/footer";
export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <div className="h-screen w-full  bg-content">
  <div className="grid h-screen overflow-hidden w-full  grid-cols-1 gap-8 md:grid-cols-[2fr_5fr] lg:grid-cols-[4fr_11fr] xl:grid-cols-[1fr_3fr]">
    {/* Sidebar */}
    <aside className="hidden min-h-0 overflow-y-auto md:sticky md:top-0 md:flex md:flex-col">
      <Sidebar />
    </aside>

    {/* Scrollable content */}
    <main className="flex min-h-0 overflow-y-auto flex-col px-6 pt-8 pb-32 sm:pb-8 sm:px-16  md:px-8 md:pr-12 md:pt-16">
      <div className="md:hidden ">
        <Menu />
      </div>

      <div className="flex-1">
        {children}
      </div>

      <footer className="border-t border-line">
        <div className="md:hidden">
          <Footer />
        </div>

        <div className="flex justify-between gap-2 text-sm font-bitcount text-body md:pt-2">
          <span className="text-sidebar">Made with ♥</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  </div>
</div>

  );
}
