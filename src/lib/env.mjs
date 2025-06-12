import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
  },
  client: {},
  experimental__runtimeEnv: {},

   runtimeEnv: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  onValidationError: (error) => {
    console.error("❌ Erreur de validation des variables d'environnement");
    console.error(error); // Ajoute ça pour plus de détails
    throw new Error("Échec de validation des variables d'environnement");
  },
});
