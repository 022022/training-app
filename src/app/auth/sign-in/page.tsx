'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase";
import { firebaseErrors } from '@/firebase/errors';
import { ButtonLoader } from '../../components/ButtonLoader/ButtonLoader';

export default function SignIn(){
  const router = useRouter();

  const [formValues, setFormValues] = useState({email: '', password: ''});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setFormValues((prevFormValues) => ({...prevFormValues, [e.target.name]: e.target.value }))
  }

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
			const user = await signInWithEmailAndPassword(formValues.email, formValues.password);
			if (!user) return;
      console.log(user);

			router.push('/');
		} catch (fetchError: any) {
      console.log(fetchError.message)
		}
  }

  return <div className='flex flex-col justify-center items-center pt-[10%]'>
    <div  className='w-[270px]'>
      <h1 className='text-center pb-6'>Sign In</h1>
      <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
        { error ? <div id='validation' className='text-center'>{firebaseErrors[error.message]}</div> : null }
        <div>
          <label>
            <div className='text-sm font-medium block text-gray-600'>E-mail:</div>
            <input name='email' id='email' type='email' required aria-describedby='email-validation'
              className='w-full border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
              placeholder='smb@smth.domain'
              value={formValues.email}
              onChange={handleChange}
            />
            <div id="email-validation" className="hidden"></div>
          </label>
        </div>

        <div>
          <label>
            <div className='text-sm font-medium block text-gray-600'>Пароль:</div>
            <input  name='password' id='password' type='password' required aria-describedby='password-validation'
              className='w-full p-2 border-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
              placeholder='******'
              value={formValues.password}
              onChange={handleChange}
            />
            <div id="password-validation" className="hidden"></div>
          </label>
        </div>

        { loading ?  <ButtonLoader />   :
          <button className='mt-4 w-full focus:ring-blue-300 font-medium rounded-lg
                border-2 border-gray-600 px-5 py-2.5 text-center hover:bg-gray-300'
          >Log in </button>
        }


      </form>
      <Link href='sign-up' className='flex justify-center pt-8 hover:underline'>Sign Up</Link>
      <Link href='reset-password' className='flex justify-center pt-8 hover:underline'>Forgot password?</Link>
    </div>
  </div>
}