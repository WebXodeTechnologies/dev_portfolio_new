# WebGL Architecture

## Objective

Use WebGL as a visual storytelling layer.

Do not use WebGL simply because the portfolio needs a 3D object.

---

# Hero WebGL

Primary concept:

Abstract digital infrastructure.

Possible visual:

- particles
- geometric structure
- flowing data
- distorted surface
- procedural geometry

The visual should represent:

Technology
Systems
Movement
Digital infrastructure

---

# Interaction

Mouse:

Subtle camera movement.

Scroll:

Controls:

- camera position
- object rotation
- shader uniforms
- distortion
- opacity

---

# Architecture

React component:

HeroScene

Inside:

Canvas
 ├── Camera
 ├── Lights
 ├── Geometry
 ├── Materials
 └── Effects

Keep WebGL components isolated.

---

# Performance

Desktop:

Full effect.

Mobile:

Reduced geometry.

Low-power devices:

Simplified scene.

Reduced motion:

Disable unnecessary animation.

---

# WebGL Rules

Do not:

- create unnecessary render loops
- allocate objects every frame
- use excessive particles
- use unnecessarily expensive shaders
- load huge 3D models
- block initial page rendering

Use:

- memoization
- instancing
- dynamic imports
- proper disposal
- low polygon counts
- compressed assets