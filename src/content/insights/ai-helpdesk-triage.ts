import type { Article } from './types';

const article: Article = {
  slug: "ai-helpdesk-triage",
  title: "Using AI to Triage FM Helpdesk Requests: A Practical Starting Point",
  date: "2026-12-23",
  description: "AI can categorise, prioritise, and route FM helpdesk requests faster and more consistently. A low-risk way to start, and the pitfalls to avoid.",
  category: "AI & FM",
  readingTime: 5,
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  body: `
The FM helpdesk is where occupants meet the service. It is also where a surprising amount of time is spent reading requests, deciding what they are about, setting a priority, and passing them to the right team. That work is repetitive, which makes it a good candidate for AI assistance.

Done well, AI triage gets jobs to the right engineer faster and makes priorities more consistent. Done badly, it frustrates occupants and creates new errors. The difference is mostly in how you start.

## What AI triage can do

Modern language models are good at reading short, informal text and extracting structure from it. For a typical helpdesk, that means:

- Assigning a category, such as HVAC, electrical, plumbing, or cleaning.
- Suggesting a priority based on the description and location.
- Identifying the asset or area involved.
- Spotting duplicates when several people report the same issue.
- Drafting an acknowledgement to the requester.

## Start with suggestions, not decisions

The safest first step is to have AI suggest the category and priority while a helpdesk operator confirms or corrects it. This keeps a person in control, builds trust in the system, and produces a record of where the AI gets things wrong. After a few weeks, you will know which categories it handles reliably and which still need human judgement.

## Use your own history

Past helpdesk tickets are the best guide to how your organisation categorises and prioritises work. Use a sample of historical tickets to test the AI before it goes live, and compare its suggestions with what actually happened. This shows quickly whether the approach works for your sites.

## Keep safety-critical requests with people

Anything involving life safety, such as fire systems, gas, electrical hazards, lift entrapments, or water ingress near electrics, should always be escalated immediately and reviewed by a person. Build these rules in explicitly rather than relying on the AI to recognise urgency.

## Measure the effect

Track a few simple measures before and after introducing AI triage: time from request to assignment, the proportion of tickets re-categorised later, and occupant satisfaction with the helpdesk. If these do not improve, adjust the approach before expanding it.

## Mind the data

Helpdesk requests can include names, phone numbers, and sometimes sensitive information. Check where the AI service processes data, how long it keeps it, and whether that fits your data protection obligations and client contracts.

## A realistic ambition

AI will not replace a good helpdesk team, but it can take away much of the repetitive sorting so that people can focus on the requests that need judgement and on keeping occupants informed.

Aston FM helps FM teams design and pilot practical AI tools for helpdesk, reporting, and administration. Contact us to discuss where AI could help your operation.
`,
};

export default article;
