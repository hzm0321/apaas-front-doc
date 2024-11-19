---
slug: 栈算法总结
title: 栈算法总结
authors: [hzm]
tags: [栈, 单调栈]
---

### 基本栈结构
栈遵循`先入后出`逻辑的线性数据结构。
<div align="center">
    <img src={require('./assets/stack.jpg').default} alt="node" width="100%" />
</div>

#### 操作
* **push(val)**: 入栈
* **pop()**: 出栈
* **peek()**: 访问栈顶

<!--truncate-->

#### 解决的问题
* 有效括号判断: 如 [Leetcode 20. 有效括号](https://leetcode.cn/problems/valid-parentheses/description/)

### 单调栈
单调栈的核心思想是通过维护一个`单调递增`或`单调递减`的栈，使得每个元素的入栈和出栈操作都保持栈的单调性，从而在遍历数组时能够快速找到所需的元素位置。  
这样可以将一些需要二重循环才能解决的问题优化到线性时间复杂度。

#### 解决的问题
* 下一个更大/更小元素问题：如 [Leetcode 1475. 商品折扣后的最终价格](https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/description/)
* 栈的最小值: 如 [Leetcode 面试题 03.02. 栈的最小值](https://leetcode.cn/problems/min-stack-lcci/description/)

<comment/>
