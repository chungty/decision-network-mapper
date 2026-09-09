import test from 'node:test';
import assert from 'node:assert/strict';
import { validateNetwork, renderBrief, sampleNetwork } from '../src/network.js';

test('sample decision network is public-source-backed and has no person contact data', () => {
  const result = validateNetwork(sampleNetwork);
  assert.deepEqual(result.errors, []);
  assert.ok(sampleNetwork.organizations.length >= 6);
  for (const organization of sampleNetwork.organizations) {
    assert.ok(organization.sources.every((url) => url.startsWith('https://')));
    assert.ok(organization.targetRoles.length > 0);
    assert.equal('contacts' in organization, false);
  }
});

test('brief preserves the trigger, organization evidence, and review boundary', () => {
  const brief = renderBrief(sampleNetwork);
  assert.match(brief, /Flexential/i);
  assert.match(brief, /CoreWeave/i);
  assert.match(brief, /human review required/i);
  assert.match(brief, /public sources/i);
});
