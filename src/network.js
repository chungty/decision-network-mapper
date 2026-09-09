const publicTrigger = {
  name: 'CoreWeave and Flexential high-density AI deployment',
  announced: '2025-04-29',
  location: 'Plano, Texas',
  source: 'https://www.flexential.com/resources/press-release/flexential-support-coreweaves-ai-cloud-expansion-13-mw-high-density'
};

export const sampleNetwork = {
  trigger: publicTrigger,
  organizations: [
    {
      name: 'Flexential',
      role: 'facility operator',
      why: 'Public announcement identifies Flexential as the operator supporting the deployment.',
      sources: [publicTrigger.source],
      targetRoles: ['data center operations leader', 'capacity planning leader']
    },
    {
      name: 'CoreWeave',
      role: 'AI tenant',
      why: 'Public announcement identifies CoreWeave as the AI cloud customer expanding capacity in Plano.',
      sources: [publicTrigger.source, 'https://www.coreweave.com/blog/coreweave-data-center-operations-built-for-ai'],
      targetRoles: ['infrastructure operations leader', 'data center capacity leader']
    },
    {
      name: 'Corgan',
      role: 'data-center architect',
      why: 'Public Texas project records and Corgan’s data-center practice connect the firm to the relevant facility expansion context.',
      sources: ['https://www.tdlr.texas.gov/TABS/Search/Print/TABS2021006044', 'https://www.corgan.com/markets/data-centers'],
      targetRoles: ['data center principal', 'mission-critical design leader']
    },
    {
      name: 'PCL Construction',
      role: 'delivery contractor',
      why: 'PCL publishes work on a Flexential data-center expansion, making it a documented delivery-pattern analogue rather than a claim about this specific project.',
      sources: ['https://www.pcl.com/us/en/our-work/flexential-data-center-expansion'],
      targetRoles: ['mission-critical construction leader', 'commissioning delivery leader']
    },
    {
      name: 'kW Mission Critical Engineering',
      role: 'mission-critical engineering',
      why: 'The firm publishes mission-critical data-center engineering work and has public Flexential-related delivery context.',
      sources: ['https://www.kwmce.com/', 'https://www.mckenneys.com/experiences/flexential-data-center/'],
      targetRoles: ['electrical engineering principal', 'commissioning leader']
    },
    {
      name: 'Vertiv',
      role: 'cooling infrastructure supplier',
      why: 'Vertiv publicly describes its work with CoreWeave on AI infrastructure and liquid cooling.',
      sources: ['https://www.vertiv.com/en-asia/about/news-and-insights/articles/blog-posts/how-vertiv-and-coreweave-are-orchestrating-ai-innovation/'],
      targetRoles: ['AI infrastructure strategy leader', 'liquid cooling product leader']
    }
  ],
  reviewBoundary: 'Human review required: this map starts an investigation. It does not establish procurement authority, commercial intent, or a relationship with any organization.'
};

export function validateNetwork(network) {
  const errors = [];
  if (!network.trigger?.source?.startsWith('https://')) errors.push('trigger needs a public HTTPS source');
  if (!Array.isArray(network.organizations) || network.organizations.length < 1) errors.push('network needs organizations');
  for (const organization of network.organizations ?? []) {
    if (!organization.name || !organization.role || !organization.why) errors.push('organization needs name, role, and rationale');
    if (!organization.sources?.length || !organization.sources.every((url) => url.startsWith('https://'))) errors.push(`${organization.name} needs public HTTPS sources`);
    if (!organization.targetRoles?.length) errors.push(`${organization.name} needs target roles`);
    if ('contacts' in organization) errors.push(`${organization.name} may not include contact records`);
  }
  return { errors };
}

export function renderBrief(network) {
  const lines = [
    `Decision network: ${network.trigger.name}`,
    `Public signal: ${network.trigger.location} · announced ${network.trigger.announced}`,
    'Evidence-backed organizations:'
  ];
  for (const organization of network.organizations) {
    lines.push(`- ${organization.name} · ${organization.role}`);
    lines.push(`  Why: ${organization.why}`);
    lines.push(`  Target roles: ${organization.targetRoles.join('; ')}`);
    lines.push(`  Sources: ${organization.sources.join(' | ')}`);
  }
  lines.push('Boundary: public sources only; human review required before outreach.');
  return lines.join('\n');
}
