import Image from 'next/image';
import Link from 'next/link';

export function Navbar(){
  return <nav className='flex justify-between items-center'>
    <Link href='/'>
      <Image src='/certificate.svg' alt='Coding Training Logo' width='48' height='48'/>
    </Link>

    <Link href='/train'>Train</Link>
    <Link href='/sign-in'>Sign In</Link>
  </nav>
}