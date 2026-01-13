import {defineField, defineType} from 'sanity'

export const doc = defineType({
  name: 'doc',
  title: 'Doc Page',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),

    // Nested docs: ["getting-started", "quickstart"] => /docs/getting-started/quickstart/
    defineField({
      name: 'slugPath',
      title: 'Slug path (segments)',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1).max(6),
      description: "Example: ['getting-started','quickstart']",
    }),

    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'docCategory'}],
      validation: (r) => r.required(),
    }),

    defineField({name: 'order', type: 'number', initialValue: 100}),
    defineField({name: 'summary', type: 'text', rows: 2}),

    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'code',
          options: {withFilename: true},
        },
      ],
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'relatedUseCases',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'useCase'}]}],
    }),

    defineField({
      name: 'meta',
      type: 'object',
      fields: [
        defineField({name: 'seoTitle', type: 'string'}),
        defineField({name: 'seoDescription', type: 'text', rows: 2}),
      ],
    }),
  ],
})
