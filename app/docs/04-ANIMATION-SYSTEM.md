# Animation System

## Animation Stack

Framer Motion:
Component-level animation.

GSAP:
Complex timelines.

ScrollTrigger:
Scroll-linked animation.

Lenis:
Smooth scrolling.

Three.js:
WebGL animation.

---

# Animation Levels

## Level 1 — Micro Interaction

Examples:

- button hover
- link underline
- arrow movement
- cursor interaction

Duration:
150–300ms

---

## Level 2 — Component Animation

Examples:

- card reveal
- text reveal
- image reveal
- section entrance

Duration:
400–900ms

---

## Level 3 — Cinematic

Examples:

- hero transition
- project transition
- pinned section
- WebGL transformation

Duration:
1–5 seconds depending on scroll.

---

# Easing

Prefer:

- easeOut
- expo
- cubic-bezier curves

Avoid excessive bouncing.

Motion should feel:

- heavy
- smooth
- intentional
- physical

---

# Text Animation

Preferred:

- line reveal
- word reveal
- mask reveal
- opacity + translate
- clip-path reveal

Avoid:

- typing animation for large headings
- excessive character animation
- random scrambling

---

# Image Animation

Use:

- scale
- clip-path
- parallax
- displacement
- subtle rotation

Never distort images excessively.

---

# Motion Accessibility

Respect:

prefers-reduced-motion

When enabled:

- remove parallax
- remove complex transitions
- reduce WebGL
- remove unnecessary movement