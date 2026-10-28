import type { Article } from './types';

const article: Article = {
  slug: "district-cooling-bills",
  title: "District Cooling Bills: Seven Checks Every UAE FM Team Should Make",
  date: "2026-10-14",
  description: "District cooling is often the largest single utility line for UAE buildings. Seven practical checks to make sure you are paying for the cooling you actually use.",
  category: "Energy",
  readingTime: 6,
  image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  body: `
For many commercial and residential buildings in Dubai and Abu Dhabi, district cooling is the largest single utility cost on the FM budget. Yet it is also one of the least scrutinised. Bills arrive monthly, they are paid, and few teams go back to check whether the charges reflect how the building is really being used.

The good news is that most of the savings opportunities do not need capital investment. They need someone to read the contract, compare it against the data, and ask the right questions. Here are seven checks we recommend every FM team makes before the next budget cycle.

## 1. Confirm the contracted capacity still fits the building

District cooling agreements usually include a capacity charge based on contracted refrigeration tons (RT). That figure was often set years ago, at design stage or first fit-out. If occupancy patterns, tenant mix, or building use have changed since, the contracted capacity may be well above what the building actually draws at peak. Pull twelve months of peak demand data and compare it with the contracted figure. A sustained gap is the starting point for a conversation with the provider.

## 2. Read the meter data, not just the invoice

Invoices show totals; meter data shows behaviour. Ask the provider or your BMS team for interval data from the energy transfer station. Look for cooling consumption overnight, at weekends, and during public holidays. Unexpected baseload usually points to air handling units, fan coil units, or chilled water pumps that are running outside occupied hours.

## 3. Check the delta T

Low temperature difference between supply and return chilled water is one of the most common and costly problems in district-cooled buildings. It means more water is being pumped for the same cooling effect, and some contracts penalise poor delta T directly. Common causes include open bypass valves, poorly balanced systems, and control valves that are stuck or oversized. A short commissioning review can often recover the design delta T.

## 4. Review setpoints and schedules

Temperature setpoints drift over time as occupants request changes and nobody resets them. Walk the BMS and check zone setpoints, schedules, and overrides. Even a modest, consistent increase in setpoints in common areas and back-of-house spaces reduces cooling demand without affecting comfort where it matters.

## 5. Make sure tenant recharges are accurate

In multi-tenanted buildings, cooling costs are usually recharged to occupiers. Check that sub-metering is working, that recharge calculations follow the lease terms, and that common area consumption is allocated correctly. Errors here can cost landlords money or damage tenant relationships, and they are rarely spotted without a deliberate review.

## 6. Look at the tariff and fixed charges

Understand exactly which parts of the bill are fixed and which vary with consumption. Fixed capacity charges reward right-sizing the contract; variable charges reward reducing consumption. Knowing the split tells you where effort will pay back fastest.

## 7. Feed the data into your ESG reporting

District cooling consumption contributes to your Scope 2 emissions. If you are already collecting interval data for the checks above, set it up once so it also flows into your carbon reporting. That way the same dataset supports cost control and sustainability disclosure.

## Where to start

If you only have time for one thing this quarter, start with checks one and two: compare contracted capacity with actual peak demand, and look at out-of-hours consumption. Together they usually reveal whether there is a meaningful opportunity worth pursuing.

Aston FM supports FM teams with utility bill reviews, cooling system diagnostics, and the business case for contract renegotiation. If you would like a second pair of eyes on your district cooling costs, get in touch.
`,
};

export default article;
