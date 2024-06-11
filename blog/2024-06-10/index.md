---
slug: 堆算法总结
title: 堆算法总结
authors: [hzm]
tags: [堆, 堆排序]
---

阅读本篇需要对二叉树及其结构有基本的了解。

### 概念

堆一定是一颗`完全二叉树`, 按排序大小规则主要分为 2 种类型————`最大堆`和`最小堆`。

* **最大堆**：根节点的值大于等于左右子节点的值。
* **最小堆**：根节点的值小于等于左右子节点的值。

总结：最大堆和最小堆的根本区别在于根节点的最值情况。

### Heap 类设计
在堆算法解题中，一般都需要设计一个 `Heap 类`，用于实现`最大堆`和`最小堆`的通用操作。

<!--truncate-->

#### 成员变量设计
在堆排序中仅需要一个数组结构，用于表达二叉树即可。
* **heapArr** = []

#### 操作方法设计
在实际书写中应当遵循由基础工具方法到具体逻辑方法的顺序。

**工具方法：**

<details>
<summary>

* **getParentIndex(i)**: 获取父节点索引

</summary>
<div>

```ts
getParentIndex(i) {
  return Math.floor((i - 1) / 2);
}
```

</div>
</details>

<details>
<summary>

* **getLeftChildIndex(i)**: 获取左子节点索引

</summary>
<div>

```ts
getLeftChildIndex(i) {
  return 2 * i + 1;
}
```

</div>
</details>

<details>
  <summary>

* **getRightChildIndex(i)**: 获取右子节点索引

</summary>
<div>

```ts
getRightChildIndex(i) {
  return 2 * i + 2;
}
```

</div>
</details>

<details>
  <summary>

* **size()**: 堆元素的数量

</summary>
<div>

```ts
size() {
  return this.heapArr.length;
}
```

</div>
</details>

<details>
  <summary>

* **peek()**: 访问堆顶元素（注意是访问，不是取出）

</summary>
<div>

```ts
peek() {
  return this.heapArr[0];
}
```

</div>
</details>

<details>
  <summary>

* **swap(i，j)**: 交换堆中的两个元素

</summary>
<div>

```ts
swap(i, j) {
  const temp = this.heapArr[i];
  this.heapArr[i] = this.heapArr[j];
  this.heapArr[j] = temp;
}
```

</div>
</details>

有了以上几个工具方法之后，接下来开始考虑建堆的核心操作。  

堆化的过程主要分 2 种情况——**自上而下堆化**、**自下而上堆化**。  
这里以最大堆为例：

<details>
  <summary>

* **siftDown**: 自上而下堆化

</summary>
<div>

```ts
siftDown(i) {
  while (true) {
    // 分别获取左右节点索引
    const leftIndex = this.getLeftChildIndex(i);
    const rightIndex = this.getRightChildIndex(i);
    // 最大值的索引
    let maxIndex = i;
    // 如果有左节点且左节点大于当前节点，则更新最大值索引
    if (leftIndex < this.size() && this.heapArr[leftIndex] > this.heapArr[maxIndex]) {
      maxIndex = leftIndex;
    }
    // 如果有右节点且右节点大于当前节点，则更新最大值索引
    if (rightIndex < this.size() && this.heapArr[rightIndex] > this.heapArr[maxIndex]) {
      maxIndex = rightIndex;
    }
    // maxIndex 没发生交换,则结束
    if (maxIndex === i) {
      break;
    }
    // 如果maxIndex 发生了交换，则交换当前节点和最大值节点, 继续循环
    this.swap(i, maxIndex);
    i = maxIndex;
  }
}
```

</div>
</details>
自上而下堆化目的是从根节点开始，依次比较当前节点和左右子节点，将较大的值与当前节点交换，然后继续比较交换后的节点。

<details>
  <summary>

* **siftUp**: 自下而上堆化

</summary>
<div>

```ts
siftUp(i) {
  while (i > 0) {
    const parentIndex = this.getParentIndex(i);
    if (this.heapArr[i] <= this.heapArr[parentIndex]) {
      break;
    }
    // 如果当前元素大于父节点，则交换
    this.swap(i, parentIndex);
    i = parentIndex;
  }
}
```

