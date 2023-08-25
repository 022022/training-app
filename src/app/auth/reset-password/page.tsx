'use client'
import { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase";
import { ButtonLoader } from '../../components/navBar/ButtonLoader';
import { firebaseErrors } from '@/firebase/errors';

export default function ResetPassword() {
  const [formValues, setFormValues] = useState({email: ''});

  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setFormValues(() => ({...formValues, [e.target.name]: e.target.value}));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const success = await sendPasswordResetEmail(formValues.email);
  }

  return  <div className='flex flex-col justify-center items-center pt-[10%]'>
  <div  className='w-[270px]'>
    <h1 className='text-center pb-6'>Reset Password</h1>
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


      { sending ?  <ButtonLoader />   :
        <button className='mt-4 w-full focus:ring-blue-300 font-medium rounded-lg
              border-2 border-gray-600 px-5 py-2.5 text-center hover:bg-gray-300'
        >Reset Password </button>
      }
    </form>
  </div>
</div>
}