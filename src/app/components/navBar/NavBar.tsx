'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase";

export function Navbar(){
  const [userLogged, loadingLogged, errorLogged] = useAuthState(auth);

  const [signOut, loading, error] = useSignOut(auth);

  return <nav className='flex justify-between items-center'>
    <Link href='/'>
      <Image src='/certificate.svg' alt='Coding Training Logo' width='48' height='48'/>
    </Link>

    <Link href='/train'>Train</Link>

    {userLogged ? <button onClick={signOut}>Log out</button> : <Link href='/sign-in'>Sign In</Link>}
  </nav>
}