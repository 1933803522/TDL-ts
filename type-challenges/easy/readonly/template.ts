type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// interface todo {
//   a: string
//   b: string
// }
// type e = keyof todo
// const a: e = 'a'
