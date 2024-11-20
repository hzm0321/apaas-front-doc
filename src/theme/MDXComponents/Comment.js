import React from 'react';
import Giscus from '../../components/Giscus';

export default function Comment() {
  return (
    <div style={{marginTop: 20}}>
      <Giscus
        repo="hzm0321/apaas-front-doc" // 替换为你的 GitHub 仓库
        repoId="R_kgDOHvsbLQ"          // 替换为你的 Repo ID
        category="Announcements"            // 替换为你的 Discussion 分类名称
        categoryId="DIC_kwDOHvsbLc4CkZrz"  // 替换为你的 Category ID
        strict="0"
        mapping="pathname"             // 使用路径名作为映射
        reactionsEnabled="1"           // 是否启用反应
        emitMetadata="0"               // 是否发送元数据
        inputPosition="bottom"         // 输入框位置
        theme="light"                  // 主题（根据需要调整）
        lang="zh-CN"                      // 语言（如需中文可改为 "zh-CN"）
      />
    </div>
  )
}
