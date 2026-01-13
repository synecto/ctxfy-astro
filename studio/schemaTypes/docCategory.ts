import {defineField, defineType} from 'sanity'

export const docCategory = defineType({
  name: 'docCategory',
  title: 'Doc Category',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 64},
      validation: (r) => r.required(),
    }),
    defineField({name: 'order', type: 'number', initialValue: 100}),
    defineField({name: 'description', type: 'text', rows: 2}),
  ],
})
