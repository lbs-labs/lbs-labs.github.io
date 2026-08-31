# LBS Labs Official Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a responsive GitHub Pages website for LBS Labs with company-first branding, two app showcases, and separate privacy policies.

**Architecture:** Static HTML/CSS/JavaScript. Root index owns brand/studio/app/contact content; privacy routes are folder-based static pages; all user assets live in `assets/`.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-08-31-lbs-labs-official-site-design.md`

## Global Constraints
- Exactly two apps: 0.001% CHALLENGE and Grove.
- No fake App Store links.
- Use only supplied app assets.
- No React or server runtime.
- Responsive on iPhone, iPad, Mac, desktop.

---
### Task 1: Root website
- [x] Create `index.html`
- [x] Create `styles.css`
- [x] Create `script.js`
- [x] Verify navigation anchors and mobile menu.

### Task 2: Asset integration
- [x] Copy supplied icons and screenshots to `assets/`.
- [x] Use descriptive alt text.
- [x] Keep images responsive with contained screenshot framing.

### Task 3: Privacy Center
- [x] Create `privacy/index.html`.
- [x] Link each app to its own privacy route.

### Task 4: App privacy policies
- [x] Create `privacy/0001-challenge/index.html`.
- [x] Create `privacy/grove/index.html`.
- [x] Verify relative CSS/home links.

### Task 5: Packaging
- [x] Add README upload instructions.
- [x] Zip the complete static site.
