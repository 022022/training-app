import Link from 'next/link';
import { Navbar } from './components/navBar/NavBar';

export default function NotFound(){
  return <>
      <Navbar />
      <main className='flex flex-col justify-center items-center h-screen'>
          <p>Sorry, we could not find the page you were looking for.</p>
          <p>Try to start again from the <Link href='/'>the Main Page</Link></p>
        </main>
    </>
}