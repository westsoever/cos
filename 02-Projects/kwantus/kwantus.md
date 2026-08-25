# Kwantus

> Latin *quantus* = "how much." The first question every business owner asks - and the first one who gives them a straight answer.

**Status:** Ideation -> Pre-build
**Created:** 2026-08-26
**Founder:** Lennert Jessen

---

## The One-Liner

Kwantus makes SMEs (10-50 employees) AI-native by mapping their operations through AI-conducted interviews, building a Digital Twin of their Organization, and deploying a fully managed agent fleet in their own infrastructure.

## The Problem

- Only 17% of EU small enterprises (10-49 employees) use AI, vs 55% of large enterprises *(as of 2026, omago.ai, confidence: high)*
- 50-71% of non-adopting SMEs cite "lack of skills/expertise" as the #1 barrier *(as of 2026, omago.ai, confidence: high)*
- SMEs are stuck at chatbots and content creation - NOT doing workflow automation, predictive analytics, or autonomous decision-making *(as of 2026, OECD, confidence: high)*
- Enterprise DTO tools (SAP Signavio, iGrafx, Mavim) cost hundreds of thousands and take months - nobody serves the 10-50 employee segment *(as of 2026, confidence: high)*
- 75% of enterprises building with agentic AI are stuck in POC purgatory; just 7% have enterprise-grade deployment tied to KPIs *(as of 2026, hfsresearch.com, confidence: high)*
- The missing layer is "accountability" - deployment without adoption *(as of 2026, hfsresearch.com, confidence: high)*

## The Solution

### Three-Layer Architecture

```
Layer 3: DELIVERY (Solo-led consultancy -> in-house FDE team)
   - Lennert delivers every engagement personally until playbook is repeatable
   - First FDE hire after 5-7 engagements (Month 15-18)
   - Embedded in client environment, owns the outcome
        |
        v
Layer 2: CONTEXT LAYER (The Moat) - Digital Twin of the Organization
   - Built from AI-conducted interviews with line managers
   - Structured map of processes, roles, documents, workflows
   - Lives in the client's own infrastructure (not vendor-locked)
   - Portable, exportable, not locked in
   - This is what nobody else does well: Cofounder.co locks context in their cloud,
     Claude Code has no persistent company context, enterprise DTO tools are too expensive/complex for SMEs
        |
        v
Layer 1: BUILD PLATFORM (Internal tool, commodity layer)
   - Claude Code as build engine (client's own subscription / BYOK)
   - Preset connectors: Supabase, Vercel, PostHog, etc.
   - Isolated, independently debuggable components
   - Deploys to client's own cloud
   - NOT the product - the internal tool that makes delivery fast
```

### What The Client Gets

A fully deployed agent fleet running in their own ecosystem. They don't buy a platform. They buy the outcome: automated invoicing, scheduling, customer onboarding, etc. The platform is Kwantus's internal tool. The agent fleet is the client's product.

### What The Client Brings

- Their own cloud (AWS/GCP/Azure)
- Their own AI subscription (Claude/OpenAI)
- Their existing tools (Supabase, Vercel, etc.)
- Their data

### What Kwantus Provides

- The mapping: interviews, process extraction, digital twin creation
- The agent fleet: designed, deployed, configured, monitored
- The integration: connecting agents to actual workflows
- The maintenance: keeping the twin alive and agents accurate

## The Business Model

### Consultancy-Front, Product-Back (The Palantir Model)

Validated by:
- **Palantir**: FDE model, bundled consulting into subscription, 80% gross margin, $4.48B revenue 2025 *(as of 2026, investors.palantir.com, confidence: high)*
- **MindStudio case studies**: Marcus ($25K ARR solo), Priya ($340K ARR 14 months hybrid), James & Aisha ($2.7M ARR 28 months agency->SaaS) *(as of 2026, mindstudio.ai, confidence: high)*
- **C3.ai cautionary tale**: separated consulting from product pricing, hurt operating leverage, pilot-to-production conversion struggles *(as of 2026, confidence: high)*
- **HFS Research**: "The FDE model collapses the consumption gap through embedded accountability" *(as of 2026, hfsresearch.com, confidence: high)*

