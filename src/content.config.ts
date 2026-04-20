import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tests = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/tests" }),
  schema: z.object({
    asignatura: z.string(),
    preguntas: z.array(z.object({
      id: z.number(),
      enunciado: z.string(),
      opciones: z.array(z.string()),
      correcta: z.number()
    }))
  })
});

export const collections = { tests };