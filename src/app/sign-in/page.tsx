import Link from 'next/link';

export default function SignIn(){
  return <div className='flex flex-col justify-center items-center pt-[10%]'>
    <div  className='max-w-[300px]'>
      <h1 className='text-center pb-6'>Login</h1>
      <form className='flex flex-col gap-8'>

        <div>
          <label>
            <div className='text-sm font-medium block text-gray-600'>E-mail:</div>
            <input name='email' id='email' type='email' required aria-describedby='email-validation'
              className='border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
              placeholder='smb@smth.domain'
            />
            <div id="email-validation" className="hidden"></div>
          </label>
        </div>

        <div>
          <label>
            <div className='text-sm font-medium block text-gray-600'>Пароль:</div>
            <input name='password' id='password' type='password' required aria-describedby='password-validation'
              className='p-2 border-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
              placeholder='******'
            />
            <div id="password-validation" className="hidden"></div>
          </label>
        </div>
        <button className='mt-4 w-full focus:ring-blue-300 font-medium rounded-lg
              border-2 border-gray-600 px-5 py-2.5 text-center hover:bg-gray-300'
			  >Log in </button>
      </form>
      <Link href='/register' className='flex justify-center pt-8 hover:underline'>Register</Link>
      <Link href='/forgot-password' className='flex justify-center pt-8 hover:underline'>Forgot password?</Link>
    </div>
  </div>
}