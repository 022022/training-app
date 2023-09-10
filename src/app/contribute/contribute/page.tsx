'use client'
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";
import { fireStore } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';

export default function Contribute(){
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    title: '',
    statement: '',
    constraints: '',
    handler: '',
    starter: '// Your code here',
    difficulty: 'easy',
    category: ''
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>){
    setFormValues((prevFormValues) => ({...prevFormValues, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const newProblem = {...formValues, handler: JSON.stringify(formValues.handler), likes: 0}

    try {
      await setDoc(doc(fireStore, "problems", makeId(newProblem.title)), newProblem);
			router.push('sent');
		} catch (fetchError: any) {
      console.log(fetchError.message)
		}
  }

  function makeId(title: string){
    const id = [];
    const alphabet = Array(26).fill(0).map((_, n) => String.fromCharCode(n + 97));
    for(const char of title){
      if(alphabet.includes(char.toLowerCase())){
        id.push(char.toLowerCase());
      } else if (id[id.length - 1] !== '-'){
        id.push('-');
      }
    }
    return id.join('');
  }

  return <div className='grid place-items-center py-6'>
  <h1> Contribute</h1>
  <form className='w-[300px]' onSubmit={handleSubmit}>
    <label>
      Title
      <input name='title' type='text'
        onChange={handleChange}
        value={formValues.title}
         className='w-full border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
></input>
    </label>
    <label>
      Difficulty
      <input name='difficulty' type='text'
        onChange={handleChange}
        value={formValues.difficulty}
         className='w-full border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
></input>
    </label>
    <label>
      Category
      <input name='category' type='text'
        onChange={handleChange}
        value={formValues.category}
         className='w-full border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
></input>
    </label>
    <label>
      Problem Statement
      <textarea name='statement'
      onChange={handleChange}
      value={formValues.statement}
      className='w-full border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
></textarea>
    </label>

    <label>
      Constraints
      <textarea name='constraints' value={formValues.constraints}
      onChange={handleChange} className='w-full border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
></textarea>
    </label>
    <label>
      Handler (args[] & answers[] object, example: {`{args: [[1,2], [3,5]], answers: [3, 8]}`})
      <textarea name='handler' value={formValues.handler}
      onChange={handleChange} className='w-full border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
></textarea>
    </label>
    <label>
      Starter Code (String)
      <textarea name='starter' value={formValues.starter}
      onChange={handleChange} className='w-full border-2 p-2 border-gray-600 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500'
></textarea>
    </label>

    <button
      className='mt-4 w-full focus:ring-blue-300 font-medium rounded-lg
                border-2 border-gray-600 px-5 py-2.5 text-center hover:bg-gray-300'>
      Submit
    </button>
  </form>
</div>
}