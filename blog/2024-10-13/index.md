---
slug: TypeScript 进阶
title: TypeScript 进阶
authors: [hzm]
tags: [TypeScript]
---
## 类型

### 原始类型
* `boolean`: 表示布尔值 (true 或 false)。
* `number`: 表示数字（支持整数和浮点数）。
* `string`: 表示字符串。
* `null`: 表示 null 值。
* `undefined`: 表示 undefined 值。
* `symbol`: 用于创建唯一值的类型。
* `bigint`: 表示大整数。

### 复杂类型
* 数组类型：`[]` 或 `Array<T>`。
* 对象类型：`{}`。
* object 类型：`object`, **表示非原始类型**。
* Object 类型：**所有类型（包括原始类型）的基类**。
* 元组类型：`[T1, T2, ...]`。
* 枚举类型：`enum`。
* 函数类型：`(args) => returnType`。
* 类类型：`class`。
* 接口类型：`interface`。
* 泛型类型：`<T>`。
* 类型别名：`type`。
* any 类型：`any`。
* unknown 类型：`unknown`。
* void 类型：`void`。
* never 类型：`never`。
* Promise 类型：`Promise<T>`。

### 联合类型
**语法形式：**
```ts
let value: string | number;
type Direction = "up" | "down" | "left" | "right";
```
**使用：**  
只有在对`联合的每个成员都有效`的情况下才允许操作。
```ts
function example(value: string | number) {
  // 报错 toUpperCase 不属于 number 类型上的方法
  console.log(value.toUpperCase());
}
```
可以使用类型保护来进一步确定类型。
```ts
function example(value: string | number) {
  if (typeof value === "string") {
    // 这里 TypeScript 知道 value 是 string 类型
    console.log(value.toUpperCase());
  } else {
    // 这里 TypeScript 知道 value 是 number 类型
    console.log(value * 2);
  }
}
```
当处理对象的属性时，`in` 运算符可以用来检查对象是否具有某个属性：
```ts
type Bird = { fly: () => void };
type Fish = { swim: () => void };

function move(animal: Bird | Fish) {
    if ('fly' in animal) {
        animal.fly();
    } else {
        animal.swim();
    }
}
```
**合并联合类型**  
```ts
type UnionA = 'px' | 'em' | 'rem' | '%';

type UnionB = 'vh' | 'em' | 'rem' | 'pt';

type IntersectionUnion = UnionA & UnionB; // 'em' | 'rem'
```
**类型缩减**  
```ts
type URStr = 'string' | string; // 类型是 string

type URNum = 2 | number; // 类型是 number

type URBoolen = true | boolean; // 类型是 boolean

enum EnumUR {
  ONE,
  TWO
}

type URE = EnumUR.ONE | EnumUR; // 类型是 EnumUR

```
### 交叉类型
**语法形式：**
```ts
type Useless = string & number;
```
### 枚举类型
**语法形式：**
```ts
enum Day {
  SUNDAY = 'SUNDAY',
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
}  
```
:::tip
枚举是一种比较特殊的类型，因为它兼具`值和类型`于一体
:::
**数字枚举**  
```ts
enum Day {
  SUNDAY = 1,
  MONDAY,
  TUESDAY,
}
```
会从1开始数字递增


### 函数类型
**基本的函数类型定义：**
```ts
function add(x: number, y: number): number {
    return x + y;
}
```
**函数表达式类型定义：**
```ts
type Fn = (x: number, y: number) => number;
let myAdd: Fn = function(x: number, y: number): number { return x + y; };
```
**this 定义：**
```ts
function say(this: Window, name: string) {
    console.log(this.name);
}

window.say = say;
window.say('hi');
const obj = {
    say
};

obj.say('hi'); // ts(2684) The 'this' context of type '{ say: (this: Window, name: string) => void; }' is not assignable to method's 'this' of type 'Window'.
```
**函数重载**  
根据传递的参数类型不同，函数可以有不同的行为。可以为同一个函数声明多个类型签名。
```ts
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
    if (typeof value === "number") {
        return value * 2;
    } else if (typeof value === "string") {
        return value.repeat(2);
    }
}

console.log(double(5));       // 输出: 10
console.log(double("abc"));   // 输出: abcabc
```
:::tip

函数重载列表的各个成员必须是函数实现的子集

