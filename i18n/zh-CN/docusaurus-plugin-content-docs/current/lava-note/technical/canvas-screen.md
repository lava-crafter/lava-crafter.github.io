---
title: CanvasScreen 拆分
sidebar_label: CanvasScreen
---

# CanvasScreen 拆分

`CanvasScreen` 负责协调当前画布运行时。

## 当前负责的内容

- 笔记加载与持久化钩子
- 笔划会话与输入状态
- 视口状态与快速滚动状态
- 选择、画笔、工具与历史控制器
- PDF 导入 / 导出状态
- 数学模式与数学叠加层

## 仍需完成的工作

- 完成输入路由拆分
- 减少剩余的页面状态
- 保持最终协调者的可读性
