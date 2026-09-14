# Performance Rules

## Initial Load

The user must see meaningful HTML before heavy visual effects load.

---

# WebGL

Load dynamically.

Never block initial rendering.

Use reduced complexity on mobile.

---

# Images

Use Next Image where appropriate.

Use:

- AVIF
- WebP

Provide appropriate dimensions.

Lazy-load below-the-fold media.

---

# Video

Compress aggressively.

Do not autoplay large videos unnecessarily.

Provide fallback.

---

# JavaScript

Avoid unnecessary dependencies.

Do not install libraries for trivial functionality.

Prefer server components where possible.

---

# Animation

Prefer transform and opacity.

Avoid repeatedly animating:

- width
- height
- top
- left

unless required.

---

# Monitoring

Check:

Lighthouse
PageSpeed Insights
Chrome Performance
Network panel

Target:

Performance:
90+

Accessibility:
90+

Best Practices:
90+

SEO:
95+