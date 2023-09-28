import { z, defineCollection } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string().optional(),
    title: z.string(),
  })
})



export const collections = {
  posts: postCollection,
}