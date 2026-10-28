import type { Article } from './types';

const article: Article = {
  slug: "sustainability-disclosure-readiness",
  title: "Is Your FM Data Ready for Sustainability Disclosure?",
  date: "2026-11-11",
  description: "Investors and regulators increasingly expect auditable sustainability data. How FM teams can get energy, water, and waste data into a state that will stand up to scrutiny.",
  category: "ESG",
  readingTime: 7,
  image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
  body: `
Sustainability reporting is moving from voluntary narrative to structured disclosure. International standards such as those from the ISSB are shaping what investors expect, and regulators in many markets are moving in the same direction. For organisations with property portfolios, much of the underlying data sits with the FM team.

That puts facilities managers in an important position. The numbers you collect on energy, water, refrigerants, and waste increasingly end up in documents that are read by boards, investors, and auditors. The question is whether that data is ready for that level of scrutiny.

## What "disclosure-ready" means

Disclosure-ready data has four qualities:

- **Complete:** it covers every site and every relevant source in the reporting boundary.
- **Consistent:** the same methods and conversion factors are used across sites and from year to year.
- **Traceable:** every figure can be traced back to a meter reading, invoice, or documented estimate.
- **Timely:** it is available soon enough after the period end to meet reporting deadlines.

Most FM teams score well on some of these and poorly on others. A quick self-assessment against each is a useful first step.

## Common gaps we see

**Missing sites.** Smaller or recently acquired buildings are often left out because data is hard to collect.

**Estimated data with no audit trail.** Estimates are acceptable when actual data is unavailable, but the method and assumptions need to be written down.

**Refrigerant losses not tracked.** Top-ups recorded in maintenance logs are rarely converted into emissions, yet refrigerant leaks can be a material part of Scope 1.

**Landlord and tenant boundaries unclear.** In shared buildings, it is often unclear who reports which consumption. Agree it in writing.

**Spreadsheets with no version control.** Data passes through several hands and versions, and nobody is sure which is final.

## A practical path to readiness

**1. Define the boundary.** List every site and every emission source in scope, and agree who owns the data for each.

**2. Document your methodology.** Write a short basis-of-preparation note covering data sources, conversion factors, estimation methods, and how gaps are handled.

**3. Automate collection where you can.** Utility portals, smart meters, and BMS exports can reduce manual entry and errors.

**4. Introduce a review step.** Have someone other than the person who compiled the data check it against prior periods and flag unusual movements.

**5. Run a dry run.** Before the first formal disclosure, prepare a full set of figures for a past period and test whether you could answer an auditor's questions about them.

## Start now, not at year end

The biggest mistake is to leave data collection until the reporting deadline. Monthly collection and review spreads the effort and makes problems visible while they can still be fixed.

Aston FM helps FM teams build reporting templates, document methodologies, and set up monthly data processes that make annual disclosure straightforward. Get in touch to discuss a readiness review.
`,
};

export default article;
