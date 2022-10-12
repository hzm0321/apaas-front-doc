### 简介

本项目为汉得 aPaaS 前端团队文档站点 ，项目基于 [Docusaurus 2](https://docusaurus.io/) 构建。

### 项目启动

```
$ yarn
$ yarn start
```

### 项目构建

本项目使用 GitHub Actions 自动构建，构建后的静态文件会自动部署到 GitHub Pages 上。只要往 master 分支推送代码，GitHub
Actions 就会自动构建并部署。

### 项目结构

```
.
├── .github                 # GitHub Actions 配置文件
├── blog                    # 博客文章
├── docs                    # 项目开发规范文档
├── docusaurus.config.js    # docusaurus 站点配置文件
├── sidebars.js             # 文档边栏配置文件
├── src                     # 站点主页面内容
│ ├── components            # 站点页面组件
│ ├── css                   # 站点页面样式
│ ├── pages                 # 站点页面
│ ├── theme                 # 站点主题相关
│ │ ├── MDXComponents       # 可在 MD 文件中共享的组件
│ │ ├── ReactLiveScope      # ReactLive 引入的外部内容
│ │ └── Root.tsx            # 站点 React 根页面
├── static                  # 站点根路径下存放的静态文件
```

### 参与项目
站点内容维护者如需对维护内容进行修改，请在 Github 上 fork 本项目，再向本项目 master 分支提代码合并请求。管理员通过合并请求后会自动部署更新。
