---
title: 当前存储格式
sidebar_label: 存储格式
---

# 当前存储格式

## 当前笔记目录结构

```text
notes/<noteId>/
  branches.bin
  page_content.bin
  math_snapshot.bin
  preview.png
  pdf/
  images/
  branches/<branchId>/
    snapshot.bin
    operation.bin
    image_objects.bin
```

## 页面内容载荷

- `pageIndex`
- `type`
- `sourcePath`
- `sourcePageIndex`
- `sourcePageWidth`
- `sourcePageHeight`
