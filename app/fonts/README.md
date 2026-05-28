# Project Fonts Directory

This directory is dedicated to premium, custom, or local font assets that are self-hosted within the project. 

Currently, we have configured **PP Neue Montreal** (Light, Regular, Medium, and Bold) to load from this directory.

---

## 🚀 How to Export and Add Neue Montreal from macOS

Since Neue Montreal is installed in your macOS Font Book, follow these steps to place it here:

### Step 1: Locate the Font in Font Book
1. Open the **Font Book** app on your Mac.
2. In the search bar at the top right, type `Neue Montreal` or `PP Neue Montreal`.

### Step 2: Show the files in Finder
1. In Font Book, you will see the list of styles (e.g. Regular, Italic, Medium, Bold).
2. Right-click on **Regular** and select **Show in Finder**. This will open a Finder window showing the actual font file.
3. Do the same for **Bold** (or any other weight you wish to use).

### Step 3: Copy and Rename the Font Files
1. Copy the files and paste them directly into this folder: `[project_root]/app/fonts/`.
2. To match the configuration in `app/fonts.ts`, rename the copied files to:
   * **Light Weight:** `NeueMontreal-Light.otf` (or `.ttf`, `.woff2`)
   * **Regular Weight:** `NeueMontreal-Regular.otf` (or `.ttf`, `.woff2`)
   * **Medium Weight:** `NeueMontreal-Medium.otf` (or `.ttf`, `.woff2`)
   * **Bold Weight:** `NeueMontreal-Bold.otf` (or `.ttf`, `.woff2`)

---

## ⚡ Performance Optimization Tip (Optional)
If your files are `.otf` or `.ttf`, they will work perfectly! However, for premium web optimization, it is best to convert them to `.woff2` files (which are highly compressed web font formats). 

You can use free online converters (like [Transfonter](https://transfonter.org/) or [CloudConvert](https://cloudconvert.com/)) to convert your `.otf`/`.ttf` files to `.woff2` and rename them to `NeueMontreal-Regular.woff2`, `NeueMontreal-Medium.woff2`, and `NeueMontreal-Bold.woff2`.
