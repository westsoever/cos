# 01-Daily - Daily Tracking System

This folder runs the **Plan + Track + Review** loop. Goal: capture what I do every day so I can learn what helps me relax, when I'm most productive, and where my real focus hours are.

## Files

| Path | What it is |
|------|-----------|
| `_Templates/daily.md` | Canonical daily note template. All routines copy this schema. |
| `YYYY-MM-DD.md` | One note per day. Created by the morning routine, completed by the evening routine. |
| `logs/YYYY-MM-DD.md` | Raw 30-min check-ins appended by my external timer ("what am I up to right now"). |
| `weekly-YYYY-MM-DD.md` | Weekly synthesis: patterns across the past 7 daily notes. |

## Data model (one file per day)

Everything for a day lives in `YYYY-MM-DD.md`. The YAML frontmatter is the queryable layer (Dataview-friendly):

- **Planned (morning):** `wake_time`, `energy_am` (1-5), `deep_work_planned` (hours)
- **Tracked (evening):** `sleep_hours`, `weather`, `temp_c`, `focus_level` (1-5), `energy_pm` (1-5), `deep_work_actual` (hours), `productivity` (1-10), `mood`, `relaxation`

Body sections: `## Plan`, `## Time Log`, `## Reflection`.

## The three routines (set up in Littlebird > Routines)

1. **Morning Planner** (daily ~07:30) - asks wake time, energy, top 3 priorities, deep-work blocks, the one thing that makes today a win. Creates `YYYY-MM-DD.md`.
2. **Evening Reflection** (daily ~21:30) - asks sleep, focus, energy, actual deep work, productivity, mood, what went well, what drained me, what helped me relax. Fetches Copenhagen weather. Summarizes the day's `logs/` check-ins. Updates `YYYY-MM-DD.md`.
3. **Weekly Synthesis** (weekly, Sun evening) - reads the past 7 daily notes, finds patterns (focus vs sleep/weather/energy, time-of-day focus, planned vs actual deep work, what relaxation correlates with better focus). Writes `weekly-YYYY-MM-DD.md`.

## The 30-min timer

An external timer asks "what am I up to right now" every 30 min while I'm at the computer and appends to `logs/YYYY-MM-DD.md`. The evening + weekly routines read these to reconstruct the real time log.
