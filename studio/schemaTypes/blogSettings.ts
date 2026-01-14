// studio/schemas/blogSettings.ts
import {defineField, defineType} from 'sanity'

export const blogSettings = defineType({
  name: 'blogSettings',
  title: 'Blog settings',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', initialValue: 'Blog'}),
    defineField({name: 'subtitle', type: 'text', rows: 2}),
    defineField({
      name: 'featuredPosts',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'blogPost'}]}],
    }),
  ],
})
