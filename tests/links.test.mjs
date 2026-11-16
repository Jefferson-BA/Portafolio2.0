import assert from 'node:assert/strict';
import test from 'node:test';
import { safeExternalUrl } from '../src/lib/links.ts';

test('accepts complete HTTP(S) links and preserves paths, queries and fragments', () => {
  assert.equal(
    safeExternalUrl('https://github.com/jefferson/repo?tab=readme#demo'),
    'https://github.com/jefferson/repo?tab=readme#demo',
  );
  assert.equal(
    safeExternalUrl('http://localhost:3000/demo'),
    'http://localhost:3000/demo',
  );
  assert.equal(
    safeExternalUrl('  https://example.com  '),
    'https://example.com/',
  );
});

test('rejects executable, file and protocol-relative links', () => {
  for (const url of [
    'javascript:alert(1)',
    'JaVaScRiPt:alert(1)',
    'data:text/html,<script>alert(1)</script>',
    'file:///etc/passwd',
    '//example.com',
    '/demo',
  ]) {
    assert.equal(safeExternalUrl(url), undefined, url);
  }
});

test('rejects links with embedded credentials', () => {
  assert.equal(safeExternalUrl('https://user:password@example.com'), undefined);
});

test('empty and malformed editable links do not produce destinations', () => {
  for (const url of ['', undefined, '   ', 'not a url', 'https://'])
    assert.equal(safeExternalUrl(url), undefined);
});
