import { PrismaClient } from '@prisma/client';
import 'server-only';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

export const db = globalThis.cachedPrisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.cachedPrisma = db;
}