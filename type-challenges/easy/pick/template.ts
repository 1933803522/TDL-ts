type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 对比学习法
// 先用js写逻辑 再转成ts

// Mypick 接受两个泛型（对比js函数里的参数）
// T 是
// interface Todo {
//     title: string
//     description: string
//     completed: boolean
//   }

// K 相当于一个数组

// MyPick返回一个对象

function fn(obj, keys) {
  let res = {}
  keys.forEach(key => {
    if (obj.key) {
      res[key] = obj[key]
    }
  })

  return res
}

/**
 * 实现思路：
 *  1.返回一个对象
 *  2.遍历keys得到key
 *  3.判断key在obj中
 *  4.将key赋值给新对象
 */
