import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: ["*.json"], base: "src/data/projects" }),
  schema: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      link: z.string(),
    })
  ),
});

export const collections = { projects };
