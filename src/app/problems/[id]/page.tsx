import { Splits } from '@/app/components/Splits/Splits';
import { notFound } from 'next/navigation';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { fireStore } from '@/firebase/firebase';
import { Problem } from '@/app/types';

export const revalidate = 60*60*24;

export async function generateStaticParams() {
  const querySnapshot = await getDocs(collection(fireStore, 'approved-problems-ids'));
  const params: {id: string}[] = [];
  querySnapshot.forEach((doc) => {
    params.push({id: doc.id});
  });

  return params;
}

export async function getProblemData(id: string): Promise< Problem | null>{
  const docRef = doc(fireStore, `problems/${id}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      title: docSnap.data().title,
      statement: docSnap.data().statement,
      category: docSnap.data().category,
      difficulty: docSnap.data().difficulty,
      likes: docSnap.data().likes,
      constraints: docSnap.data().constraints,
      handler: docSnap.data().handler,
      starter: docSnap.data().starter
    }
  } else {
    return null;
  }
}

export default async function SingleProblem({ params }: { params: {id: string}}){
  const problemData = await getProblemData(params.id);
  if(!problemData) notFound();
  return <Splits problem={problemData}/>
}