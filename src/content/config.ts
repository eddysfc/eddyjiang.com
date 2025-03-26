import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
    }),
});

const projectCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        description: z.optional(z.string()),
        startDate: z.optional(z.date()),
        endDate: z.optional(z.date()),
        links: z.optional(z.array(z.tuple([z.string(), z.string().url()]))),
    }),
});

const researchCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        description: z.optional(z.string()),
        association: z.optional(z.tuple([z.string(), z.optional(z.string().url())])),
        startDate: z.optional(z.date()),
        endDate: z.optional(z.date()),
        link: z.optional(z.tuple([z.string(), z.string().url()])),
    }),
});


export const collections = {
    posts: postCollection,
    projects: projectCollection,
    research: researchCollection
};