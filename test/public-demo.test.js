import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(path, import.meta.url), 'utf8');

test('public demo shows the concrete cited network and its boundary', async () => {
  const html = await read('../web/index.html');
  assert.match(html, /Decision Network Mapper/);
  assert.match(html, /CoreWeave/);
  assert.match(html, /Flexential/);
  assert.match(html, /Public-source reference implementation/);
  assert.match(html, /does not establish procurement authority/i);
});

test('public demo excludes private tenant coordinates and person contact data', async () => {
  const html = await read('../web/index.html');
  for (const forbidden of [
    /Verdigris/i,
    /\/Users\//,
    /~\/Projects\//,
    /@verdigris\.co/i,
    /APOLLO_API_KEY/,
    /CLM-\d+|EVD-\d+|CAP-\d+|PER-\d+|PTR-\d+/
  ]) assert.doesNotMatch(html, forbidden);
});
