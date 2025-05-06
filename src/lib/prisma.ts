import { PrismaClient } from '../generated/prisma';

declare global {
    // Esto asegura que `global.prisma` esté disponible en TypeScript
  var prisma: PrismaClient | undefined;
}
 
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;