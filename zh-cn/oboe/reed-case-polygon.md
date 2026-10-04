---
title: 多边形哨片盒
layout: default
parent: 双簧管
nav_order: 4
lang: zh
description: "参数化、连体打印的双簧管卷合式多边形哨片盒"
permalink: /zh-cn/oboe/reed-case-polygon/
---

# 双簧管多边形哨片盒

## 简介

多边形哨片盒展开后是一排哨片夹座，卷合后形成紧凑的多边形盒体。每片通过哨座槽和弹性夹固定一支双簧管哨片，相邻扇片由连体打印铰链连接，两端通过内嵌磁铁吸合。

默认容量为 **7 支哨片**，卷合后的多边形名义外接圆半径为 **19 mm**，哨片内部空间高度为 **75 mm**，盒体总高约 **96.72 mm**。中间扇片还设有一个长磁铁腔。

### 卷合状态

![七片式哨片盒卷合状态的 3D 模型示意图](/assets/images/reed-case-polygon/closed.png)

### 展开状态

![哨片盒展开状态的 3D 模型示意图，可见哨座槽、弹性夹与连体铰链](/assets/images/reed-case-polygon/flat.png)

以上图片为默认参数的 3D 模型示意图。

## 制作指南

### 物料清单

#### 打印零件

- 完整连体哨片盒 × 1

#### 标准五金

- **10 × 5 × 1 mm** 方形磁铁 × 4：左、右端片各两块，分别位于上端和下端。
- **40 × 10 × 2 mm** 方形磁铁 × 1：安装在中间扇片。

小磁铁的 10 mm 边和长磁铁的 40 mm 边沿盒体高度方向竖直放置，1 mm 和 2 mm 分别是磁铁厚度。请实测磁铁尺寸，必要时调整磁铁腔参数。两对闭合磁铁应选用沿厚度方向充磁的磁铁；打印前按卷合时的相对位置确认上下两对均互相吸引，并标记每块磁铁的位置与朝向。

### 打印零件

#### 生成 3D 文件

1. 从 [GitHub 仓库](https://github.com/openreed/reed-case-polygon)下载 [reed-case-polygon.scad](https://github.com/openreed/reed-case-polygon/blob/main/reed-case-polygon.scad)，使用 [OpenSCAD](https://openscad.org/) 打开，无需额外的 OpenSCAD 库。
2. 在参数面板中调整尺寸。打印完整连体哨片盒时，选择 `Part = "assembly"` 和 `AssemblyView = "flat"`。
3. 按 **F6** 完整渲染，然后导出 STL。模型单位为毫米。

`AssemblyView = "closed"` 仅用于检查卷合外形。选择 `Part = "left"`、`"middle"`、`"center"` 或 `"right"` 可以导出单个扇片，用于检查或试打。

#### 定制

模型完全参数化，`reed-case-polygon.scad` 中的主要默认参数如下：

- `EdgesNumber = 7`：扇片数量，也是哨片容量，须为不小于 5 的奇数。
- `Radius = 19`：卷合后多边形的外接圆半径，单位为 mm。
- `InnerHeight = 75`：哨片内部空间高度，单位为 mm。
- `PanelClearance = 0.4`、`HingeTolerance = 0.5`：相邻扇片打印间隙和铰链配合公差，单位为 mm。
- `ClampRadius = 2.3`、`ClampThickness = 1`：控制哨片夹的配合与弹性，单位为 mm。
- `BackMagnet*`、`BottomMagnet*`、`UpperMagnet*`：控制磁铁尺寸、磁铁腔深度与配合间隙。

修改扇片数量或半径后，扇片间距、顶部过渡和盒体总高也会随之变化。请通过配合参数适应打印机精度；整体缩放 STL 会同时改变磁铁腔和哨片夹座的尺寸。修改参数后，需重新生成模型并切片。

#### 打印建议

- 将**展开装配体竖直摆放**，各扇片底面贴在热床上，铰链轴沿竖直方向。所有扇片保持相同的 Z 高度。
- 可从 **0.4 mm 喷嘴、0.2 mm 层高、关闭支撑**开始，并在切片预览中检查铰链间隙、薄壁夹片和磁铁腔封顶的桥接路径。
- 磁铁封闭腔和铰链间隙内不要生成支撑。如添加 brim（裙边），应确认能彻底清除，避免相邻扇片被连在一起。
- 完整打印前，先试打一小段包含两段相邻铰链和磁铁腔的模型，检查铰链活动情况与实际磁铁的配合。

### 打印中途安装磁铁

**磁铁腔为封闭结构，必须在打印中途、磁铁腔封顶前放入磁铁。打印完成后无法再装入磁铁。**

1. 在切片预览中逐层检查各个磁铁腔，在首个封顶层打印前添加暂停。使用打印机支持的暂停指令，并确认切片软件是在所选层之前还是之后暂停。
2. 暂停后，让喷嘴停到模型之外，保持热床板和模型原位。按预先确认的极性，从仍然敞开的磁铁腔顶部放入磁铁，使其完全落到腔底。
3. 确认磁铁顶面不高于周围已打印表面、不会挡住喷嘴路径，清除开口附近的杂物，再恢复打印，将磁铁封在盒体内。对其他磁铁腔重复以上操作。

**不要在磁铁腔刚出现时就放入磁铁**，以免磁铁突出并与喷嘴碰撞。修改模型或重新切片后，请重新检查暂停层与磁铁配合。

### 打印后检查

待模型冷却，清除裙边，再轻轻活动各个铰链，直到扇片能自由转动。卷合盒体，确认上下两对磁铁均能吸合。先用一支哨片检查哨座槽和弹性夹的配合，再装入其余哨片。

## 相关链接

### 资源

<a href="https://github.com/openreed/reed-case-polygon" class="btn btn-github fs-5 mb-4 mb-md-0 mr-2">GitHub 仓库</a>

更多细节请参阅[完整打印指南](https://github.com/openreed/reed-case-polygon/blob/main/README_CN.md)。本项目采用 [MIT 许可证](https://github.com/openreed/reed-case-polygon/blob/main/LICENSE)。
