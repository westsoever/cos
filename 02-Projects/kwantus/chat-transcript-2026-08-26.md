# Kwantus - PingPong Session Transcript

**Date:** 2026-08-26
**Participants:** Lennert (lyo) + Littlebird
**Topic:** Ideation and validation of Kwantus - an AI-native company operating system for SMEs

---

## Round 1: The Initial Idea - Pre-Integrated AI Dev Platform

**Lennert:** Help me PingPong this idea to understand patterns, behaviors and potential product-market fit.

What if we can just build a platform that pre-integrates all the typical AI tools that you want to have (Supabase, Vercel, PostHog, whatever is hot at the moment) and combine that into one platform? Not to rebuild it but just to have one-click sign-in and then whatever you build is automatically connected to all of them. Basically it's like lovable, just with isolated systems that can be debugged on their own without needing to fix the whole thing, just at one part that is not working, and that of course is all centered around AI.

Building the GTM for your AI-company - centralised system - decentralised components.

**Littlebird Analysis:**

### The Real Insight: Selling Debuggability, Not Integration

Lovable's #1 complaint in 2026 isn't that it can't build - it's that when things break, fixing them creates new bugs. Users describe "frustrating cycles of inefficiency" where a fix to one part cascades into failures elsewhere. Forasoft estimates that hardening a Lovable-built app starts at ~$2,500 and takes a week minimum.

### The Danger: Vercel Already Did The Integration Part

Vercel Marketplace already offers one-click Supabase, PostHog is on there, and they're adding more constantly. Their case study shows it's driving real adoption. So "one-click sign-in and everything is connected" is already a thing. Meanwhile, SaaS boilerplates (ShipFast, Supastarter, MakerKit) already give you pre-wired auth + DB + payments + analytics as code templates.

### The Gap Nobody Owns (Yet)

| | AI-Builds-It | Pre-Integrated Stack | Isolated Debugging | Component Swap |
|---|---|---|---|---|
| Lovable / Bolt | Yes | Partial (monolithic) | No - fixes cascade | No |
| Vercel Marketplace | No | Yes | Partial | Yes |
| SaaS Boilerplates | No (static code) | Yes (as template) | N/A | Manual |
| **Your Idea** | Yes | Yes | **Yes** | **Yes** |

That bottom-right quadrant - AI-first building + component isolation + swappability - is genuinely empty.

### Sharpening The Idea

1. Don't sell "integration." Sell "AI-safe infrastructure" - blast-radius containment for AI-generated code.
2. The "decentralized components" part is the moat - if components are swappable with AI-mediated translation, that's novel.
3. The GTM wedge: "Building the GTM for your AI company" - spin up an AI company with the full operational stack in 10 minutes.

---

## Round 2: The Pivot to SME Transformation

**Lennert:** I'm thinking to directly build in one interface, that maps out the whole company pipeline moving forward, hordes all the components, assets, documents, materials and what not - completely AI-Native.

Now, the interesting part is that this is already used for new ideas/companies - I want to understand how we can build this for existing SMEs - 10 to 50 employees to restructure their operations to become AI native.

Such and similar functionalities should be natural, integrated and easy to setup: One-click agent creation that knows exactly what needs to be done (after e.g. an interview with the line manager to set the context)

**Littlebird Analysis:**

### The Landscape: AI Operating System Space Is Crowded

| Player | What They Do | Target | Gap |
|---|---|---|---|
| Softech OrbitOS | AI-native Business OS | Service & B2B | No interview-based onboarding |
| BOSAi PH | 9 AI Executives in One System | Philippines SMEs | Rigid agent roles |
| Orbflo | AI-native Business OS scorecard | SMEs | Consulting-first, not productized |
| sX OS | New Business OS Replacing GTM | Sales-focused | Narrow scope |

### The Missing Link: Digital Twin of an Organization (DTO)

Enterprise world converging on DTO concept (SAP Signavio, iGrafx, Mavim, Stibo Systems). Key insight from Stibo's research with Microsoft: "Agentic AI can only act as intelligently as the business context behind it." But every single DTO player targets enterprises with 250+ employees. Nobody is doing DTO for 10-50 person companies.

### SME AI Adoption Data

- Only 17% of EU small enterprises (10-49 employees) use AI, vs 55% of large enterprises
- 50-71% of non-adopting SMEs cite "lack of skills/expertise" as the #1 barrier
- SMEs stuck at chatbots and content creation, NOT doing workflow automation
- OECD: "off-the-shelf, ready-to-use tools dominate SME adoption"

### The Real Idea: Interview-Based DTO For SMEs

Democratizing the Digital Twin of the Organization. Instead of a 6-month SAP consulting engagement, a 45-minute AI-conducted interview with each line manager. The interview output becomes the digital twin.

