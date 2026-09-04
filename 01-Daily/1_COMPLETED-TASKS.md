# Completed Tasks - TechBBQ Tenure (Jul-Sep 2026)

## Agents Portal (agents.techbbq.org)

- Built the Agents Portal internal multi-agent platform with Flask Blueprint architecture and provider abstraction for Claude/OpenAI/Gemini
- Made 5 governance decisions with Avnit to unblock the portal prototype (hosting, IT admin control, ToS ownership, chat-log scrubbing, AI-cost escalation)
- Migrated the pr-writer tool into the portal as its first Blueprint agent card and archived the standalone app
- Deployed the Agents Portal to Cloudflare (D1 database, migrations, secrets, Workers Paid plan for Containers)
- Vendored the lej-bounce (Bouncer) agent code into the portal repo
- Shipped the PR Writing Assistant agent (transcript/outline to media-ready article matching Keyvan's tone)
- Shipped the Bouncer agent (email verification via syntax + MX checks before sends)
- Shipped the LP Researcher agent (tunes LP Scraper profile filters and runs pipeline stages)
- Scoped the Funds Assistance agent card for Thomas's grant/fund workflow
- Wrote the PR Writing Assistant business case (workflow, time and cost impact)
- Audited imported legacy packages against the portal architecture via 4 background agents

## Samling (roadmap, AI strategy, org admin)

- Restructured Miquel's Samling roadmap into a full 7-phase documentation note and merged as PR #18
- Wrote AI-strategy roadmap for Samling: ML-assisted LP vetting, lead scoring/enrichment, MCP-server design
- Planned integration of personal databases (contacts.db, brella-sync) into the Samling data model
- Administered the technobbq GitHub org (5 repos, added members, flagged 2FA/sole-owner security gap)

## VC Catalog Automation (vc-catalog repo)

- Built the VC Catalog automation pipeline: Airtable to SQLite to data.js to PDF to Google Drive in one npm run sync command
- Generated first real PDF export: 22-page, 112-fund VC Catalogue via headless Chrome/Puppeteer
- Fixed a hardcoded-filename fallback bug in generatePdf.js
- Automated Google Drive upload of the catalogue PDF to the shared VC Catalogue folder
- Compiled and structured the catalog of 112 VC funds (themes, stages, AUM, tickets, contacts) into data.js

## VIP Outreach Project

- Ran the VIP Outreach project: researched, verified and prepared outreach to ~146 core + 19 supplemental VIP contacts
- Wrote a data-cleaning script for vip_outreach_merged.csv separating valid emails/URLs from notes, promoted 8 emails from verification column
- Researched individual VIPs (Lars-Peter Søbye via RocketReach, Morten Lund, Rune Theill)
- Added VIP Outreach as a tracked project in the vault with 9 commits closing it out

## Contact Enrichment Campaigns (FO Summit, Insurance Summit, Impact Event)

- Ran multi-agent parallel contact enrichment on the Family Office Summit list: 1,849 family offices across 6 shards
- Ran Insurance Summit enrichment: 685/2,079 contacts researched, 449 emails found (~65% rate)
- Ran Impact Event research to outreach-ready state: 307 orgs / 154 contacts with 100% email coverage, prepped YAMM mail-merge
- Solved the Claude Code 200-searches/session web-search quota blocker to keep FO Summit agents running
- Merged 83 CSVs into FullEnrich_Export_Merged, deduplicated with 51.5% efficiency (removed 4,569 of 8,880 raw records)
- Produced the Board Report (BOARD_REPORT_2026-08-04.md) and weekly Avnit status reports (Jul 24, Aug 3, Aug 7)
- Built side-by-side research-data status/synthesis notes comparing all three campaigns

## Brella (event app, sponsors, attendees)

- Managed TechBBQ 2026 sponsors in the Brella Admin Panel (sponsor list grew from ~33 to 166+ across categories)
- Built brella-sync: standalone brella.db, sponsor export (182 sponsors to CSV), incremental attendee refresh, all 8 phases done, ended at 1,229 attendees
- Built brella-signup-crosscheck: read-only cross-check of Brella sign-ups vs contacts.db with snowflake schema and live-fetch pilot (1,107 attendees)

## Fintech Industry Tagging

- Built the Fintech Industry Tagging project: scored 59 Brella attendee industry categories for Future of Fintech relevance (15 marked relevant)
- Ran fintech-investor-day industry-tagging research across 11 parallel-agent batches

## Åbent Brev Outreach

- Built the Åbent Brev Signatories contact enrichment pipeline (LinkedIn lookup, cross-check, infrastructure), then handed ownership to Rares

## Fund-App Slack Relay

- Designed and drafted Phase 1 of the Fund-App Slack Relay: tag @Claude in Slack with a fund link to get a formatted brief delivered to Thomas
- Produced RUNBOOK.md and claude-tag-instructions.md deliverables

## PDF Tour Brief Pipeline

- Built a PDF tour-brief generator with a slim repeatable pipeline and generated his own 2-page tour brief
- Offered to generate the same tour briefs for Ida Nørgaard's tours

## Post-Event Evaluation Survey

- Built the TechBBQ 2026 post-event feedback survey as a Tally form (satisfaction, impact, NPS, demographics, Brella usage, investor-meeting counts)
- Configured Tally to Airtable and Tally to Google Sheets integrations, created the PostBBQ-2026-Survey Airtable table, ran a test submission
- Revised the survey structure per Andrei's and Ida's requested content changes

## Foundations, HNWI and Investor-Relations Content

- Created the Foundation OnePager and impact overview for foundations met with after TechBBQ (incl. Nordea Foundation brief)
- Created TechBBQ HNWI/HNI one-pager briefs
- Worked on the TechBBQ pitch deck for Anders Holk Poulsen
- Set up an Airtable connector in Claude for these projects

## Marketing and Design Deliverables

- Created a custom CookieMonster/Sesame VC investor marketing-kit visual on techbbq.dk/marketing-kits
- Designed A6 dinner menu cards in Claude Design (SVG-gradient headline, 99mmx210mm menu slider, 54 A6 gradient table-number pages for tables 1-27)
- Set up the design-kit repo as the (Un)Official design system of TechBBQ
- Built the TechBBQ Design System and template projects in Claude Design

## LinkedIn Content Tooling

- Built a LinkedIn Post Writer agent/prompt for quickly writing professional LinkedIn posts
- Researched and evaluated the sergebulaev/linkedin-skills Claude skill bundle (11 skills) and installed the Claude GitHub App to try it

## TechBBQ OS / bbqos (knowledge vault)

- Built TechBBQ OS (bbqos): a PARA + Maps-of-Content knowledge vault with AI-first conventions and custom Claude Code skills (session-flow, capture, daily-rituals, synthesis, maintenance)
- Built the daily-task-sync workflow (cloud routine at 08:00 and 14:00 Europe/Copenhagen) syncing ACTIVE_PLAN.md files into a tasks.db with priorities and advancement prompts
- Built the todoist-agent-trigger MVP as a scheduled cloud routine
- Built an auto-commit/auto-push git hook (rebase-safe, never auto-commits deletions) for the vault
- Built contacts-db with snowflake-schema migration for contacts (normalized countries, added regions)
- Migrated repos from westsoever/* to the technobbq/* org
- Performed vault health/branch cleanup: extracted keeper files from stale branches, deleted 6 stale branches, archived 51+ completed plans

## Org Digital Twin (DTO)

- Built the org digital twin: a Mermaid flowchart of the whole org (people, campaigns, tooling, vendors, operations), Phases 0 and 1 done
- Created a 5-minute team workflow-audit survey CSV to feed ongoing operations capture (Phase 1.5)

## Local / On-Prem AI Strategy

- Produced a deep-research report and pitch (TechBBQ-AI-Pitch) on on-prem/private LLM feasibility for a 30-40-person nonprofit (cost analysis, GDPR rationale, 21 sources fact-checked)
- Wrote the private on-prem AI proposal note for TechBBQ leadership

## Zwirn / Mockup App (late tenure)

- Split the trama monorepo into zwirn-engine and zwirn-techbbq repos using git-filter-repo, preserving history, made repos private
- Ran a deep Airtable data audit: produced techbbq-data-report.md analyzing 55 tables/316 fields, recommended rebuilding Partners 2027 from scratch
- Built the Twin Ladder Canvas mockup app (8-section company twin, Mirror Ladder L0-L6): completed Phases 1, 2, and 7
- Redesigned the mockup UI (Tailwind v4, HeroUI-inspired sidebar) and ran a WCAG accessibility audit

## Meetings and Collaboration

- Held AI Transformation Progression meeting with Ida and multiple Ida meeting briefs committed to the vault
- Held FoundersBBQ follow-up meeting with Sanne
- Participated in recurring Weekly Top 3 (Mon 10:00) and daily Chat w/ Lennert slots
- Drafted a Youth in Europe event email to Bente for a late June 2027 event
- Exchanged with Thomas about AI used for evaluation including CVR numbers
- Collaborated with Miquel Matoses and Auri Baciauskas on GitHub/repo setup, Claude Design System, and clone-kit