</div>
</details>
自下而上堆化目的是从叶子节点开始，依次比较当前节点和父节点，将较小的值与当前节点交换，然后继续比较交换后的节点。  

在往堆中追加一个元素时，会从完全二叉树的末尾插入，然后通过**自下而上堆化**操作将其移动到合适位置。
<details>
  <summary>

* **push**: 往堆中追加元素

</summary>
<div>

```ts
push(val) {
  this.heapArr.push(val);
  this.siftUp(this.size() - 1);
}
```

</div>
</details>

在从堆中取出一个元素时，为了尽可能减少交换次数，将堆顶元素和最后一个元素交换，然后通过**自上而下堆化**操作将其移动到合适位置。
<details>
  <summary>

* **pop**: 堆顶元素出堆

</summary>
<div>

```ts
pop() {
  if (this.size() === 1) {
    return this.heapArr.pop();
  }
  // 交换堆顶元素和最后一个元素
  const result = this.heapArr[0];
  this.heapArr[0] = this.heapArr.pop();
  this.siftDown(0);
  return result;
}
```

</div>
</details>

至此，堆的常用操作已经全部实现了。
完整代码：
```js
class Heap {
  heapArr = []

  constructor(nums = []) {
    if (nums.length) {
      // 自下而上堆化(除叶节点以外的其他所有节点)
      for (let i = this.getParentIndex(nums.length-1); i >= 0; i--) {
        this.siftDown(i)
        this.heapArr = nums;
      }

    }

  }

  /**
   * 获取父节点
   * @param i
   * @return {number}
   */
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   * 获取左子节点
   * @param i
   * @return {number}
   */
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  /**
   * 获取右子节点
   * @param i
   * @return {number}
   */
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  /**
   * 堆元素数量
   * @return {number}
   */
  size() {
    return this.heapArr.length;
  }

  /**
   * 访问堆顶元素
   */
  peek() {
    return this.heapArr[0];
  }

  /**
   * 元素入堆
   */
  push(val) {
    this.heapArr.push(val);
    this.siftUp(this.size() - 1);
  }

  /**
   * 从低到顶堆化
   */
  siftUp(i) {
    while (i > 0) {
      const parentIndex = this.getParentIndex(i);
      if (this.heapArr[i] <= this.heapArr[parentIndex]) {
        break;
      }
      this.swap(i, parentIndex);
      i = parentIndex;
    }
  }

  /**
   * 从顶到低堆化
   * @param i
   */
  siftDown(i) {
    while (true) {
      const leftIndex = this.getLeftChildIndex(i);
      const rightIndex = this.getRightChildIndex(i);
      let maxIndex = i;
      if (leftIndex < this.size() && this.heapArr[leftIndex] > this.heapArr[maxIndex]) {
        maxIndex = leftIndex;
      }
      if (rightIndex < this.size() && this.heapArr[rightIndex] > this.heapArr[maxIndex]) {
        maxIndex = rightIndex;
      }
      // maxIndex 没发生交换,则结束
      if (maxIndex === i) {
        break;
      }
      this.swap(i, maxIndex);
      i = maxIndex;
    }
  }

  /**
   * 交换堆中两个元素
   * @param i
   * @param j
   */
  swap(i, j) {
    const temp = this.heapArr[i];
    this.heapArr[i] = this.heapArr[j];
    this.heapArr[j] = temp;
  }

  /**
   * 堆顶元素出堆
   * @return {*}
   */
  pop() {
    if (this.size() === 1) {
      return this.heapArr.pop();
    }
    // 交换堆顶元素和最后一个元素
    const result = this.heapArr[0];
    this.heapArr[0] = this.heapArr.pop();
    this.siftDown(0);
    return result;
  }
}
```

### 解决的问题
#### Top-k 问题
Top-k 问题涉及从一组数据中找到最大的 k 个元素（或最小的 k 个元素）。  
如：[Leetcode 347. 前 K 个高频元素](https://leetcode.cn/problems/top-k-frequent-elements/description/)
