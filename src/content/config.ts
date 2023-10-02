import { z, defineCollection } from 'astro:content'
import { Buffer } from 'buffer'

const linkSchema = z.object({
	path: z.string(),
	name: z.string()
})

const postCollection = defineCollection({
	type: 'content',
	schema: z.object({
		author: z.string().optional(),
		title: z.string()
	})
})

const globalCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		links: z.array(linkSchema),
		email: z.string().transform((str) => Buffer.from(str, 'base64').toString('utf-8'))
	})
})

export const collections = {
	posts: postCollection,
	global: globalCollection
}
