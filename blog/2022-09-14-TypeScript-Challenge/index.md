---
slug: TypeScript Challenge
title: TypeScript 练习题
authors: [hzm]
tags: [TypeScript]
---

TypeScript 类型体操，让你的 TypeScript 代码更加健壮。题库地址: [TypeScript Challenge](https://github.com/type-challenges/type-challenges)

<!--truncate-->

## 热身

### 13. Hello World

期望 `HelloWorld` 是一个 `string` 类型

```ts
type HelloWorld = any
```

<details>
  <summary>题解</summary>

```ts
type HelloWorld = string
```
</details>

## 简单

### 4. Pick

实现一个 `Pick<T, K>`，从 `T` 中挑选出一系列 `K` 的属性。  

例如：

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

<details>
  <summary>题解</summary>

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```
知识点：  
1. 使用 `in` 操作符遍历联合类型的键

</details>

### 7. Readonly

不要使用内置的`Readonly<T>`，自己实现一个。

该 `Readonly` 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 `readonly` 所修饰。

也就是不可以再对该对象的属性赋值。

例如：

```ts
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```

<details>
  <summary>题解</summary>

```ts
type Readonly<T> = {
  readonly [P in keyof T] : T[P]
}

```
知识点：
1. 使用 `readonly` 创建只读属性
2. 使用 `keyof` 获取对象的键，再用 `in` 进行遍历

</details>

### 11. 元组转换为对象

传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

例如：

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

<details>
  <summary>题解</summary>

```ts
type TupleToObject<T extends readonly PropertyKey[]> = {
  [P in T[number]]: P
}

```
知识点：
1.  `PropertyKey` 属于 TS 内置类型，为 `string | number | symbol` 的联合类型
2. 使用 `T[number]]` 遍历元组类型

</details>

### 14. 第一个元素

实现一个通用`First<T>`，它接受一个数组`T`并返回它的第一个元素的类型。

例如：

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

<details>
  <summary>题解</summary>

```ts
type First<T extends any[]> = T extends [] ? never :  T[0]
```
知识点：
1.  使用索引访问数组类型的元素

</details>

### 18. 获取元组长度

创建一个通用的`Length`，接受一个`readonly`的数组，返回这个数组的长度。

例如：

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

<details>
  <summary>题解</summary>

```ts
type Length<T extends readonly any[]> = T["length"]
```
知识点：
1.  使用 `"length"` 访问元组类型的长度

</details>

### 43. Exclude

实现内置的 `Exclude<T, U>` 类型，但不能直接使用它本身。

> 从联合类型T中排除U的类型成员，来构造一个新的类型。

例如：

```ts
type Result = Exclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

<details>
  <summary>题解</summary>

```ts
type Exclude<T, U> = T extends U ? never : T
```
</details>

### 189. Awaited

实现一个 `Awaited<T>`，它接受一个 `Promise` 类型并返回它 resolve 的类型。

例如：`Promise<ExampleType>`，请你返回 ExampleType 类型。

```ts
type ExampleType = Promise<string>

type Result = Awaited<ExampleType> // string
```

<details>
  <summary>题解</summary>

```ts
type MyAwaited<T extends PromiseLike<any>> = 
  T extends PromiseLike<infer R> 
    ? R extends PromiseLike<any> 
      ? MyAwaited<R> 
      : R 
    : never
```
知识点：
1. 使用 `PromiseLike` 判断数据类型是否为类似 `Promise` 的类型
2. 使用 `infer` 接收 `Promise` `resolve` 的变量
3. 递归判断 `Promise` 的 `resolve` 类型是否为 `Promise` 类型（Promise 具备值穿透的特性）

</details>

### 268. If

实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。

例如：

```ts
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

<details>
  <summary>题解</summary>

```ts
type If<T extends boolean, A ,B> = T extends true ? A : B;
```
</details>

### 533. Concat

在类型系统里实现 JavaScript 内置的 `Array.concat` 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

例如：

```ts
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

<details>
  <summary>题解</summary>

```ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]
```
知识点：
1. 使用 `...` 拼接数组

</details>

### 898. Includes

在类型系统里实现 JavaScript 的 `Array.includes` 方法，这个类型接受两个参数，返回的类型要么是 `true` 要么是 `false`。

例如：

```ts
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
```

<details>
  <summary>题解</summary>

```ts

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly unknown[], U> = T extends [infer F, ...infer R] 
  ? Equal<F, U> extends true 
    ? true 
    : Includes<R, U> 
  : false
```
知识点：
1. 使用 `...` 拼接数组

