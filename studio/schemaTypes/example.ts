import {defineField, defineType} from 'sanity'

export const example = defineType({
  name: 'example',
  title: 'Example',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({name: 'summary', type: 'text', rows: 2, validation: (r) => r.required()}),

    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.max(12),
    }),

    defineField({
      name: 'relatedUseCases',
      title: 'Related use cases',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'useCase'}]}],
    }),

    defineField({
      name: 'problem',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'details', type: 'text', rows: 4, validation: (r) => r.required()}),
      ],
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'solution',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'details', type: 'text', rows: 4, validation: (r) => r.required()}),
      ],
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        defineType({
          name: 'exampleStep',
          title: 'Step',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'description',
              type: 'text',
              rows: 3,
              validation: (r) => r.required(),
            }),
          ],
        }),
      ],
      validation: (r) => r.min(3).max(12),
    }),

    defineField({
      name: 'expectedOutput',
      title: 'Expected output',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.min(2).max(10),
    }),

    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', type: 'string'}),
        defineField({name: 'href', type: 'string'}),
      ],
    }),
  ],
})
