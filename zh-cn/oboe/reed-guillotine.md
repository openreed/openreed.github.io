---
title: 哨片切割器
layout: default
parent: 双簧管
nav_order: 3
lang: zh
description: "双簧管哨片切割器"
permalink: /zh-cn/oboe/reed-guillotine/
---


# 双簧管哨片切割器

## 简介
哨片切割器（别名包括切哨器、断头台等；英文别名包括 reed guillotine, tip cutter等）用于将哨片尖端切到所需长度。
OpenReed 哨片切割器具有以下特点：
- 单刀片配合切割垫块，按压手柄即可完成切割。
- 刀片可更换，采用廉价且广泛使用的标准刀片，钝化后可轻松低成本更换。
- 双端哨片座适配不同类型的哨片，包括多种双簧管哨座和英国管哨片。

<img src="/assets/images/reed-guillotine-v2/assembled.jpeg" alt="组装完成的单刀片哨片切割器" style="max-width: 640px; width: 100%; height: auto; display: block;">

## 制作指南

### 物料清单

#### 打印件
- 主体 $\times$ 1（A）
- 切割垫块 $\times$ 1（B）
- 刀片夹 $\times$ 1（C）
- 左盖板 $\times$ 1（D）
- 右盖板 $\times$ 1（E）
- 手柄 $\times$ 1（F）
- 手柄轴 $\times$ 1（G）
- 哨片座 $\times$ 1（H）
- 哨片座螺丝 $\times$ 1（I）

{% include reed-guillotine-parts.html type="printed" alt="打印件概览：A 主体，B 切割垫块，C 刀片夹，D 左盖板，E 右盖板，F 手柄，G 手柄轴，H 哨片座，I 哨片座螺丝" %}


#### 标准件
- M5 × 10 mm 螺丝 $\times$ 2（a）
- M2.5 × 5 mm 螺丝 $\times$ 1（b）
- 0.4 × 4.5 × 10 mm（线径 × 外径 × 长度）弹簧 $\times$ 2（c）
- 009 RD 刀片 $\times$ 1（d）

{% include reed-guillotine-parts.html type="hardware" alt="标准件概览：a 两颗 M5 螺丝，b 一颗 M2.5 螺丝，c 两根弹簧，d 一片 009 RD 刀片" %}


#### 辅助工具
- 螺丝刀
- 镊子



### 打印零件

#### 生成 3D 文件

