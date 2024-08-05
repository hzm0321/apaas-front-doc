---
slug: 动态规划总结
title: 动态规划总结
authors: [hzm]
tags: [dp]
---

## 概述
`动态规划`（Dynamic Programming，简称DP）是一种算法设计思想，用于解决具有重叠子问题和最优子结构性质的问题。它通过将复杂问题分解为较小的子问题，避免重复计算相同的子问题，从而提高计算效率。  
基本思想可以概括为以下几个步骤：
1. **定义子问题**：将原问题分解为多个子问题。通常，子问题的解能够组合成原问题的解。
2. **确认状态**：定义问题的状态，一般通过一个或多个变量来描述当前的子问题。例如，在求解最长公共子序列的问题中，状态可以用两个变量来表示序列的长度。
3. **状态转移方程**：找出子问题之间的关系，即状态转移方程。这些方程描述了如何从一个或多个子问题的解得到原问题的解。
4. **初始条件和边界情况**：确定动态规划的初始条件，即最基本的子问题的解，以及边界情况。
5. **求解和优化**：通过迭代或递归方式求解所有子问题，得到最终的解。

<!--truncate-->

## 题型

### 1. 斐波那契数列
斐波那契数列题型是 dp 中的典型应用。它存在明显的递归关系，通常类似于经典的斐波那契数列 F(n) = F(n-1) + F(n-2)

**LeetCode 问题:**

[70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)  
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。  
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

};

// 输入：n = 2 输出：2
// 输入：n = 3 输出：3
```
<details>
  <summary>题解</summary>
<div>

```js
var climbStairs = function(n) {
  if (n < 2) {
    return 1;
  } else {
    const dp = [1, 2];
    for (let i = 2; i < n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp.pop();
  }
};
```
* **状态定义**：dp[n] 表示第 n 层楼梯
* **状态转移方程**：dp[n] = dp[n-1] + dp[n-2]
* **边界条件**：dp[0] = 1, dp[1] = 1

</div>
</details>

[509. 斐波那契数](https://leetcode.cn/problems/fibonacci-number/)  
斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：  
F(0) = 0，F(1) = 1  
F(n) = F(n - 1) + F(n - 2)，其中 n > 1  
给定 n ，请计算 F(n) 。

```js
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

};

// 输入：n = 2 输出：1
// 输入：n = 3 输出：2
```

<details>
  <summary>题解</summary>
<div>

```js
var fib = function(n) {
  const dp = [0, 1];
  if (n <= 1) {
    return dp[n]
  }
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n]

};
```
* **状态定义**：dp[n] 表示第 n 个斐波那契数列
* **状态转移方程**：dp[n] = dp[n-1] + dp[n-2]
* **边界条件**：dp[0] = 0, dp[1] = 1

</div>
</details>

[746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)  
给你一个整数数组 `cost` ，其中 `cost[i]` 是从楼梯第 `i` 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。  
你可以选择从下标为 `0` 或下标为 `1` 的台阶开始爬楼梯。  
请你计算并返回达到楼梯顶部的最低花费。

```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

};
// 输入：cost = [10,15,20] 输出：15
// 输入：cost = [1,100,1,1,1,100,1,1,100,1] 输出：6
```

<details>
  <summary>题解</summary>
<div>

```js
var minCostClimbingStairs = function(cost) {
  const dp = [0, 0];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp.pop()
};
```
* **状态定义**：dp[n] 表示走到第 n 级台阶所需花费
* **状态转移方程**：dp[n] = 选择上一级所需花费(dp[i - 1] + cost[i - 1])和选择上上一级所需花费(dp[i - 2] + cost[i - 2])的最小值
* **边界条件**：dp[0] = 0, dp[1] = 0

</div>
</details>

### 2. Kadane 算法求解最大子数组问题
Kadane 算法是一种用于解决`最大子数组和问题`的高效算法。该问题要求在一个整数数组中找到和最大的连续子数组。Kadane 算法通过线性时间复杂度
𝑂(𝑛) 解决这个问题，是一个非常经典的动态规划应用例子。

[53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)  
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。  

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

};
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4] 输出：6
// 输入：nums = [1] 输出：1
// 输入：nums = [5,4,-1,7,8] 输出：23
```
<details>
  <summary>题解</summary>
<div>

```js
var maxSubArray = function(nums) {
  let globalSum = -Infinity;
  let curSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    curSum = Math.max(value, curSum + value);
    globalSum = Math.max(globalSum, curSum);
  }

  return globalSum;
};
```

</div>
</details>
