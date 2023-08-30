'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { auth } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation';

export default function SignUp(){
  const router = useRouter();

  const [formValues, setFormValues] = useState({email: '', password: ''});

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setFormValues((prevFormValues) => ({...prevFormValues, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
			const newUser = await createUserWithEmailAndPassword(formValues.email, formValues.password);
			if (!newUser) return;
			router.push('/');
		} catch (fetchError: any) {
      // Catch clause variable type annotation must be 'any' or 'unknown' if specified.ts(1196)
      console.log(fetchError.message)
		}
  }

  useEffect(() => {
		if (error) console.log(error.message);
	}, [error]);

  return <div className='flex flex-col justify-center items-center pt-[10%]'>
    <div  className='max-w-[300px]'>
      <h1 className='text-center pb-6'>Login</h1>
      <form className='flex flex-col gap-8' onSubmit={handleSubmit}>

        <div>
          <label>
            <div className='text-sm font-medium block text-gray-600'>E-mail:</div>
            <input name='email' id='email' type='email' required aria-describedby='email-validation'
              className='border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
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
              className='p-2 border-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
              placeholder='******'
              value={formValues.password}
              onChange={handleChange}
            />
            <div id="password-validation" className="hidden"></div>
          </label>
        </div>
        <button className='mt-4 w-full focus:ring-blue-300 font-medium rounded-lg
              border-2 border-gray-600 px-5 py-2.5 text-center hover:bg-gray-300'
			  >Sign Up</button>
      </form>
      <Link href='/register' className='flex justify-center pt-8 hover:underline'>Log In</Link>
      <Link href='/forgot-password' className='flex justify-center pt-8 hover:underline'>Forgot password?</Link>
    </div>
  </div>
}