| 来源 | 说明 |
|---------|-------------|
| [GitHub 仓库](https://github.com/openreed/reed-guillotine) | 安装 [OpenSCAD](https://openscad.org/)、[Python](https://www.python.org/) 和 BOSL2 库后，从源码生成单刀片版本的 3D 文件。 |
| [MakerWorld 全球站](https://makerworld.com/en/models/2970069-reed-guillotine-for-oboe-and-english-horn#profileId-3330683) | 在 MakerWorld 全球版网页上生成 3D 文件，或下载预生成的 `.3mf` 文件。 |
| [MakerWorld 中国站](https://makerworld.com.cn/zh/models/2660993-shuang-huang-guan-ying-guo-guan-shao-pian-duan-tou#profileId-3076026) | 在 MakerWorld 中文版网页上生成 3D 文件，或下载预生成的 `.3mf` 文件。 |

使用仓库中的渲染脚本，可生成双簧管／英国管版本的零件：

```bash
python render.py obeh
```

下载打印工程时，请确认选用的是单刀片与切割垫块版本。


#### 打印建议
- 刀片夹、切割垫块和哨片座建议使用不高于 0.12 mm 的层高，以保证精度。
- 切割垫块以平背朝下、圆角楔形朝上的方向打印。
- 哨片座需要打印支撑。
- 建议使用多色打印以使刻度标记更清晰。
- 推荐使用 PETG 材料以获得更好的耐久性。



### 组装

可按照以下步骤组装哨片切割器。括号中的字母对应物料清单和概览图。组装和更换刀片时，请避免触碰刀刃。

#### 第 1 步：安装底部刀片
将 009 RD 刀片（d）卡入刀片夹（C），使刀片侧面的缺口与刀片夹上的定位凸起对齐。
<img src="/assets/images/reed-guillotine/step1-1.jpeg" alt="刀片装入刀片夹，侧面缺口与定位凸起对齐" style="max-width: 640px; width: 100%; height: auto; display: block;">

将刀片夹和刀片装入主体（A）的下刀片槽，保持刀刃朝上。可用镊子辅助安装。
<img src="/assets/images/reed-guillotine/step1-2.jpeg" alt="刀片与刀片夹装入主体的下刀片槽" style="max-width: 640px; width: 100%; height: auto; display: block;">

用 M2.5 × 5 mm 螺丝（b）固定，注意拧得过紧可能导致滑丝。
<img src="/assets/images/reed-guillotine/step1-3.jpeg" alt="用 M2.5 螺丝固定下刀片夹" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### 第 2 步：安装弹簧和切割垫块

将两根弹簧（c）放入主体两侧的弹簧槽中。
<img src="/assets/images/reed-guillotine/step3-1.jpeg" alt="两根弹簧放入主体两侧的弹簧槽" style="max-width: 640px; width: 100%; height: auto; display: block;">

清理切割垫块（B）上的毛刺，将两侧滑块对准主体上的滑槽装入，使圆角楔形朝下、面向下刀片，滑块落在弹簧上。
<img src="/assets/images/reed-guillotine-v2/step2-2.jpeg" alt="切割垫块装入主体滑槽，圆角楔形朝向下刀片" style="max-width: 640px; width: 100%; height: auto; display: block;">

检查垫块能否顺畅上下移动，并在松开后由弹簧复位。如果过紧，先清理滑槽和滑块上的毛刺；必要时调整源码中的 `cutting_block_slot_tolerance`、`cutting_block_width_tolerance` 配合公差并重新打印。更多信息请参考 [GitHub 仓库](https://github.com/openreed/reed-guillotine)。

#### 第 3 步：安装手柄和盖板

将手柄轴（G）穿过手柄（F）上的孔，再将轴的两端放入主体上的轴槽中。调整手柄位置，确认转动时能按压切割垫块。
<img src="/assets/images/reed-guillotine-v2/step3-1.jpeg" alt="手柄与手柄轴安装到主体上的轴槽中" style="max-width: 640px; width: 100%; height: auto; display: block;">

将左盖板（D）和右盖板（E）对准主体上的定位凸起，用两颗 M5 × 10 mm 螺丝（a）固定。安装后，轻按手柄并松开，检查垫块的运动和复位。
<img src="/assets/images/reed-guillotine-v2/step3-2.jpeg" alt="左右盖板用 M5 螺丝固定，手柄轴由盖板压住" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### 第 4 步：安装哨片座

去除哨片座（H）上的支撑材料，尤其是端部定位柱附近的支撑。下图展示了已清除支撑材料的哨片座。

<img src="/assets/images/reed-guillotine/step4-1.jpeg" alt="哨片座端部定位柱附近的支撑已清除" style="max-width: 640px; width: 100%; height: auto; display: block;">

将哨片座螺丝（I）拧入哨片座，然后将哨片座放入主体上的槽中。
切割哨片时，拧紧哨片座螺丝以固定哨片座；需要调整哨片座位置时则将其拧松。

<img src="/assets/images/reed-guillotine-v2/step4-2.jpeg" alt="哨片座与固定螺丝安装到主体滑槽中" style="max-width: 640px; width: 100%; height: auto; display: block;">


至此哨片切割器已组装完成。😃



## 使用指南

根据哨片座侧面的刻度标记调整切割长度。
使用哨片座的另一端时操作方式相同，该端主要设计用于英国管哨片。
<img src="/assets/images/reed-guillotine/usage1.jpeg" alt="使用示意" style="max-width: 300px; width: 100%; height: auto; display: block;">


拧紧哨片座螺丝，将哨片放入哨片槽并靠好定位端。按下手柄，使切割垫块将哨片压向固定下刀片，完成切割；松开手柄后，垫块由弹簧复位。

<img src="/assets/images/reed-guillotine-v2/side-view.jpeg" alt="单刀片哨片切割器侧视图，可见手柄、切割区域和哨片座" style="max-width: 640px; width: 100%; height: auto; display: block;">

如果刻度不准确，可调整 `scale_tolerance` 参数进行微调。
增大 `scale_tolerance` 会使哨片变长，减小则使哨片变短。
更多信息请参考 [GitHub 仓库](https://github.com/openreed/reed-guillotine)。



## 相关链接

### 资源
<a href="https://github.com/openreed/reed-guillotine" class="btn btn-github fs-5 mb-4 mb-md-0 mr-2">GitHub 仓库</a>

<a href="https://makerworld.com/en/models/2970069-reed-guillotine-for-oboe-and-english-horn#profileId-3330683" class="btn btn-makerworld fs-5 mb-4 mb-md-0 mr-2">MakerWorld 全球站</a>

<a href="https://makerworld.com.cn/zh/models/2660993-shuang-huang-guan-ying-guo-guan-shao-pian-duan-tou#profileId-3076026" class="btn btn-makerworld fs-5 mb-4 mb-md-0 mr-2">MakerWorld 中国站</a>

### 购买
<a href="https://item.taobao.com/item.htm?id=1059778179637&mi_id=0000u1RfG2WnJNSollX2MNy-f4MiO1BYF9K_o31hdaUc0Eg&spm=a21xtw.29178619.0.0&xxc=shop" class="btn btn-taobao fs-5 mb-4 mb-md-0 mr-2">淘宝</a>