Key lesson: **Bundle consulting into the product price (Palantir wins). Do NOT separate it (C3.ai struggles).**

### Pricing Structure

**Layer 1: The Mapping (One-Time Implementation Fee)**

| Scope | Price | Deliverable |
|---|---|---|
| Single process (1-2 agents) | $8K-$15K | Interview + twin for one workflow + agent deployment |
| Department (3-5 agents) | $20K-$35K | Full department mapping + agent fleet |
| Full company (8-15 agents) | $40K-$75K | Complete operational twin + agent fleet |

**Layer 2: The Agent Fleet (Monthly Subscription)**

- Per-agent: $500-$1,500/month per active agent (start here - predictable, simpler)
- Per-outcome: $0.50-$5.00 per defined outcome (shift to this after 10+ clients when you know what to measure)
- 5-agent fleet = $2,500-$7,500/month

**Layer 3: The Twin Maintenance (Monthly Retainer)**

- $1K-$3K/month for keeping the digital twin updated
- New processes mapped as company evolves
- New hires onboarded against the twin
- Agents retrained when workflows change
- THIS IS THE LOCK-IN: stale twin = agents making mistakes

### Revenue Math (Per Client: 30-person company)

| Stream | Amount | Timing |
|---|---|---|
| Mapping fee (department scope, 5 agents) | $25,000 | One-time, Month 1-2 |
| Agent fleet (5 agents x $800/month) | $4,000/month | Ongoing from Month 3 |
| Twin maintenance | $1,500/month | Ongoing from Month 3 |

- **Year 1 per client:** $80K
- **Year 2+ per client:** $66K/year recurring
- **5 clients Year 1:** $400K total, transitioning to $330K recurring
- **10 clients Year 2:** ~$800K+ (recurring + new mapping fees)

## The GTM Strategy

### Solo-Led, Land-and-Expand, Vertical-First

**Phase 0: The Wedge (Months 1-3)**
- Pick ONE vertical. ONE process. ONE outcome.
- Sell "I'll fix your [specific bottleneck]" not "AI transformation"
- The offer: "I'll map your [process] and deploy AI agents that handle it. You pay when it works."

**Phase 1: Manual Delivery, 5 Clients (Months 3-9)**
- Walk into each client personally. Conduct interviews, build twin, deploy agents.
- Goal: PATTERN EXTRACTION (not revenue)
  - Which interview questions extract useful process data?
  - Which processes repeat across companies in the vertical?
  - Which agents are worth templating vs one-off builds?
  - How long does mapping REALLY take?
  - What does the SME owner actually care about?
- No employees, no contractors, no platform yet - just you, Claude Code, and preset connectors.

**Phase 2: Productize The Patterns (Months 9-15)**
- By client 5, patterns emerge. The 20% of problems that show up in 80% of engagements.
- Templates built: interview templates, process map templates, agent templates.
- Delivery time drops from 8 weeks to 3-4 weeks.
- Margin goes from 30% to 50-60%.
- Still solo, but platform does 40-50% of the work.

**Phase 3: First Hire (Months 15-18)**
- Hire first FDE as EMPLOYEE (not freelancer).
- Trained on 2-3 shadow engagements.
- Now running 2 engagements in parallel.
- This is the Palantir model at micro-scale.

### Land-and-Expand Motion

```
LAND: Map one process, deploy agents, prove ROI
  -> EXPAND 1: "That worked. Want me to map the next process?"
  -> EXPAND 2: "Your twin now covers 5 processes. Let's deploy agents for all of them."
  -> EXPAND 3: "Your entire operation is mapped. Every new hire gets onboarded against the twin."
  -> LOCK-IN: The twin IS the company's operational brain. Leaving = starting over.
```

### Why In-House (Not FDE Collective)

