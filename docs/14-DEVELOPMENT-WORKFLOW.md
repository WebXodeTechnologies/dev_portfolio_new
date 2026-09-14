# Development Workflow

## RULE

Do not build the whole application in one pass.

---

# STEP 01

Initialize project.

Install only required dependencies.

Validate:

npm run dev
npm run build

---

# STEP 02

Create design system.

Implement:

- fonts
- colors
- spacing
- typography
- buttons
- containers
- grid

---

# STEP 03

Create static pages.

No advanced animation.

Build:

Home
Works
Case Studies
About
Hire

---

# STEP 04

Responsive implementation.

Test:

360px
390px
768px
1024px
1280px
1440px
1920px

---

# STEP 05

Motion system.

Implement:

- page reveal
- text reveal
- image reveal
- hover
- navigation animation

---

# STEP 06

Lenis.

Implement smooth scrolling.

Verify:

- keyboard
- mobile
- reduced motion

---

# STEP 07

ScrollTrigger.

Implement only major cinematic sequences.

---

# STEP 08

Three.js.

Build hero WebGL.

Do not add WebGL to every section.

---

# STEP 09

WebGL + ScrollTrigger integration.

Scroll should influence WebGL.

---

# STEP 10

Video.

Implement preloader.

Provide fallback.

---

# STEP 11

Contact backend.

Implement:

POST /api/contact

Validation
Rate limiting
Nodemailer
Error handling

---

# STEP 12

SEO.

Implement all metadata and structured content.

---

# STEP 13

Testing.

Run:

npm run build

Playwright

Lighthouse

Manual responsive testing.

---

# STEP 14

Performance optimization.

Only optimize after measuring.

---

# STEP 15

Production.

Deploy to Vercel.

Verify:

- environment variables
- email
- sitemap
- robots
- metadata
- forms
- analytics