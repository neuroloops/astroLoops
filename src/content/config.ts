import { z, defineCollection } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    author: z.string().optional(),
    title: z.string(),
  })
})

const globalCollection = defineCollection({
  type: 'content',
  schema: z.object({
  })
})



export const collections = {
  posts: postCollection,
  global: globalCollection
}