### Hard Problems

1. The interview is the hardest part - getting a warehouse manager to articulate their process is extremely hard
2. The "existing company" problem is messy - 15 years of accumulated process debt, shadow systems, political resistance
3. Agent quality depends entirely on twin quality - need a validation layer
4. "SMEs with 10-50 employees" is not a market, it's a demographic - need to pick a vertical

### GTM: Don't Sell "AI." Sell "Operational Clarity."

The pitch: "In 2 hours, we'll map every process in your company." The DTO is the product. The agents are the ROI.

---

## Round 3: The Hybrid Consultancy-Product Model

**Lennert:** It's gonna take more than 2hours to map the company. We would basically need to be a consultancy, that supplies the product for people to become AI-Native

**Littlebird Analysis:**

### You Just Described Palantir

Palantir sells software subscriptions, but professional services remain a massive revenue stream. Their CEO Alex Karp calls their products "implementation-orchestration machines." The consulting is bundled into the subscription - clients pay one price, Palantir decides internally how much is FDE time vs platform access.

### The Model: Consultancy-Front, Product-Back

**Phase 1: The Engagement (Consultancy)** - 12-week transformation engagement: interview every line manager, synthesize into Digital Twin, validate with leadership, deploy agents, monitor and iterate. $25K-$75K per engagement.

**Phase 2: The Platform (Product)** - Once twin is built and agents deployed, the company lives on your platform. SaaS subscription $2K-$8K/month for ongoing access, agent maintenance, twin updates.

**Phase 3: The Flywheel** - Find the 20% of problems that show up in 80% of engagements. Those become pre-built agent templates. By engagement #15, deploying a template and customizing. By engagement #30, templates are good enough for junior consultants.

### Why This Works For The ICP

- Pure product says "here's a tool, figure it out" - SMEs can't, so they don't
- Pure consultancy says "we'll do it for you" - expensive, non-scalable, leaves nothing behind
- Hybrid says "we'll map your company, build the agents WITH you, and leave you with a platform that keeps running"

### Hard Truths

1. Can't skip the consulting phase - do consulting first, find patterns, then productize
2. Timeline is 3 years minimum
3. Margin story is tricky early - expect 6-16% margin erosion in first 18 months
4. Need consultant-engineer-psychologist hybrid people - they don't grow on trees

---

## Round 4: Case Studies On The Hybrid Model

**Lennert:** Is there a case-study on this "Hybrid Model" wins that you've mentioned?

**Littlebird Research:**

### Case Study 1: Palantir - The Original Hybrid

- Forward Deployed Engineer (FDE) model: engineers embed inside client teams
- Professional services bundled into subscription, not separate revenue line
- More FDEs than traditional software engineers until 2016
- Gross margin stays at 80% even with heavy services
- Revenue: $2.23B (2023) -> $2.87B (2024) -> $4.48B (2025)
- Q4 2025: US commercial revenue grew 137% YoY, total revenue grew 70%
- FDE model now industry standard: Anduril, OpenAI, Anthropic, Ramp all hire FDEs

### Case Study 2: C3.ai - The Cautionary Tale

- Started consulting-heavy, pivoted to consumption-based pricing in 2022
- $250K three-month pilot -> $500K six-month production deployment -> consumption pricing
- Pilot-to-production conversion has been their biggest struggle
- Too consulting-heavy for too long, hurt operating leverage
- Separated consulting from product pricing (unlike Palantir) - made consulting cost visible

### Case Study 3: Three AI Automation Businesses (MindStudio)

**Marcus:** $0 to $25K ARR in 4 months (solo, bookkeeping AI). Productized service. Sold at $180K ARR 18 months later.

**Priya:** $0 to $340K ARR in 14 months. $8K upfront + $3K/month. Hybrid model. Key: said no to generalist work, documented everything, standardized by client 6.

**James & Aisha:** $0 to $2.7M ARR in 28 months. Agency -> Hybrid -> SaaS pivot. 74% gross margin. Key: went narrow (e-commerce, specific content types).

### Pattern Across All Case Studies

1. Start with a specific customer, not a broad vision
2. Get paid before building the perfect thing
3. Keep delivery costs low (AI does most of the work)
4. Raise prices faster than feels comfortable
5. Bundle consulting into product pricing (Palantir wins, C3.ai struggles)

---

## Round 5: The Refined Architecture - BYO-AI + FDE Collective

**Lennert:** So basically what I'm trying to do is to give founders the tool to build something within their, let's say, cloud instance and deploy as fast as possible. Building as previously described, like isolated parts, it's similar to lovable. It is using one Claude Code instance or chat repository, which then super easily has already preset connectors for super base, vercel, whatever, and deploys the project there. The goal then is to harness and collect all the context similar to how cofounder.co does it but just better, through my own AI subscription and not kept within their system.
Through the described approach, I want to create a collective of FDEs that then help businesses to actually implement it

