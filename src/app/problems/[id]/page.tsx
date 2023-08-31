import { mockDB } from '@/app/mocks/singleProblem';
import { Splits } from '@/app/components/Splits/Splits';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

export default function SingleProblem({ params }: { params: {id: string}}){
  if(!mockDB[params.id]) notFound()
  return <Splits problem={mockDB[params.id]}/>
}