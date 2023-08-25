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
      <div className='group cursor-pointer relative' aria-labelledby='user-tooltip'>
        <p>Avatar icon</p>
        <div className='absolute left-2/4 -translate-x-2/4 mx-auto w-max
                  p-2 rounded shadow-lg
                  scale-0 group-hover:scale-100
                  transition-all duration-200 ease-in-out' id='user-tooltip'>{userLogged.email}
        </div>
      </div>


      <button onClick={signOut}>Log out</button>
      </>
      : <Link href='/auth/sign-in'>Sign In</Link>
    }
  </nav>
}