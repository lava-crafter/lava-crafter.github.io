---
title: 架构
sidebar_label: 架构
---

# 架构

## 主体结构

- `MapTimelineApp` 提供应用图
- `AppViewModel` 处理页面状态与操作
- `PointWriteUseCase` 处理点位写入
- `TagManagementUseCase` 处理标签操作
- `SettingsManagementUseCase` 处理设置
- `PointRepository` 封装 Room 数据访问

## 当前设计目标

```text
ViewModel 负责 UI 状态
UseCase 负责业务规则
Repository 负责数据访问
```