**Littlebird Analysis:**

### Two Layers

**Layer 1: The Platform - Bring Your Own AI Dev Infrastructure**
- Pre-wires Supabase, Vercel, PostHog as isolated, debuggable components
- Uses Claude Code as build engine (one instance, one repo)
- Deploys to founder's own cloud (not yours)
- Context collection like Cofounder.co but living in founder's system, not locked in vendor cloud
- Runs on founder's own AI subscription (BYOK)

**Layer 2: The FDE Collective - Distributed Delivery Network**
- Network of Forward Deployed Engineers embedding inside client companies
- Like Palantir FDEs but for SMEs, using your platform
- Not employees - a collective/network
- Paid based on outcomes, not hours

### The Sharp Part: Solving The Exact Problem HFS Research Named

- 75% of enterprises building with agentic AI are stuck in POC purgatory
- Just 7% have enterprise-grade deployment tied to KPIs
- The problem is the "missing accountability layer" between deployment and adoption
- HFS: "The FDE model collapses the consumption gap through embedded accountability"
- Salesforce validated this by launching their FDE Partner Network, $800M Agentforce ARR, up 169% YoY

### The BYO-AI Angle vs Cofounder.co

| Cofounder.co Limitation | Counter |
|---|---|
| Cloud-only, no self-hosting | Deploys to founder's own cloud |
| Pricing opaque | Transparent, BYO-AI subscription |
| Context locked in their system | Context lives with the founder |
| Vendor lock-in by design | Data portability as a feature |

### The Dangerous Part: Claude Code Is Already Eating Layer 1

- Supabase became an official Claude connector in February 2026
- Vercel has an MCP server for Claude Code
- The full Claude + Vercel + Supabase stack is already a documented pattern
- VS Code and Claude Code both support BYOK
- The moat is NOT the connectors - it's the context layer + FDE delivery

### Architecture

```
Layer 3: FDE COLLECTIVE (Delivery)
Layer 2: CONTEXT LAYER (The Moat) - company digital twin, persistent context
Layer 1: BUILD PLATFORM (Commodity) - Claude Code, preset connectors, isolated components
```

---

## Round 6: Killing The FDE Collective, Going Solo-Led

**Lennert:** Instead of the FDE network, what is a strong GTM strategy, that doesn't put me at risk of non-delivery or bad customer experience. The model of having them inhouse seems way better - also driving it myself before I can attract employees.

On the 4. Pricing Paradox - this is really needed.

5. Completely fine for them to buy the outcome - which should be a fully deployed agent-fleet in their already existing eco-system

**Littlebird Analysis:**

### The GTM: Solo-Led, Land-and-Expand, Vertical-First

**Phase 0: The Wedge (Months 1-3)** - Pick one vertical, one process, one outcome. Sell "I'll fix your invoicing bottleneck" not "AI transformation."

**Phase 1: Manual Delivery, 5 Clients (Months 3-9)** - Walk into each client yourself. Conduct interviews, build digital twin, deploy agents. Goal is pattern extraction, not revenue.

**Phase 2: Productize The Patterns (Months 9-15)** - By client 5, see patterns. Interview templates, process map templates, agent templates. Delivery time drops from 8 weeks to 3-4 weeks. Margin goes from 30% to 50-60%.

**Phase 3: First Hire (Months 15-18)** - Hire first FDE as employee. Run 2 engagements in parallel.

### Land-and-Expand Motion

LAND: Map one process, deploy agents, prove ROI -> EXPAND: map next process -> EXPAND: twin covers 5 processes -> EXPAND: entire operation mapped -> LOCK-IN: twin IS the operational brain.

### The Pricing: Three-Layer Model

**Layer 1: The Mapping (One-Time Implementation Fee)**
- Single process (1-2 agents): $8K-$15K
- Department (3-5 agents): $20K-$35K
- Full company (8-15 agents): $40K-$75K

**Layer 2: The Agent Fleet (Monthly)**
- Option A: Per-agent subscription $500-$1,500/month per agent (simpler, predictable)
- Option B: Per-outcome pricing (aligned, harder to measure)
- Recommendation: Start with per-agent, shift to outcome-based after 10+ clients

**Layer 3: The Twin Maintenance (Retainer)**
- $1K-$3K/month for keeping the digital twin updated
- This is the lock-in: stale twin = agents making mistakes

### Full Math Per Client (30-person logistics company)

- Mapping fee: $25,000 (one-time)
- Agent fleet: $4,000/month (5 agents x $800)
- Twin maintenance: $1,500/month
- Year 1: $80K | Year 2+: $66K/year recurring
- 5 clients Year 1: $400K revenue, transitioning to $330K recurring
- 10 clients Year 2: ~$800K+

