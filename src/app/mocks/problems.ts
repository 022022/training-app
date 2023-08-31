interface Problem {
  id: string,
  title: string,
  difficulty: 'easy' | 'medium' | 'hard',
  category: string
}

export const problems: Problem[] = [
  {
    id: '1',
    title: 'testName1',
    difficulty: 'easy',
    category: 'testCategory1',
  },
  {
    id: '2',
    title: 'testName2',
    difficulty: 'easy',
    category: 'testCategory2',
  },
  {
    id: '3',
    title: 'testName3',
    difficulty: 'easy',
    category: 'testCategory3',
  },

]