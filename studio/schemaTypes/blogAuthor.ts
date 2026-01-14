// studio/schemas/blogAuthor.ts
import {defineField, defineType} from 'sanity'

export const blogAuthor = defineType({
  name: 'blogAuthor',
  title: 'Blog author',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'role', type: 'string'}),
    defineField({name: 'avatar', type: 'image', options: {hotspot: true}}),
    defineField({name: 'bio', type: 'text', rows: 3}),
    defineField({name: 'x', type: 'url'}),
    defineField({name: 'github', type: 'url'}),
  ],
})
