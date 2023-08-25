import { Navbar } from '@/app/components/navBar/NavBar'

export default function ProblemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
      <Navbar onProblemPage={true} />
        <section>
          {children}
        </section>
    </>

}