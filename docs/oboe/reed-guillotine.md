---
title: Reed Guillotine
layout: default
parent: Oboe
nav_order: 3
description: "Reed Guillotine for Oboe"
permalink: /oboe/reed-guillotine/
---


# Reed Guillotine for Oboe


## Description
The reed guillotine is a tool used for cutting the tip of the reed to the desired length. 
The OpenReed reed guillotine has the following features:
- A single fixed blade and an upper cutting block, operated by pressing the handle.
- Replaceable blades made from inexpensive, widely available standard utility blades, allowing easy and low-cost replacement when they become dull.
- A dual-end reed holder that accommodates different types of reeds, including various oboe reed staples and English horn reeds.

<img src="/assets/images/reed-guillotine-v2/assembled.jpeg" alt="Assembled single-blade reed guillotine" style="max-width: 640px; width: 100%; height: auto; display: block;">

## Build Guide

### Bill of Materials

#### Printed Parts
- Main body $\times$ 1 (A)
- Cutting block $\times$ 1 (B)
- Blade clamp $\times$ 1 (C)
- Left lid $\times$ 1 (D)
- Right lid $\times$ 1 (E)
- Handle $\times$ 1 (F)
- Handle axle $\times$ 1 (G)
- Reed holder $\times$ 1 (H)
- Reed holder screw $\times$ 1 (I)

{% include reed-guillotine-parts.html type="printed" alt="Printed parts: A main body, B cutting block, C blade clamp, D left lid, E right lid, F handle, G handle axle, H reed holder, I reed holder screw" %}


#### Standard Hardware
- M5 × 10 mm screw $\times$ 2 (a)
- M2.5 × 5 mm screw $\times$ 1 (b)
- 0.4 × 4.5 × 10 mm (wire diameter × outer diameter × length) spring $\times$ 2 (c)
- 009 RD blade $\times$ 1 (d)

{% include reed-guillotine-parts.html type="hardware" alt="Standard hardware: a two M5 screws, b one M2.5 screw, c two springs, d one 009 RD blade" %}


#### Auxiliary Tools
- A screwdriver
- Tweezers



### Printing the Parts

#### Generating 3D Files

