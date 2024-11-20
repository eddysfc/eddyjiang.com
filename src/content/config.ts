import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        slug: z.string(),
    }),
});

export const collections = {
    "posts": postCollection,
};