The FDE collective idea was killed because of delivery risk. In-house solves:
- Inconsistent quality -> You deliver every engagement yourself until playbook is repeatable
- FDE pulled to higher-margin gig -> You own the client relationship and timeline
- No unified P&L -> It's all your P&L, no split incentives
- Change management not embedded -> You're there, in the building, handling adoption
- Bad customer experience -> You are the most trained person on the platform

Trade-off: 2-3 engagements at a time solo. Capacity ceiling solved by hiring first FDE after engagement 5-7.

## Competitive Landscape

### Direct Competitors (AI OS for Business)

| Player | What They Do | Why Kwantus Wins |
|---|---|---|
| Softech OrbitOS | AI-native Business OS | No interview-based onboarding, no existing-company ingestion |
| BOSAi PH | 9 AI Executives in One System | Rigid agent roles, not customized to actual company |
| Orbflo | AI-native Business OS scorecard | Consulting-first, not productized as self-serve |
| Cofounder.co | AI startup context collection | Cloud-only, context locked in, no self-hosting, vendor lock-in |

### Adjacent Competitors

| Player | What They Do | Why They Don't Serve Your Market |
|---|---|---|
| SAP Signavio | Enterprise DTO | Targets 250+ employees, costs hundreds of thousands, takes months |
| Vercel Marketplace | Pre-integrated dev tools | No AI building, no persistent company context, no delivery layer |
| Lovable / Bolt.new | AI app builder | Monolithic, fixes cascade, no isolated debugging |
| Salesforce FDE Network | Embedded FDEs for Agentforce | Enterprise only (500+), not SMEs |
| Palantir | FDE model, implementation-orchestration | Enterprise/government only, not SMEs |

### The Gap Kwantus Owns

AI-first building + component isolation + interview-based DTO + SME target (10-50 employees) + BYO infrastructure + solo-led delivery with outcome-based pricing. Nobody does all of these.

## Key Risks

1. **Anthropic ships persistent context for Claude Code**: If they add company context memory, Layer 2 (the moat) gets commoditized. Defense: the context layer must be fundamentally hard to replicate - not just memory, but structured process maps with cross-referencing and validation.
2. **The interview is the hardest part**: Getting a warehouse manager to articulate their process is extremely hard. People don't know what they know. The interview engine is 80% of the product.
3. **Pilot-to-production gap**: C3.ai's experience shows getting someone to pay for a pilot is not the same as adoption. Agents must demonstrably reduce cost or increase revenue from day one.
4. **Margin erosion early**: Expect 6-16% margin erosion in first 18 months while funding product development from consulting revenue.
5. **The "who gets replaced" conversation**: In a 25-person company, when an agent automates someone's full-time job, that's a different conversation than in a 5,000-person company. Design agents to augment, not replace.
6. **Timeline**: 3 years minimum from decision to real product revenue. 2-3 clients in year 1 if doing it right.

## Naming

**Kwantus** - Latin *quantus* = "how much / how great." Root of "quantity" and "quantum." Dutch "kw" spelling preserves heritage from original "kwantakosta" (Dutch: "hoeveel kost 't?" = "how much does it cost?").

- 6 letters, easy to pronounce ("KWAN-tus"), easy to spell
- No tech/AI company collisions (only a Reddit username and a South African guest house)
- The meaning IS the pitch: "How much? Because that's the first question every business owner asks - and we're the first ones who give them a straight answer."
- Scales from consultancy to platform to enterprise brand
- **TODO:** Check kwantus.com, kwantus.ai, kwantus.io domain availability

## Open Questions

### Critical (Must Answer Before Building)

1. **Which vertical?** Pick one industry NOW. Which industry does Lennert have deepest access/network in? Candidates: logistics/supply chain, professional services (accounting/legal/consulting), manufacturing SMEs, healthcare clinics.
2. **The first client**: Is there a friendly SME willing to be client zero? Someone who'll pay (even at a discount) to be mapped and have experimental agents deployed?
3. **The pricing comfort zone**: Do the numbers ($25K mapping + $5,500/month) feel right for the target SME? Bessemer's test: "If customers say 'sold' immediately, you're too cheap. Raise until you hear 'we have to think about that.'"

