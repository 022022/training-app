import Link from 'next/link'
import { Navbar } from '../components/navBar/NavBar'
import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
    <Link href='/'>
      <Image src='/certificate.svg' alt='Coding Training Logo' width='48' height='48'/>
    </Link>
      {children}
    </section>
  )
}