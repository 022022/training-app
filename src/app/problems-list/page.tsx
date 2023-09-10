'use client'

import Link from 'next/link';
import { collection, doc, getDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, fireStore } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';

export default function ProblemsList(){
  const [value, loading, error] = useCollection(collection(fireStore, 'problems'));
  const [userLogged, loadingLogged, errorLogged] = useAuthState(auth);

  const [solved, setSolved] = useState<string[]>([]);

  useEffect(() => {
    async function getData(){
       if(userLogged){
         const docRef = doc(fireStore, `users/${userLogged.uid}`);
         const docSnap = await getDoc(docRef);

         if(docSnap.exists()){
            setSolved(() => docSnap.data().solved)
         }
       }
    }
   getData();
 }, [userLogged])

  return <>{ loading ? 'Loading...' :
  <div  className='flex justify-center'>
    <table>
      <thead className='border-b'>
        <tr>
          <th scope='col' className='w-0 px-4 py-3 text-left'>Solved</th>
          <th scope='col' className='w-0 px-4 py-3 text-left'>Id</th>
          <th scope='col' className='w-0 px-4 py-3 text-left'>Title</th>
          <th scope='col' className='w-0 px-4 py-3 text-left'>Difficulty</th>
          <th scope='col' className='w-0 px-4 py-3 text-left'>Category</th>
          <th scope='col' className='w-0 px-4 py-3 text-left'>Likes</th>
        </tr>
      </thead>

      <tbody>


        { value?.docs.map((problem, i) =>
          <tr key={problem.id} className={ i%2 === 0 ? ' bg-slate-600 text-slate-100' : ''}>
            <td className='px-4 py-3 w-0'> { solved.includes(problem.id) ? 'Y' : 'N'} </td>
            <td className='px-4 py-3 w-0'>{problem.id}</td>
            <td className='px-4 py-3 w-0 hover:underline'>
                <Link href={`/problems/${problem.id}`}>
                    {problem.data().title}
                </Link>
            </td>

            <td className='px-4 py-3 w-0'>{problem.data().difficulty}</td>
            <td className='px-4 py-3 w-0'>{problem.data().category}</td>
            <td className='px-4 py-3 w-0'>{problem.data().likes}</td>
          </tr>
        ) }

      </tbody>
    </table>
	</div>
  }
  </>
}