### Strategic (Must Answer During Phase 1)

4. **The context layer architecture**: Document store? Knowledge graph? File system with semantic search? How is the digital twin structured and stored?
5. **The interview engine design**: Structured questionnaire, free-form conversation, or hybrid? How does the AI know what to probe deeper on? This is 80% of the product.
6. **If Anthropic ships persistent context for Claude Code, what's left?** Is the context layer fundamentally hard for them to replicate, or is it a feature they'll ship in 6 months?
7. **Platform build timing**: Building the platform during engagements (client as testbed) or between engagements (using what you learned)? First risks client experience, second risks moving too slow.

### Operational (Must Answer During Phase 2)

8. **The change management problem**: When agents automate a human's full-time job in a 25-person company, what happens? Augment or replace?
9. **Geography**: Denmark? Nordics? Local team or flying to client sites?
10. **The "who trains the FDEs" question**: When hiring the first FDE, what does the training/playbook look like? Certification? Quality bar?

## Timeline Summary

| Phase | Timeline | Key Milestone |
|---|---|---|
| Phase 0: Wedge | Months 1-3 | Pick vertical, land first client |
| Phase 1: Manual Delivery | Months 3-9 | 5 clients engaged, patterns extracted |
| Phase 2: Productize | Months 9-15 | Templates built, margin 50-60%, delivery 3-4 weeks |
| Phase 3: First Hire | Months 15-18 | First FDE employee, 2 parallel engagements |
| Phase 4: Scale | Months 18-36 | Product-led, platform handles 80%+, consultancy = premium tier |

## Key Sources

- [Omago SME AI Adoption 2026 Data](https://www.omago.ai/blog/sme-ai-adoption-2026-data)
- [HFS Research: Salesforce FDE Partner Network](https://www.hfsresearch.com/research/salesforces-fde-partner-network-clock/)
- [Palantir FDE Model Analysis](https://medium.com/activated-thinker/a-comprehensive-analysis-of-palantirs-forward-deployed-engineering-model-4502a036b5e4)
- [Palantir 10-K Filing 2024](https://www.sec.gov/Archives/edgar/data/1321655/000132165525000022/pltr-20241231.htm)
- [MindStudio AI Automation Case Studies](https://www.mindstudio.ai/blog/start-ai-automation-business-case-studies)
- [Amit Kothari: Productizing AI Services](https://amitkoth.com/productizing-ai-services/)
- [Bessemer: AI Pricing & Monetization Playbook](https://www.bvp.com/atlas/the-ai-pricing-and-monetization-playbook)
- [Sierra: Outcome-Based Pricing for AI Agents](https://sierra.ai/blog/outcome-based-pricing-for-ai-agents)
- [Stibo Systems: Digital Twin of the Business](https://www.stibosystems.com/blog/why-agentic-ai-demands-a-digital-twin-of-the-business)
- [Salesforce FDE Partner Network Launch](https://www.salesforce.com/news/stories/salesforce-launches-forward-deployed-engineer-partner-network-announcement/)
- [Cofounder.co](https://cofounder.co/resources/introducing-cofounder-2)
- [Vellum: Cofounder Alternatives](https://www.vellum.ai/blog/best-cofounder-alternatives)
- [Zendesk Outcome-Based Pricing](https://www.zendesk.com/blog/ai/agentic-ai/outcome-based-pricing/)
- [OECD: Generative AI and the SME Workforce](https://www.oecd.org/en/publications/generative-ai-and-the-sme-workforce_2d089b99d-en/full-report/component-4.html)

---

## For future Claude

Kwantus is Lennert's venture to make SMEs (10-50 employees) AI-native through an interview-based Digital Twin of the Organization and deployed agent fleets. The business model is consultancy-front/product-back (Palantir model), solo-led land-and-expand with outcome-based pricing. The name comes from Latin "quantus" (how much). The project is in pre-build ideation phase as of 2026-08-26. Key next steps: pick a vertical, find first client, validate pricing. Full chat transcript in `02-Projects/kwantus/chat-transcript-2026-08-26.md`.
