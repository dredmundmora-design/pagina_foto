import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    resumen: z.string().optional(),
  }),
});

const series = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/series" }),
  schema: z.object({
    titulo: z.string(),
    año: z.string(),
    descripcion: z.string(),
    fotos: z.number().default(6),
    orden: z.number().optional(),
  }),
});

export const collections = { blog, series };