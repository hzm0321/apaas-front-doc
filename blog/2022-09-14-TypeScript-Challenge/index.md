---
slug: TypeScript Challenge
title: TypeScript Challenge
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
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

```
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
type Awaited<T extends Promise<unknown>> = T extends Promise<infer P> ? P extends Promise<unknown> ? Awaited<P> : P : never
```
</details>

### 268. If

实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型 `T` ，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`， `T` 和 `F` 可以是任意类型。

例如：

```ts
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```

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

type Includes<T extends readonly unknown[], U> = T extends [infer F, ...infer R] ? Equal<F, U> extends true ? true : Includes<R, U> : false
```
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

