---
slug: TypeScript Challenge
title: TypeScript Challenge
authors: [hzm]
tags: [TypeScript]
---

TypeScript 类型体操，让你的 TypeScript 代码更加健壮。题库地址: [TypeScript Challenge](https://github.com/type-challenges/type-challenges)

<!--truncate-->

### 热身

#### 13. Hello World

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

### 简单

#### 4. Pick

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
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```
</details>
