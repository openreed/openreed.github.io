---
title: Reed Case Polygon
layout: default
parent: Oboe
nav_order: 4
description: "Parametric, print-in-place rolling polygon case for oboe reeds"
permalink: /oboe/reed-case-polygon/
---

# Reed Case Polygon for Oboe

## Description

The polygon reed case unfolds into a row of reed holders and rolls closed into a compact polygon. Each panel holds one oboe reed with a staple seat and a flexible clamp. Print-in-place hinges connect the panels, and embedded magnets hold the two ends closed.

The default case holds **7 reeds**, with a nominal closed polygon radius of **19 mm**, an internal reed height of **75 mm**, and an overall height of approximately **96.72 mm**. The centre panel also contains a long magnet pocket.

### Closed Case

![3D model of the seven-panel reed case rolled closed](/assets/images/reed-case-polygon/closed.png)

### Unfolded Case

![3D model of the unfolded reed case showing staple seats, flexible clamps, and hinges](/assets/images/reed-case-polygon/flat.png)

The images show the default 3D model.

## Build Guide

### Bill of Materials

#### Printed Parts

- Complete print-in-place reed case × 1

#### Standard Hardware

- Rectangular magnets, **10 × 5 × 1 mm** × 4: one upper and one lower magnet in each end panel.
- Rectangular magnet, **40 × 10 × 2 mm** × 1: in the centre panel.

The 10 mm and 40 mm dimensions run vertically along the case; 1 mm and 2 mm are the magnet thicknesses. Measure your magnets and adjust the pocket parameters if needed. For the two closure pairs, use magnets magnetized through their thickness. Check that both pairs attract when the case is closed, then mark each magnet's position and orientation.

### Printing the Parts

#### Generating 3D Files

1. Download [reed-case-polygon.scad](https://github.com/openreed/reed-case-polygon/blob/main/reed-case-polygon.scad) from the [GitHub repository](https://github.com/openreed/reed-case-polygon) and open it in [OpenSCAD](https://openscad.org/). No external OpenSCAD libraries are required.
2. Adjust the dimensions in the Customizer. Select `Part = "assembly"` and `AssemblyView = "flat"` for the complete print-in-place case.
3. Render with **F6**, then export as STL. All dimensions are in millimetres.

Use `AssemblyView = "closed"` only to inspect the rolled-up shape. Individual panels can be exported with `Part = "left"`, `"middle"`, `"center"`, or `"right"` for inspection or test prints.

#### Customization

The model is fully parametric. Key defaults in `reed-case-polygon.scad` are:

- `EdgesNumber = 7`: panel count and reed capacity; use an odd integer of at least 5.
- `Radius = 19`: circumradius of the closed polygon, in mm.
- `InnerHeight = 75`: internal reed height, in mm.
- `PanelClearance = 0.4` and `HingeTolerance = 0.5`: printing and hinge clearances, in mm.
- `ClampRadius = 2.3` and `ClampThickness = 1`: clamp fit and flexibility, in mm.
- `BackMagnet*`, `BottomMagnet*`, and `UpperMagnet*`: magnet dimensions, pocket depths, and clearances.

Changing the panel count or radius also changes panel spacing, the upper transition, and overall height. Adjust the fit parameters for your printer instead of scaling the entire STL, which would also resize the magnet pockets and reed holders. Regenerate and reslice after any parameter changes.

#### Printing Tips

- Place the **flat assembly upright**, with the panel floors on the build plate and the hinge axes vertical. Keep all panels at the same Z height.
- Start with a **0.4 mm nozzle, 0.2 mm layer height, and supports disabled**, then inspect the sliced hinge gaps, thin clamps, and pocket bridges.
- Keep supports out of the enclosed magnet pockets and hinge clearances. If using a brim, make sure it can be removed without joining neighbouring panels.
- Test a short section containing two neighbouring hinges and a magnet pocket before a full print; check hinge movement and actual magnet fit.

### Installing the Magnets During Printing

**The magnet pockets are enclosed. Insert the magnets during printing, before the pocket roofs are printed. They cannot be inserted after the case is complete.**

1. Inspect each magnet pocket layer by layer in the slicer's preview and add a pause before the first layer that closes it. Use a pause command supported by your printer and confirm whether the slicer pauses before or after the selected layer.
2. At each pause, park the nozzle clear of the part and keep the build plate and model in place. Insert the magnets through the open tops of their pockets with the polarity checked beforehand, seating them fully on the pocket floors.
3. Check that each magnet sits at or below the surrounding printed surface and clear of the nozzle's path. Remove debris, then resume printing to seal the magnets inside the case. Repeat for the other pockets.

**Do not insert magnets when the pockets first appear**, as they could protrude into the nozzle's path. Recheck the pause layers and magnet fit whenever you change the model or reslice.

### After Printing

Allow the case to cool, remove any brim, and gently work each hinge until the panels move freely. Roll the case closed and confirm that both magnet pairs attract. Test the staple seat and clamp with one reed before loading the other holders.

## Links

### Resources

<a href="https://github.com/openreed/reed-case-polygon" class="btn btn-github fs-5 mb-4 mb-md-0 mr-2">GitHub Repository</a>

See the [full printing guide](https://github.com/openreed/reed-case-polygon/blob/main/README.md) for further details. This project is shared under the [MIT license](https://github.com/openreed/reed-case-polygon/blob/main/LICENSE).
