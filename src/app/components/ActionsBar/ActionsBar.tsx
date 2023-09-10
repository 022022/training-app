'use client'
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function ActionsBar({submitSolution} : {submitSolution: () => void}){
  const [userLogged] = useAuthState(auth);

  return <div className='absolute bottom-0 right-0 w-full  bg-white'>
          <button
            disabled={!userLogged}
            className='absolute bottom-0 right-0 border border-gray-600 px-5 py-2.5 rounded-lg'
            onClick={submitSolution}
            >
            Submit
          </button>
      </div>
}