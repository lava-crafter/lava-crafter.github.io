---
title: Current Storage Format
sidebar_label: Storage Format
---

# Current Storage Format

## Current note directory shape

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

## Page content payload

- `pageIndex`
- `type`
- `sourcePath`
- `sourcePageIndex`
- `sourcePageWidth`
- `sourcePageHeight`
