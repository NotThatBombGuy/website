import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		hasHidden: z.boolean().default(false),
		hidden: z.string().optional(),
		hasImg: z.boolean().default(false),
		imgSrc: z.string().optional(),
		imgAlt: z.string().optional(),
	}),
});

export const collections = { blog };
