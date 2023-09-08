import Link from 'next/link';

export default function Sent(){
  return <main className='flex flex-col justify-center items-center h-screen'>
  <p>The problem is successfully sent.</p>
  <p>We will review it and get back to you soon </p>
    <Link href='contribute'>Contribute another problem</Link>
</main>
}