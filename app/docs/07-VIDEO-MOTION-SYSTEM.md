# Video Motion System

## Preloader

Purpose:

Create a cinematic introduction.

Sequence:

00%
 ↓
Brand reveal
 ↓
Motion graphic
 ↓
100%
 ↓
Hero reveal

---

# Video Requirements

Preferred:

WebM where supported.

Fallback:

MP4.

Optimize:

- resolution
- bitrate
- duration
- frame rate

Avoid 4K video unless absolutely necessary.

---

# Video Usage

Video should be used for:

- preloader
- hero transition
- selected visual moments

Never use video behind every section.

---

# Loading Strategy

Video should not block the application from becoming usable.

Critical HTML should render independently.

Preloader should have a timeout/fallback.

If video fails:

Continue to hero.

Never leave the user stuck on loading screen.