| Source | Description |
|---------|-------------|
| [GitHub Repository](https://github.com/openreed/reed-guillotine) | Install [OpenSCAD](https://openscad.org/), [Python](https://www.python.org/), and the BOSL2 library, then generate the single-blade parts from source. |
| [MakerWorld Global](https://makerworld.com/en/models/2970069-reed-guillotine-for-oboe-and-english-horn#profileId-3330683) | Generate the 3D file or download the pre-built `.3mf` file on MakerWorld Global webpage. |
| [MakerWorld CN](https://makerworld.com.cn/zh/models/2660993-shuang-huang-guan-ying-guo-guan-shao-pian-duan-tou#profileId-3076026) | Generate the 3D file or download the pre-built `.3mf` file on MakerWorld CN webpage. |

Use the repository's render script to generate the oboe/English horn parts:

```bash
python render.py obeh
```

When downloading a print project, select the version with a single blade and a cutting block.


#### Printing Tips
- Use a layer height of 0.12 mm or lower for the blade clamp, cutting block, and reed holder to ensure precision.
- Print the cutting block with its flat back on the bed and the rounded wedge facing up.
- Enable supports for the reed holder.
- Use multi-color printing if available to make the scale markings more visible.
- PETG is recommended for better durability.




### Assembly

Follow the steps below to assemble the reed guillotine. The letters in parentheses match the bill of materials and overview photographs. Avoid touching the blade's cutting edge during assembly or replacement.

#### Step 1: Install the Bottom Blade
Fit the 009 RD blade (d) into the blade clamp (C), aligning its side notches with the locating tabs on the clamp.
<img src="/assets/images/reed-guillotine/step1-1.jpeg" alt="Blade fitted into its clamp with the side notches aligned to the locating tabs" style="max-width: 640px; width: 100%; height: auto; display: block;">

Fit the blade and clamp into the lower blade slot in the main body (A), with the cutting edge facing up. Tweezers may help with installation.
<img src="/assets/images/reed-guillotine/step1-2.jpeg" alt="Blade and clamp installed in the main body's lower blade slot" style="max-width: 640px; width: 100%; height: auto; display: block;">

Secure the clamp with the M2.5 × 5 mm screw (b). Do not overtighten it, as this may strip the printed threads.
<img src="/assets/images/reed-guillotine/step1-3.jpeg" alt="Lower blade clamp secured with the M2.5 screw" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### Step 2: Install the Springs and Cutting Block

Place the two springs (c) into the spring slots on either side of the main body.
<img src="/assets/images/reed-guillotine/step3-1.jpeg" alt="Two springs placed in the spring slots on either side of the main body" style="max-width: 640px; width: 100%; height: auto; display: block;">

Remove any burrs from the cutting block (B). Align its two sliders with the slots in the main body and insert it with the rounded wedge facing down toward the lower blade and the sliders resting on the springs.
<img src="/assets/images/reed-guillotine-v2/step2-2.jpeg" alt="Cutting block installed in the main body's slots with its rounded wedge facing the lower blade" style="max-width: 640px; width: 100%; height: auto; display: block;">

Check that the block moves smoothly up and down and returns under spring pressure when released. If it binds, first remove burrs from the slots and sliders. If needed, adjust `cutting_block_slot_tolerance` and `cutting_block_width_tolerance` in the source and reprint. See the [GitHub repository](https://github.com/openreed/reed-guillotine) for details.

#### Step 3: Install the Handle and the Lids

Pass the handle axle (G) through the handle (F), then seat both ends of the axle in the main body's axle slots. Position the handle so that rotating it presses the cutting block.
<img src="/assets/images/reed-guillotine-v2/step3-1.jpeg" alt="Handle and axle seated in the main body's axle slots" style="max-width: 640px; width: 100%; height: auto; display: block;">

Align the left lid (D) and right lid (E) with the locating tabs on the main body and secure them with the two M5 × 10 mm screws (a). Gently press and release the handle to check the block's movement and spring return.
<img src="/assets/images/reed-guillotine-v2/step3-2.jpeg" alt="Left and right lids secured with M5 screws to retain the handle axle" style="max-width: 640px; width: 100%; height: auto; display: block;">


#### Step 4: Install the Reed Holder

Remove support material from the reed holder (H), especially around the locating mandrel at the end. The photograph below shows the holder after support removal.

<img src="/assets/images/reed-guillotine/step4-1.jpeg" alt="Reed holder with support material removed around its locating mandrel" style="max-width: 640px; width: 100%; height: auto; display: block;">

Thread the reed holder screw (I) into the reed holder, then slide the holder into the slot on the main body.
When cutting your reeds, tighten the reed holder screw to secure the reed holder in place, and loosen it when you want to adjust the position of the reed holder.

<img src="/assets/images/reed-guillotine-v2/step4-2.jpeg" alt="Reed holder and tightening screw installed in the main body's slot" style="max-width: 640px; width: 100%; height: auto; display: block;">


Your reed guillotine is now fully assembled and ready for use! 😃



## Usage Guide

Adjust the cutting length according to the scale marking on the side of the reed holder. 
The procedure is similar when using the other side of the reed holder, which is primarily designed for English horn reeds.
<img src="/assets/images/reed-guillotine/usage1.jpeg" alt="Usage" style="max-width: 300px; width: 100%; height: auto; display: block;">


Tighten the reed holder screw, place the reed in the holder, and seat it against the locating end. Press the handle so the cutting block pushes the reed onto the fixed lower blade. Release the handle to let the springs return the block.

<img src="/assets/images/reed-guillotine-v2/side-view.jpeg" alt="Side view of the single-blade reed guillotine showing the handle, cutting area, and reed holder" style="max-width: 640px; width: 100%; height: auto; display: block;">

If the scale is not accurate, adjust `scale_tolerance` to finetune it. 
Increasing scale_tolerance will result in a longer reed, while decreasing it will result in a shorter reed.
Please refer to the [github repository](https://github.com/openreed/reed-guillotine) for more information.



## Links

### Resources
<a href="https://github.com/openreed/reed-guillotine" class="btn btn-github fs-5 mb-4 mb-md-0 mr-2">GitHub Repository</a> 

<a href="https://makerworld.com/en/models/2970069-reed-guillotine-for-oboe-and-english-horn#profileId-3330683" class="btn btn-makerworld fs-5 mb-4 mb-md-0 mr-2">MakerWorld Global Page</a>

<a href="https://makerworld.com.cn/zh/models/2660993-shuang-huang-guan-ying-guo-guan-shao-pian-duan-tou#profileId-3076026" class="btn btn-makerworld fs-5 mb-4 mb-md-0 mr-2">MakerWorld CN Page</a>

### Purchase
<a href="https://item.taobao.com/item.htm?id=1059778179637&mi_id=0000u1RfG2WnJNSollX2MNy-f4MiO1BYF9K_o31hdaUc0Eg&spm=a21xtw.29178619.0.0&xxc=shop" class="btn btn-taobao fs-5 mb-4 mb-md-0 mr-2">Buy on Taobao</a>
