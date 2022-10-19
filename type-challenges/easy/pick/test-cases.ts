import type { Equal, Expect } from '@type-challenges/utils'
// Equal 相同
// Expect 断言

type cases = [
  // 断言 Expected1 和 MyPick<Todo, 'title'> 是相同的
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,

  // 断言 Expected2 和 MyPick<Todo, 'title' | 'completed'> 是相同的
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