:::
**函数类型谓词**  
语法形式：参数名 + is + 类型
```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

## 类型断言
**语法形式：**
1. 尖括号语法：
```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```
2. `as` 语法（推荐使用）：
```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```
3. `!` 非空断言（不推荐，用类型守卫代替）：
```ts
let someValue: string | null | undefined;
// 使用非空断言，告诉编译器 someValue 不是 null 或 undefined
console.log(someValue!.length);
```

:::tip
类型断言的操作对象必须满足某些`约束关系`，否则我们将得到一个 ts(2352) 错误，即从类型“源类型”到类型“目标类型”的转换是错误的，因为这两种类型不能充分重叠。  
父子、子父类型之间可以使用类型断言进行转换。  
`any` 和 `unknown` 这两个特殊类型属于万金油，因为它们既可以被断言成任何类型，反过来任何类型也都可以被断言成 `any` 或 `unknown`。因此，如果我们想强行“指鹿为马”，就可以先把“鹿”断言为 `any` 或 `unknown`，然后再把 `any` 和 `unknown` 断言为“马”，比如`鹿 as any as 马`。
:::

## 类型别名
**语法形式：**
```ts
type Age = number;
type Point = {
  x: number;
  y: number;
};
type ID = number | string;
```
:::tip
类型别名不能重复定义
:::

## 类型守卫（缩小类型）
使用类型守卫来区分联合类型的不同成员，常用的类型守卫包括 switch、字面量恒等、typeof、instanceof、in 和自定义类型守卫。
**switch**
```ts
 const convert = (c: 'a' | 1) => {
    switch (c) {
      case 1:
        return c.toFixed(); // c is 1
      case 'a':
        return c.toLowerCase(); // c is 'a'
    }
  }
```
**字面量恒等**
```ts
  const convert = (c: 'a' | 1) => {
    if (c === 1) {
      return c.toFixed(); // c is 1
    } else if (c === 'a') {
        return c.toLowerCase(); // c is 'a'
    }
  }
```
**typeof**
```ts
  const convert = (c: 'a' | 1) => {
    if (typeof c === 'number') {
      return c.toFixed(); // c is 1
    } else if (typeof c === 'string') {
        return c.toLowerCase(); // c is 'a'
    }
  }
```
**instanceof**  
```ts
class Dog {
  wang = 'wangwang';
}
class Cat {
  miao = 'miaomiao';
}

const getName = (animal: Dog | Cat) => {
  if (animal instanceof Dog) {
    // Dog
    return animal.wang;
  } else if (animal instanceof Cat) {
    // Cat
    return animal.miao;
  }
}
```
**in**  
```ts
class Dog {
  wang = 'wangwang';
}
class Cat {
  miao = 'miaomiao';
}

const getName = (animal: Dog | Cat) => {
  if ('wang' in animal) { 
    // Dog
    return animal.wang;
  } else if ('miao' in animal) { 
    // Cat
    return animal.miao;
  }
}
```
**is**
```ts
const isDog = function (animal: Dog | Cat): animal is Dog {
  return 'wang' in animal;
}
const getName = (animal: Dog | Cat) => {
  if (isDog(animal)) {
    return animal.wang;
  }
}
```

## 类型兼容


| 赋值类型/被赋值类型 | any | unknown | object | void | undefined | null | never |
|:----------:|:---:|:-------:|:------:|:----:|:---------:|:----:|:-----:|
|    any     |  ✓  |    ✓    |   ✓    |  ✓   |     ✓     |  ✓   |   ✕   |
|  unknown   |  ✓  |    ✓    |   ✕    |  ✕   |     ✕     |  ✕   |   ✕   |
|   object   |  ✓  |    ✓    |   ✓    |  ✕   |     ✕     |  ✕   |   ✕   |
|    void    |  ✓  |    ✓    |   ✕    |  ✓   |     ✕     |  ✕   |   ✕   |
| undefined  |  ✓  |    ✓    |   ✓    |  ✓   |     ✓     |  ✓   |   ✕   |
|    null    |  ✓  |    ✓    |   ✓    |  ✓   |     ✓     |  ✓   |   ✕   |
|   never    |  ✓  |    ✓    |   ✓    |  ✓   |     ✓     |  ✓   |   ✓   |


## 泛型


<comment/>