### What The SME Pays For (Paradox Resolved)

They bring: their own cloud, their own AI subscription, their existing tools, their data.
You provide: the mapping (interviews, process extraction, twin creation), the agent fleet (designed, deployed, configured, monitored), the integration (connecting agents to workflows), the maintenance (keeping twin alive).

The platform is YOUR internal tool. The agent fleet is THEIR product.

### Risk Mitigation: Why In-House Solves Delivery

- Inconsistent quality -> You deliver every engagement yourself until playbook is repeatable
- FDE pulled to higher-margin gig -> You own the client relationship
- No unified P&L -> It's all your P&L
- Change management not embedded -> You're there handling adoption
- Bad customer experience -> You are the most trained person on the platform

Trade-off: 2-3 engagements at a time solo. Capacity ceiling solved by hiring first FDE after engagement 5-7.

---

## Round 7: Naming - Kwantus

**Lennert:** What should I name the project/company "tweek" or "kostakwanta" or "kwantakosta"?

**Littlebird Analysis:**

- **tweek**: Already taken (Tweek Labs, Tweek calendar app, South Park association). tweek.com likely taken. "Tweak" implies small adjustments, undersells scope.
- **kostakwanta/kwantakosta**: Dutch/Afrikaans for "how much does it cost?" Completely unique, no company uses it. But 11 letters, hard to spell, two valid spellings, no meaning to international audience.

**Lennert:** can we rewrite kwantakosta into something that works better, while keeping its core e.g. "kwanta"

**Littlebird Research:**

- **Kwanta** alone: kwanta.ai already taken by an agentic retail OS company (direct collision). Also Kwanta Communications, Kwanta Software Solutions.
- **Kwantum**: Kwantum Nederland BV (Netherlands, furniture), Kwantum LLC (US, analytics), Kwantum Advisory (Canada).
- **Kwantify**: Kwantify Solutions (India, Oracle dev shop).
- **Kwantix**: kWantix LLC (US, electricity trading), Kwantix Angola.
- **Kwantus**: Latin "quantus" = "how much/how great." Root of "quantity" and "quantum." Dutch "kw" spelling. 6 letters. Collisions: Reddit username, South African guest house, LinkedIn consulting listing. Nothing in tech/AI/your space.
- **Kwantora**: Completely clear, zero collisions. But no inherent meaning.

### Recommendation: Kwantus

1. Keeps the "kwanta" core - same root, same Dutch "kw" character
2. Latin meaning is a gift: "quantus" = "how much" - the question every SME owner asks, and your pricing model answers
3. 6 letters - same territory as "tweek"
4. Clean enough - collisions are a Reddit username and a South African guest house
5. Sounds like a company, not a hackathon project
6. Scales from consultancy to platform to enterprise brand

The pitch: "Kwantus. It's Latin for 'how much.' Because that's the first question every business owner asks - and we're the first ones who give them a straight answer."

---

## Open Questions (Unresolved)

1. **Which vertical?** Need to pick one industry now. Which industry does Lennert have deepest access to?
2. **The first client**: Is there a friendly SME willing to be client zero?
3. **The pricing comfort zone**: Do the numbers ($25K mapping + $5,500/month) feel right for the target SME?
4. **The timeline expectation**: 3-5 months per engagement solo = 2-3 clients in year 1. Comfortable with that pace?
5. **The platform question**: Building the platform during engagements (client as testbed) or between engagements (using what you learned)?
6. **If Anthropic ships persistent context for Claude Code, what's left?** Is the context layer fundamentally hard to replicate?
7. **The context layer architecture**: Document store? Knowledge graph? File system with semantic search?
8. **The change management problem**: When agents automate a human's full-time job in a 25-person company, what happens to that human? Augment or replace?
9. **Geography**: Denmark? Nordics? Local team or flying to client sites?
10. **Domain availability**: Need to check kwantus.com, kwantus.ai, kwantus.io

---

## For future Claude

This is the full transcript of a PingPong ideation session on 2026-08-26 where Lennert and Littlebird developed the concept for "Kwantus" - an AI-native company operating system for SMEs (10-50 employees). The concept evolved from a pre-integrated AI dev platform to a consultancy-front/product-back business that maps SME operations through interviews, builds a Digital Twin of the Organization, and deploys agent fleets in the client's own infrastructure. The business model is solo-led land-and-expand with outcome-based pricing. The name "Kwantus" comes from Latin "quantus" (how much), keeping the Dutch "kw" heritage from the original "kwantakosta." Key open questions remain around vertical selection, first client, and context layer defensibility against Anthropic.
