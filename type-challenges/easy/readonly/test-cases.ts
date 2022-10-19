import type { Equal, Expect } from '@type-challenges/utils'
// Expect 期待 断言
// Equal 相同

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
