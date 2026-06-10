---
title: lava_note 架构
sidebar_label: 架构
---

# 架构

lava_note 目前使用一个 Android `:app` 模块。

## 架构目标

```text
边缘层使用 Compose UI
核心笔记逻辑使用可测试的 Kotlin API
重型渲染 / 存储与指针输入隔离
```

## 当前包结构

- `canvas/*`
- `data/*`
- `math/*`
- `shape/*`
- `ui/toolbar/*`
- `ui/system/*`

## 当前拆分状态

- 大部分 controller 和 layer 代码已经拆出
- `CanvasScreen` 仍然是顶层协调者
- 输入路由的清理仍在进行中
