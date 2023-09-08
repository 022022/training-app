import { Navbar } from '@/app/components/navBar/NavBar'

export default function ContributeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
      <Navbar/>
        <section>
          {children}
        </section>
    </>

}