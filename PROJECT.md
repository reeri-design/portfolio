# PROJECT.md

# IMPORTANT

Before implementing any feature:

1. Read this document completely.
2. If a proposed solution conflicts with this document, explain the conflict before writing code.
3. If you're unsure about a design decision, ask instead of assuming.
4. Prioritize simplicity, readability, accessibility, and storytelling over technical cleverness.

---

# reeri.design

> A personal portfolio for Srishti Mittal — Product Designer.
>
> This document is the source of truth for the project. Whenever making design or engineering decisions, prioritize the principles defined here over assumptions.

---

# V1 Scope (decided 2026-07-07)

Philosophy from here on: **ship fast, ship good.** V1 exists so the portfolio can be in front of recruiters now; the full vision below is unchanged but staged.

**V1 (live):**

- Editorial homepage — intro, featured case study card, about + contact sections (no separate pages)
- One case study: BEAM — Unified Estimator Workflow (`/work/beam`), screens/images to be added
- Work index page
- Nav: Work / About / Contact (Playground removed until it exists)

**Deferred to v2:**

- The interactive desk homepage (the core vision — deferred, not cut)
- Playground
- Easter eggs and illustration palette

**Decisions logged since the original doc:**

- IA: "Projects" renamed to "Work"
- Paper is cooler (#f4f6f8) than the original "warm paper" direction — chosen by visual comparison, still provisional
- DM Mono (added as a fourth font for technical labels/captions) removed again — a wider-kerned Label/Caption in DM Sans covers the same "technical eyebrow" job, so the system stays at three families
- Case study pages adopt the site design system (Kalnia display), not the Figma draft's DM Serif Display

---

# Project Goal

Build a portfolio that feels less like a website and more like visiting my workspace.

The goal is not to impress people with animations or visual complexity.

The goal is to create a memorable experience where hiring managers understand:
- how I think
- how I solve problems
- what kind of designer I am
- what I enjoy making

within the first few minutes.

The experience should feel intentional, warm and handcrafted.

---

# Primary Audience

The primary audience is:

- Product Design Hiring Managers
- Design Leads
- Founders
- Product Teams

Secondary audience:

- Designers
- Recruiters
- Curious people exploring my work

Whenever making UX decisions, optimize for hiring managers.

---

# Portfolio Personality

The website should feel:

- Curious
- Observant
- Playful
- Calm
- Handmade
- Craft-driven
- Genuine
- Approachable
- Quietly confident

Avoid:

- Loud
- Flashy
- Corporate
- Overly polished
- Trying too hard to be "creative"

---

# Core Experience

The website should feel like someone has walked into a designer's workspace.

Every object tells a story.

Instead of listing hobbies,
show them through physical objects.

Examples:

Coffee mug → current fuel

Books → things I'm reading

Crochet → creative hobbies

Sketches → visual thinking

Plant → growth

Desk → how I work

Pegboard → inspiration

Notebook → thoughts

The desk is not decoration.

The desk IS the interface.

---

# Design Principles

1. Personality over decoration.

Every illustration should communicate something meaningful.

2. Simplicity before cleverness.

Navigation should always be obvious.

3. Interactions should reward curiosity.

Never require users to discover hidden interactions to understand the portfolio.

4. Motion should feel physical.

Things move because they have weight.

Not because animations are cool.

5. White space is intentional.

Let content breathe.

6. Hiring managers should never feel lost.

Personality should support usability.

---

# Visual Direction

Overall inspiration:

https://www.serenali.ca/

Not to copy visually.

Instead, emulate the feeling:

- soft
- handcrafted
- minimal
- illustrated
- personal
- spacious

---

# Visual Language

Use:

- Paper cutouts
- Hand-drawn illustrations
- Pencil sketches
- Notebook margins
- Tiny doodles
- Masking tape
- Stickers
- Push pins
- Physical desk objects
- Scanned paper textures
- Handwritten labels

Avoid:

- Glassmorphism
- Heavy gradients
- Generic SaaS illustrations
- Neumorphism
- Futuristic UI
- Excessive shadows

---

# Color Direction

Think:

- Warm paper
- Off-white
- Soft charcoal
- Forest green
- Muted mustard
- Burgundy

Accent colors should be used sparingly.

The page should feel like a real desk rather than a digital dashboard.

---

# Typography

Primary:

A clean modern sans-serif.

Secondary:

Occasional handwritten labels or annotations.

Typography should always prioritize readability.

---

# Motion Principles

Motion should be subtle.

Good examples:

- coffee steam
- leaves gently moving
- sticky notes lifting
- keychains swinging
- headphones rotating slightly
- paper shifting

Avoid:

Large page transitions

Overly dramatic animations

Anything distracting from reading

Motion should support atmosphere.

---

# Information Architecture

Home

About

Projects

Playground

Contact

Projects should contain individual pages for each case study.


---

# Homepage Vision

The homepage should not feel like a traditional hero section.

Instead:

The visitor arrives at my desk.

The desk introduces me.

Objects become navigation.

Exploring the workspace reveals my story.

---

# Interactive Objects

Potential interactions:

Laptop
→ Projects

Cutting mat
→ Design process

Books
→ Reading list

Coffee mug
→ Fun facts

Plant
→ Timeline

Pegboard
→ Inspiration

Crochet
→ Creative hobbies

Photo frame
→ Personal moments

Calendar
→ Experience

Drawer
→ Hidden easter eggs

Monitor
→ Featured case study

Objects should feel physical.

---

# Microinteractions

Examples:

Hover:

- slight rotation
- subtle scaling
- tiny bounce
-color addition for clickable elements

Click:

- drawers open
- notes unfold
- books slide
- monitor changes
- mug steams

Animations should remain subtle.

---

# Easter Eggs

Hidden interactions are encouraged.

Examples:

- Konami code
- tiny figure animation
- coffee spill
- changing photographs
- notebook pages
- secret sticker collection

These should never interfere with usability.

---

# Technical Stack

Framework

- Next.js

Language

- TypeScript

Styling

- Tailwind CSS

Animation

- Framer Motion (if needed)

Hosting

- Vercel

Repository

- GitHub

Development

- Cursor
- Claude Code

---

# Project Structure

Prefer:

app/

components/

public/

lib/

types/

Keep architecture simple.

Avoid unnecessary abstraction.

Avoid premature optimization.

---

# Working Relationship (Claude)

Act as a senior frontend engineer mentoring a product designer.

Do NOT immediately write code.

Before implementing:

- explain the approach
- explain tradeoffs
- recommend the simplest solution
- teach concepts when introducing something new

When reviewing my ideas:

Challenge poor architectural decisions.

Explain why.

Suggest alternatives.

Assume I want to learn, not just finish.

Keep explanations beginner-friendly.

---

# Coding Philosophy

Prefer:

Readable code

Small reusable components

Accessibility

Semantic HTML

Simple architecture

Avoid:

Overengineering

Premature abstraction

Large dependencies

Complex patterns without justification

---

# Success Criteria

A hiring manager should leave the website thinking:

"This person clearly thinks deeply."

"I understand how they work."

"I'd enjoy working with them."

rather than

"This portfolio has cool animations."

The portfolio should feel memorable because of its storytelling, not because of visual effects.

---

# North Star

Create the feeling of sitting down at a designer's desk—where every object quietly tells a story about how I think, what I make, and what I care about.
