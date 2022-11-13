---
slug: TypeScript Operator
title: TypeScript 操作符
authors: [hzm]
tags: [TypeScript]
---

## 三类空间

- **命名空间**  
  声明的分类，不是具体的实体。一个命名空间内可以包含值或类型。对命名空间建立应用需要使用 import 语句，如果使用 const、let 或 var 会使新的实体不再具有命名空间的属性。编译成 JS 代码后会被清除。
- **类型空间**  
  描述一个值的类型。常见有 type、interface、class、enum 等。编译成 JS 代码后会被清除。
- **值空间**  
  真实可参与运算的值。常见有变量、对象、数组、class、enum 等。编译成 JS代码后会被保留。

## 操作符
- `typeof`、`instanceof`：返回更详细的类型
- `keyof`：返回一个对象的属性名称的字符串数组
- `O[K]`：返回对象 K 的值
- `[K in O]`：逐一映射 O 的类型
- `extends`：泛型、类型别名、函数参数、联合类型的条件类型判断
- `infer`：定义类型变量
- `readonly` ：只读
- `?`：可选
- `-?`：去除类型的可选属性
- `!`: 非空断言
- `=`: 泛型的默认值
- `as`: 类型断言
- `is`: 类型谓词，辅助类型推断

<!--truncate-->

### [typeof](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html#handbook-content)

**作用：把值空间的数据转换成类型空间的数据。**

:::tip

在标识符（即变量名）或其属性上使用 `typeof` 才合法，不能作用于执行的代码。  
例：let shouldContinue: typeof msgbox("Are you sure you want to continue?"); // error

:::

常用于导入值空间数据的类型，例：

1. 对 function 值转换，获取其返回值

```ts
function f() {
  return { x: 10, y: 3 };
}

type P = ReturnType<typeof f>; // {x: number ，y: number}
```

2. 对 enum 值转换

```ts
enum Color {
  RED = 'red',
  BLUE = 'blue',
}

type C = typeof Color;

const c: C = {
  RED: Color.RED, // 必须是 Color.RED，不能是 red
  BLUE: Color.BLUE,
}
```

3. 对 object 值转换

```ts
const Color = {
  RED : 'red',
  BLUE : 'blue',
}

type C = typeof Color; // {red: string ，blue: string}
```

4. 对 array 值转换

```ts
const Color = ['red','blue', 1]

type C = typeof Color; // (string|number)[]
```

5. 对基础类型变量，获取其字面量类型

```ts
const str = 'red'

type S = typeof str; // 'red'
```

### [keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

**作用：获取对象或数组等类型的所有键，并返回一个联合类型**

```ts
interface Person {
  name: string
  age: number
}

type K1 = keyof Person  // "name" | "age"

type K2 = keyof []      // "length" | "toString" | "push" | "concat" | "join"

type K3 = keyof { [x: string]: Person }  // string | number
```

1. 对普通对象类型

```ts
interface Person {
  name: string
  age: number
}

type K1 = keyof Person  // "name" | "age"
```

2. 对 string 或 number 签名对象类型

```ts
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; // number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish; // number | string
```

:::tip

JS 的对象 key 类型只能是 `string`、`number` 或 `Symbol` 类型

:::

### [O[K]](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

**作用：使用索引访问类型查找另一种类型的特定属性**

1. 普通访问

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // number
```

2. 联合访问

```ts
type Person = { age: number; name: string; alive: boolean };
type I1 = Person["age" | "name"]; // string | number
```

### [in](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

**作用：对`联合类型`进行遍历**

```ts
type Keys = "firstName" | "lastName";
type Person = {
  [key in Keys]: string;
}; // {firstName: string; lastName: string}
```

### [extends](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)

**作用：根据条件返回结果，类似三元运算符。**

1. 类继承条件

```ts
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type Example1 = Dog extends Animal ? number : string; // number
```

2. 对象属性条件

```ts
type MessageOf<T extends { message: unknown }> = T["message"];
type B = MessageOf<{ message: string }>; // string
```

3. 遍历联合类型

```ts
type OnlyNumber<T> = T extends number ? T : never;
type N = OnlyNumber<1 | 2 | true | "a" | "b">; // 1 | 2
```

4. 不分布的条件类型

```ts
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type R = ToArrayNonDist<string | number>; // (string|number)[]
```

### [infer](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)

**作用：对运算过程中的类型进行存储，类似于定义一个变量。**

1. 对函数返回类型的存储

```ts
type ReturnType<T> = T extends (...args: any) => infer R ? R : any;
type R1 = ReturnType<() => number>; // number
```

### [readonly](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)

**作用：设置类型为只读**

```ts
interface SomeType {
  readonly name: string;
}

const My: SomeType = {
  name: '123'
}

My.name = '456'; // 无法分配到 "name" ，因为它是只读属性。
```

### ?

**作用：设置类型为可选**

```ts
interface SomeType {
  readonly name?: string;
}
const My: SomeType = {}
```

### -?

**作用：去除类型的可选属性(变成必选)**

```ts
interface SomeType {
  readonly name?: string;
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

const My: MyRequired<SomeType> = {}; // 类型 "{}" 中缺少属性 "name"
```
