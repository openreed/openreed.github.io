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
- 双刀片设计，切割干净省力。
- 刀片可更换，采用廉价且广泛使用的标准刀片，钝化后可轻松低成本更换。
- 双端哨片座适配不同类型的哨片，包括多种双簧管哨座和英国管哨片。

## 制作指南

### 物料清单

#### 打印件
- 主体 $\times$ 1（A）
- 刀片座 $\times$ 1（B）
- 刀片夹 $\times$ 2（C）
- 左盖板 $\times$ 1（D）
- 右盖板 $\times$ 1（E）
- 手柄 $\times$ 1（F）
- 手柄轴 $\times$ 1（G）
- 哨片座 $\times$ 1（H）
- 哨片座螺丝 $\times$ 1（I）

<img src="/assets/images/reed-guillotine/printed-parts.jpeg" alt="打印件概览" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### 标准件
- M5*10mm 螺丝 $\times$ 2（a）
- M2.5*5mm 螺丝 $\times$ 2（b）
- 0.4mm×4.5mm×10mm（线径×外径×长度）弹簧 $\times$ 2（c）
- 009 RD 刀片 $\times$ 2（d）

<img src="/assets/images/reed-guillotine/standard-hardware.jpeg" alt="标准件概览" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### 辅助工具
- 螺丝刀
- 镊子



### 打印零件

#### 生成 3D 文件

| 来源 | 说明 |
|---------|-------------|
| [GitHub 仓库](https://github.com/openreed/reed-guillotine) | 从源代码生成 3D 文件。您可能需要在系统上安装 [OpenSCAD](https://www.openscad.org/) 和 [Python](https://www.python.org/)。 |
| [MakerWorld 全球版](https://makerworld.com/en/models/) | 在 MakerWorld 全球版网页上下载预生成的 `.3mf` 文件。 |
| [MakerWorld 中文版](https://makerworld.com.cn/zh/models/) | 在 MakerWorld 中文版网页上下载预生成的 `.3mf` 文件。 |


#### 打印建议
- 刀片座、刀片夹和哨片座建议使用低于 0.12mm 的层高，以保证精度。
- 刀片座和哨片座需要打印支撑。
- 建议使用多色打印以使刻度标记更清晰。
- 推荐使用 PETG 材料以获得更好的耐久性。



### 组装

可按照以下步骤组装哨片切割器。组装过程简单灵活，可根据个人喜好调整步骤顺序。

#### 第 1 步：安装底部刀片
取两片 009 RD 美工刀片中的一片作为底部刀片，将其卡入其中一个刀片夹中。
<img src="/assets/images/reed-guillotine/step1-1.jpeg" alt="第 1-1 步" style="max-width: 640px; width: 100%; height: auto; display: block;">

将刀片夹和刀片装入主体，可能需要用镊子辅助连接两个零件。
<img src="/assets/images/reed-guillotine/step1-2.jpeg" alt="第 1-2 步" style="max-width: 640px; width: 100%; height: auto; display: block;">

用 M2.5*5mm 螺丝固定，注意拧得过紧可能导致滑丝。此步骤需要用到螺丝刀。
<img src="/assets/images/reed-guillotine/step1-3.jpeg" alt="第 1-3 步" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### 第 2 步：安装顶部刀片
去除刀片座上的支撑材料。
<img src="/assets/images/reed-guillotine/step2-1.jpeg" alt="第 2-1 步" style="max-width: 640px; width: 100%; height: auto; display: block;">

与第 1 步类似，将另一片 009 RD 美工刀片插入另一个刀片夹，再将其装入刀片座。
现在可以用 M2.5×5mm 螺丝固定，但建议稍后再拧紧，因为连接的零件不易握持。
**小心被刀片割伤**。
<img src="/assets/images/reed-guillotine/step2-2.jpeg" alt="第 2-2 步" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### 第 3 步：安装手柄和盖板

取两根弹簧，放入主体上的弹簧槽中。

<img src="/assets/images/reed-guillotine/step3-1.jpeg" alt="第 3-1 步" style="max-width: 640px; width: 100%; height: auto; display: block;">


将顶部刀片座放入主体上的刀片槽中。
如果刀片座运动过紧，可考虑增大 `upper_blade_holder_width_tolerance`、`upper_blade_holder_slot_tolerance` 和 `blade_length_tolerance` 参数使其变松。
更多信息请参考 [GitHub 仓库](https://github.com/openreed/reed-guillotine)。

<img src="/assets/images/reed-guillotine/step3-2.jpeg" alt="第 3-2 步" style="max-width: 640px; width: 100%; height: auto; display: block;">


将手柄轴穿过手柄上的孔，然后装入主体上的轴槽中。

<img src="/assets/images/reed-guillotine/step3-3.jpeg" alt="第 3-3 步" style="max-width: 640px; width: 100%; height: auto; display: block;">


将左盖板和右盖板安装到主体上，用 M5*10mm 螺丝固定。

<img src="/assets/images/reed-guillotine/step3-4.jpeg" alt="第 3-4 步" style="max-width: 640px; width: 100%; height: auto; display: block;">


现在可以安全地拧紧顶部刀片座上的 M2.5*5mm 螺丝了。😊

<img src="/assets/images/reed-guillotine/step3-5.jpeg" alt="第 3-5 步" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### 第 4 步：安装哨片座

去除哨片座上的支撑材料。下图展示了已清除支撑材料的哨片座。

<img src="/assets/images/reed-guillotine/step4-1.jpeg" alt="第 4-1 步" style="max-width: 640px; width: 100%; height: auto; display: block;">

将哨片座螺丝拧入哨片座，然后将哨片座放入主体上的槽中。
切割哨片时，拧紧哨片座螺丝以固定哨片座；需要调整哨片座位置时则将其拧松。

<img src="/assets/images/reed-guillotine/step4-2.jpeg" alt="第 4-2 步" style="max-width: 640px; width: 100%; height: auto; display: block;">


至此哨片切割器已组装完成。😃



## 使用指南

根据哨片座侧面的刻度标记调整切割长度。
使用哨片座的另一端时操作方式相同，该端主要设计用于英国管哨片。
<img src="/assets/images/reed-guillotine/usage1.jpeg" alt="使用示意" style="max-width: 300px; width: 100%; height: auto; display: block;">


将哨片放入哨片槽中，按下手柄进行切割。
<img src="/assets/images/reed-guillotine/usage2.gif" alt="使用示意" style="max-width: 300px; width: 100%; height: auto; display: block;">

如果刻度不准确，可调整 `scale_tolerance` 参数进行微调。
增大 `scale_tolerance` 会使哨片变长，减小则使哨片变短。
更多信息请参考 [GitHub 仓库](https://github.com/openreed/reed-guillotine)。



## 链接
<a href="https://github.com/openreed/reed-guillotine" class="btn btn-github fs-5 mb-4 mb-md-0 mr-2">GitHub 仓库</a>