</details>

### 3057. Push

在类型系统里实现通用的 ```Array.push``` 。

例如：

```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```

<details>
  <summary>题解</summary>

```ts
type Push<T extends unknown[], U> = [...T, U]
```
</details>

### 3060. Unshift

实现类型版本的 ```Array.unshift```。

例如：

```typescript
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```

<details>
  <summary>题解</summary>

```ts
type Unshift<T extends unknown[], U> = [U, ...T]
```
</details>

### 3312. Parameters

实现一个 `Parameters<T>`，它接受一个函数类型 `T` 并返回一个由参数类型组成的元组。

例如：

```ts
const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
```

<details>
  <summary>题解</summary>

```ts
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never
```
知识点：
1. 使用 `infer` 接收函数参数类型

</details>

## 中等

### 2. 获取函数返回类型

不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 泛型。

例如：

```ts
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
```
<details>
  <summary>题解</summary>

```ts
type ReturnType<T extends (...args: any[])=> any> = T extends (...args: any[]) => infer R ? R : any
```
知识点：
1. 使用 `infer` 接收函数返回类型

</details>

### 3. Omit

不使用 `Omit` 实现 TypeScript 的 `Omit<T, K>` 泛型。

`Omit` 会创建一个省略 `K` 中字段的 `T` 对象。

例如：

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```

<details>
  <summary>题解</summary>

```ts
type MyOmit<T, K extends keyof T> = { [P in keyof T as P extends K ? never : P]: T[P] };
```
知识点：
1. 使用 `as` 在 TS 运算中重新定义类型，再次参与后续运算

</details>

### 8. Readonly 2

实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。 

K指定应设置为只读的属性的子集。


例如：

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
```
<details>
  <summary>题解</summary>

```ts
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  readonly [Key in K]: T[Key]
}
```
知识点：
1. 给 `K` 定义默认值，让 `K` 为空时，所有属性都为只读
2. 把结果的类型拆为两部分，一部分为排除了`K`的原有属性，一部分为只读属性

</details>

### 9. 对象属性只读（递归）
实现一个泛型 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。

您可以假设在此挑战中我们仅处理对象。不考虑数组、函数、类等。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。

例如

  ```ts
  type X = {
    x: {
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }

  type Expected = {
    readonly x: {
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey'
  }

  type Todo = DeepReadonly<X> // should be same as `Expected`
  ```

<details>
  <summary>题解</summary>

```ts
type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}
```
知识点：
1. 使用 `keyof` 对对象的值（`T[P]`）进行遍历
2. 递归

</details>

### 10. 元组转合集
实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。

例如

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

<details>
  <summary>题解</summary>

```ts
type TupleToUnion<T extends readonly unknown[]> = T[number]
```
知识点：
1. 使用 `readonly unknown[]` 来定义元组类型
2. 使用 `T[number]` 来遍历元组

</details>

### 12. 可串联构造器
在 JavaScript 中我们经常会使用可串联（Chainable/Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给它赋上类型吗？

在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 `option(key, value)` 和 `get()`。在 `option` 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 `get` 获取最终结果。

例如

  ```ts
  declare const config: Chainable

  const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

  // 期望 result 的类型是：
  interface Result {
    foo: number
    name: string
    bar: {
      value: string
    }
  }
  ```
<details>
  <summary>题解</summary>

```ts
type Chainable<T = {}> = {
  option<K extends PropertyKey, V>(key: K extends keyof T
    ? never
    : K,
    value: V): Chainable<Omit<T, K> & { [P in K]: V }>
  get(): {
    [P in keyof T]: T[P]
  }
}
```
知识点：
1. 定义一个泛型类型 `T`，默认为空对象，让 `T` 可以接受任意类型的参数
2. `K extends keyof T ? never : K` 避免重复的 key
3. `Omit<T, K> & { [P in K]: V }` 使用 `Omit` 从 `T` 中剔除 `K`（新覆盖旧），并添加 `K` 的值为 `V` 的属性

</details>

### 15. 最后一个元素

实现一个`Last<T>`泛型，它接受一个数组`T`并返回其最后一个元素的类型。

例如

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // 应推导出 'c'
  type tail2 = Last<arr2> // 应推导出 1
  ```

<details>
  <summary>题解</summary>

```ts
type Last<T extends any[]> = [never, ...T][T['length']]
```
知识点：
1. 添加一个 `never` 类型的元素，让 `T` 的长度为 `T['length'] + 1`
2. 使用 `T['length']` 来获取最后一个元素

</details>
