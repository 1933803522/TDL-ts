import type { Equal, Expect, NotAny } from '@type-challenges/utils'
// Expect 断言
// Equal 相等

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
