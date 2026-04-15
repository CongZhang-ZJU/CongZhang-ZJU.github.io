# 智能感知与协同计算课题组网站

这是一个符合 GitHub Pages 部署要求的 Vanilla Web Development 风格静态站点，使用原生 `HTML + CSS + JavaScript` 构建，无需任何构建工具。

## 页面说明

- `index.html`：主页，包含课题组简介、近期科研进展、研究方向与精选成果。
- `members.html`：成员介绍页，按教师、博士生、硕士生、合作成员分组展示。
- `research.html`：工作成果页，展示研究方向、代表性论文与项目转化情况。
- `news.html`：完整 News 页，支持按分类筛选新闻。

## 资源结构

- `assets/styles/main.css`：全站共享样式。
- `assets/scripts/site-data.js`：全站共享内容数据，建议优先修改这里。
- `assets/scripts/main.js`：全站共享交互脚本，负责渲染导航、页脚与各页面内容。
- `style.css` / `script.js`：兼容旧引用路径的转发层。

## 如何修改内容

如果你只想更新网站内容，而不改页面结构，通常只需要编辑：

- `assets/scripts/site-data.js`

你可以在这个文件中修改：

- 课题组名称、简介、邮箱、地址
- 研究方向
- 成员列表
- 论文与项目
- News 动态

## 本地预览

在仓库根目录执行：

```bash
python3 -m http.server 8000
```

然后访问：

- `http://127.0.0.1:8000/index.html`

## 部署方式

本项目为纯静态站点，可直接推送到 GitHub Pages 对应仓库并启用 Pages，无需额外打包步骤。