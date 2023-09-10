import Link from 'next/link';

export default function NotFound(){
  return <>
      <main className='flex flex-col justify-center items-center h-screen'>
          <p>Sorry, we could not this problem.</p>
          <p>Try to start from the <Link href='/problems-list'>Problems List Page</Link></p>
        </main>
    </>
}