import { Navbar } from '@/app/components/navBar/NavBar'

export default function ProblemsListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    <Navbar />
    <section>
      {children}
    </section>
  </>
}