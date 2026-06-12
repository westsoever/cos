---
deprecated: true
---

# DEPRECATED - split into two templates

The single daily note was splitting badly (morning + evening routines wrote the same filename and overrode each other). The daily note is now two files per day:

- Morning plan -> `01-Daily/morning-set/YYYY-MM-DD.md` (template: `_Templates/morning.md`)
- Evening reflection -> `01-Daily/evening-reflection/YYYY-MM-DD.md` (template: `_Templates/evening.md`)

The weekly synthesis joins the two by date. See `01-Daily/README.md`.
