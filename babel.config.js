module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
     [
      "@babel/preset-react",
      {
        "runtime": "automatic" // 启用新的 JSX 转换
      }
    ]
  ],
};
