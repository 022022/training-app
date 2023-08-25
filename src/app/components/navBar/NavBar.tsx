'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase";
import { Timer } from './Timer';

export function Navbar({onProblemPage = false}){
  const [userLogged, loadingLogged, errorLogged] = useAuthState(auth);

  const [signOut, loading, error] = useSignOut(auth);

  return <nav className='flex justify-between items-center'>
    <Link href='/'>
      <Image src='/certificate.svg' alt='Coding Training Logo' width='48' height='48'/>
    </Link>

    <Link href='/problems-list'>Problem List</Link>

    {
      onProblemPage &&
      <Timer />
    }

    {userLogged ? <>
      <span>avatar</span>
      <button onClick={signOut}>Log out</button>
      </>
      : <Link href='/auth/sign-in'>Sign In</Link>
    }
  </nav>
}