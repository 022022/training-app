import Link from 'next/link';
import { problems } from '../mocks/problems';

export default function ProblemsList(){

  return <div  className='flex justify-center'>
    <table>
      <thead className='border-b'>
        <tr>
          <th scope='col' className='w-0 px-4 py-3'>Solved</th>
          <th scope='col' className='w-0 px-2 py-3'>Id</th>
          <th scope='col' className='w-0 px-4 py-3'>Title</th>
          <th scope='col' className='w-0 px-4 py-3'>Difficulty</th>
          <th scope='col' className='w-0 px-4 py-3'>Category</th>
        </tr>
      </thead>

      <tbody>

        { problems.map((problem, i) =>
          <tr key={problem.id} className={ i%2 === 0 ? ' bg-slate-600 text-slate-100' : ''}>
            <td className='px-2 py-3 w-0'> </td>
            <td className='px-2 py-3 w-0'>{problem.id}</td>

            <td className='px-4 py-3 w-0 hover:underline'>
                <Link href={`/problems/${problem.id}`}>
                    {problem.title}
                </Link>
            </td>

            <td className='px-4 py-3 w-0'>{problem.difficulty}</td>
            <td className='px-4 py-3 w-0'>{problem.category}</td>
          </tr>
        ) }

      </tbody>
    </table>
	</div>
}