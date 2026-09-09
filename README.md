# Decision Network Mapper

A public reference implementation for mapping a public business signal into the organizations that influence the resulting buying decision.

## Why it exists

Contact databases are organized around accounts and org charts. Many B2B decisions move through a wider network: the operator, tenant, architect, contractor, commissioning team, and equipment suppliers. This project starts with a public trigger, maps that network from cited sources, and produces a reviewable outreach brief.

It intentionally does **not** send email, enrich private contact data, or claim that a map is complete. The included example uses public companies and source URLs; its named role placeholders are fictional.

## Included example

The sample trigger is a public April 2025 announcement that Flexential would support CoreWeave with a 13 MW high-density AI deployment in Plano, Texas. The map includes:

- Flexential — facility operator
- CoreWeave — AI tenant
- Corgan — data-center architect
- PCL Construction — contractor with published Flexential expansion work
- kW Mission Critical Engineering — mission-critical engineering
- Vertiv — cooling infrastructure partner

Each inclusion carries a public source URL. The project treats this as an evidence-backed starting point, not a claim that every party or individual participated in the Plano deployment.

## Run it

```bash
npm test
```

The test validates the public-source map and prints a compact decision-network brief. No API key, local private data, or external write is required.

## Output model

```text
public trigger
  ├─ facility operator
  ├─ AI tenant
  ├─ design and delivery partners
  └─ power and cooling suppliers

reviewable brief
  ├─ why each organization is in scope
  ├─ public evidence links
  ├─ target role types
  └─ a human-reviewed outreach angle
```

## Boundaries

- All organization names and source links in the included example are public.
- Role placeholders are synthetic. The repository contains no private contact records, email addresses, API credentials, or customer data.
- The generic example copy is illustrative. It is not an approved claim library and must be reviewed before any real outreach is sent.
- A decision network is an investigation aid, not proof of procurement authority, commercial intent, or a relationship with any listed organization.

## Origin

Thomas Chung built the original concept for the Apollo × Google Cloud Hackathon in April 2026. This public edition preserves the approach while replacing private tenant material and contact data with public sources and explicit boundaries.

## License

MIT
