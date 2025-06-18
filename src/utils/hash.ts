import { createHash } from 'crypto';

export const normalize = (s = '') =>
  s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
   .trim().toLowerCase();

export const sha256 = (s: string) =>
  createHash('sha256').update(normalize(s)).digest('hex');
