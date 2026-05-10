import { defineCollection, z } from 'astro:content';

const profile = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'profile': profile,
};