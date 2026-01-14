// studio/schemas/blogTag.ts
import {defineField, defineType} from 'sanity'

export const blogTag = defineType({
  name: 'blogTag',
  title: 'Blog tag',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
  ],
})
