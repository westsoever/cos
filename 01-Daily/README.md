# 01-Daily - Daily Tracking System

This folder runs the **Plan + Track + Review** loop. Goal: capture what I do every day so I can learn what helps me relax, when I'm most productive, and where my real focus hours are.

## Why two folders

The morning and evening routines used to write the same `YYYY-MM-DD.md` file and overrode each other. They are now split into separate folders, one file per routine per day, joined by date.

## Files

| Path | What it is |
|------|-----------|
| `_Templates/morning.md` | Template for the morning plan. |
| `_Templates/evening.md` | Template for the evening reflection + tracked metrics. |
| `morning-set/YYYY-MM-DD.md` | Morning plan for the day (created by the Morning Planner routine). |
| `evening-reflection/YYYY-MM-DD.md` | Evening reflection + metrics for the day (created by the Evening Reflection routine). |
| `logs/YYYY-MM-DD.md` | Raw 30-min check-ins appended by my external timer ("what am I up to right now"). |
| `weekly-YYYY-MM-DD.md` | Weekly synthesis: patterns across the past 7 days (reads both folders). |

## Data model (two files per day, joined by date)

**Morning (`morning-set/`)** - YAML: `wake_time`, `energy_am` (1-5), `deep_work_planned` (hours). Body: `## Plan`.

**Evening (`evening-reflection/`)** - YAML: `sleep_hours`, `weather`, `temp_c`, `focus_level` (1-5), `energy_pm` (1-5), `deep_work_actual` (hours), `productivity` (1-10), `mood`, `relaxation`. Body: `## Time Log`, `## Reflection`.

## The three routines (set up in Littlebird > Routines)

1. **Morning Planner** (daily ~07:30) - asks wake time, energy, top 3 priorities, deep-work blocks, the one thing that makes today a win. Creates `morning-set/YYYY-MM-DD.md`.
2. **Evening Reflection** (daily ~21:30) - asks sleep, focus, energy, actual deep work, productivity, mood, what went well, what drained me, what helped me relax. Fetches Copenhagen weather. Summarizes the day's `logs/` check-ins. Creates `evening-reflection/YYYY-MM-DD.md`.
3. **Weekly Synthesis** (weekly, Sun evening) - reads the past 7 days from BOTH folders, joins by date, finds patterns (focus vs sleep/weather/energy, time-of-day focus, planned vs actual deep work, what relaxation correlates with better focus). Writes `weekly-YYYY-MM-DD.md`.

## The 30-min timer

An external timer asks "what am I up to right now" every 30 min while I'm at the computer and appends to `logs/YYYY-MM-DD.md`. The evening + weekly routines read these to reconstruct the real time log.
