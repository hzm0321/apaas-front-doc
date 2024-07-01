---
slug: antv/x6 v1升级v2记录
title: antv/x6 v1升级v2记录
authors: [hzm]
tags: [x6]
---

### 概述
比起 antv/x6 的 v1版本，[antv/x6 v2](https://x6.antv.antgroup.com/) 提升了渲染性能(异步)，解决了 v1 时期存在的 react 节点挂载问题。

### 依赖调整

业务模块的包（hmde/hlod）不再单独安装 antd/x6 依赖，全部抽离到公共模块（apaas）。统一让公共模块进行 x6 打包，业务模块采用联邦的方式进行引入。  
新的引入方式如下：

```ts
import { Graph } from '@apaas/components/AntvX6';
import { Dnd } from '@apaas/components/AntvX6/plugins';
```
如需补充导出，到公共模块对应的组件下导出，然后在子模块导入使用

<!--truncate-->

### 初始化 Graph 配置调整
类似于滚动、快捷键、小地图等配置不在 x6 包中提供，需要安装额外的插件包，以 use 的方式引入。  
具体例子见官方文档：https://x6.antv.antgroup.com/tutorial/plugins/scroller

### 插件方法调整
和插件相关的部分方法需要先获取插件实例，才能调用。  
graph 上不再挂 scroller、history 等插件属性，例：  
```ts
// 升级前
graph.history.canUndo()
// 升级后
graph.canUndo()
```
当配置了插件，graph 实例会注册部分对应的插件方法，但想完整使用插件中的方法，需要获取插件实例。  
例如配置了滚动插件，想完整使用滚动插件实例中的方法。
```ts
import { Scroller } from "@apaas/components/AntvX6/plugins";
const scroller = graph?.getPlugin<Scroller>('scroller');
```
getPlugin 需要接收一个 `name` 参数，这个 name 来着初始化 use 的时候，给 graph 绑定的插件。
每个插件都有一个 name 属性，初始化插件实例的时候可以手动传入，`默认为插件名称全小写`。

### 异步渲染
为了提升渲染性能，v2 版本默认开启异步渲染，因此对节点变化等判断，需要等待节点渲染完成后再添加或者添加可选链写法。
```ts
graph?.on('render:done', () => {
  // 节点渲染完成，逻辑处理
});
```

### React 组件调整
收缩了 React 组件的注册方式，详情见文档 https://x6.antv.antgroup.com/tutorial/intermediate/react

注：react 16 版本 安装的 x6-react-shape 版本需控制在 `2.0.8`

### x6 Chrome 插件
插件安装见文档 https://x6.antv.antgroup.com/tutorial/devtool
已安装了插件，可以在项目上调用 useX6DevTools 注入 graph 数据进插件

```tsx
import { Graph } from '@antv/x6';
import { useEffect } from 'react';

const useX6DevTools = (graph?: Graph | null) => {
  useEffect(() => {
    if (graph && process.env.NODE_ENV === 'development') {
      if (!(window as any).__x6_instances__) {
        (window as any).__x6_instances__ = [];
      }
      (window as any).__x6_instances__.push(graph);
    }
    return () => {
      if ((window as any).__x6_instances__ && graph) {
        (window as any).__x6_instances__ = (window as any).__x6_instances__.filter(
          (x) => x !== graph
        );
      }
    };
  }, [graph]);
};

export default useX6DevTools;
```
