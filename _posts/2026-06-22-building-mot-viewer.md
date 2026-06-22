---
layout: post
title: "Building MOT Viewer: A Lightweight Tool for Inspecting Multi-Object Tracking Datasets"
date: 2026-06-22 00:00:00 +0800
summary: "A short note on why I built MOT Viewer, a lightweight browser-based tool for inspecting MOT-style datasets."
categories: [research, tools, multi-object-tracking]
---

---

layout: post
title: "Building MOT Viewer: A Lightweight Tool for Inspecting Multi-Object Tracking Datasets"
date: 2026-06-22 00:00:00 +0800
summary: "A short note on why I built MOT Viewer, a lightweight browser-based tool for inspecting MOT-style datasets, annotations, bounding boxes, and track identities."
categories: [research, tools, multi-object-tracking]
----------------------------------------------------

# Building MOT Viewer: A Lightweight Tool for Inspecting Multi-Object Tracking Datasets

When working on multi-object tracking, I often need to inspect datasets before training, testing, or debugging a tracker. A dataset may look correct from its folder structure, but small problems can still exist in the annotations, frame ordering, sequence metadata, bounding box alignment, or track identity consistency.

Because of this, I built **MOT Viewer**, a lightweight browser-based tool for inspecting Multi-Object Tracking datasets.

The goal of this tool is simple: make MOT datasets easier to check visually.

Instead of repeatedly writing custom scripts to draw bounding boxes, load frames, and inspect tracking IDs, MOT Viewer provides a small local web interface where I can browse image sequences frame by frame and view the corresponding annotations directly.

<figure>
  <img src="{{ '/assets/img/mot-viewer_interface.png' | relative_url }}" alt="MOT Viewer interface">
  <figcaption>MOT Viewer interface for browsing MOT-style image sequences.</figcaption>
</figure>

## Why I built it

In MOT research, dataset quality matters a lot. A tracker can fail not only because of the model or association strategy, but also because of issues in the data itself.

For example, a sequence may have missing frames, incorrect annotation paths, mismatched frame indices, wrong bounding box positions, or inconsistent track IDs. These problems are easy to miss when only looking at text files.

Visual inspection is still one of the most direct ways to understand whether a dataset is usable. It helps answer questions such as:

* Are the bounding boxes aligned with the objects?
* Are the track IDs consistent across frames?
* Are the frame numbers correctly matched with the annotation file?
* Does the dataset follow the expected MOT-style structure?
* Are there any obvious conversion errors before running experiments?

MOT Viewer was created to make this checking process faster and more convenient.

## What the tool does

MOT Viewer is designed for MOT-style datasets. It can display image sequences together with tracking annotations such as bounding boxes and identity labels.

The main functions include:

* browsing MOT image sequences frame by frame;
* visualizing bounding boxes and track IDs;
* switching between multiple datasets in the browser;
* registering new datasets without modifying the source code;
* configuring dataset-specific layouts, such as split names, image folders, and annotation filenames;
* storing local dataset configurations separately.

The tool currently supports common MOT-style datasets such as **SoccerNet-Tracking** and **DanceTrack**, and it can be extended to other datasets by providing the correct configuration.


## Dataset configuration

One useful part of MOT Viewer is that dataset paths and layout settings are kept outside the source code.

This makes the tool easier to reuse across different machines and datasets. Instead of hard-coding every dataset path, I can define local datasets in a configuration file or register them through the web interface.

A typical MOT-style dataset structure looks like this:

```text
<dataset-root>/
  <split>/
    <sequence>/
      img1/
        000001.jpg
        000002.jpg
        ...
      gt/
        gt.txt
      seqinfo.ini
      gameinfo.ini
```

The expected annotation format follows the MOTChallenge style:

```text
frame,id,x,y,w,h,confidence,class,unused
```

For visualization, the most important fields are the frame index, object identity, and bounding box coordinates.

## Why this matters for my research

My research focuses on online multi-object tracking, especially data association under uncertainty. In this area, understanding the dataset is not just a preprocessing step. It directly affects how tracking errors are interpreted.

For example, when an identity switch happens, I need to know whether the problem comes from the tracker, the detector, the motion model, the appearance cue, or the annotation itself. A visual inspection tool helps me separate dataset issues from algorithmic issues.

This is especially useful in sports tracking scenarios, where players often wear similar uniforms, move quickly, overlap with each other, and create difficult association cases. Before testing a tracker on such data, I need to make sure the annotations and frame sequences are correct.

MOT Viewer helps support that workflow.

## Current status

The current version is intentionally lightweight. It is not meant to be a full annotation platform or a replacement for advanced labeling tools. Instead, it is a practical research utility for quickly checking MOT-style datasets.

The near-term development direction includes:

* adding support for more MOT datasets, such as MOT17 and SportsMOT;
* improving sequence navigation and playback;
* adding annotated video export;
* supporting additional annotation formats, such as COCO-style tracking;
* improving the user interface for faster inspection and debugging.


## Repository

The project is available here:

```text
https://github.com/shijunjie07/mot-viewer
```

I will continue improving it as part of my research workflow for multi-object tracking, dataset inspection, and sports video analysis.

## Contributions are welcome

MOT Viewer is still evolving, and I welcome contributions from anyone who finds the tool useful or wants to extend it.

If you want to contribute a new feature, fix a bug, improve the UI, add support for another dataset, or clean up the code, feel free to fork the repository and submit your commits through a pull request.

Possible contribution directions include:

* adding new dataset presets;
* improving playback controls;
* supporting more annotation formats;
* adding export functions for annotated frames or videos;
* improving documentation and examples;
* refining the interface for large-scale dataset inspection.

For larger changes, it is better to open an issue first so the idea can be discussed before implementation.