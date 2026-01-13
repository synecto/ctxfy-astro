import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'SEO Title', type: 'string'}),
    defineField({name: 'description', title: 'SEO Description', type: 'text', rows: 2}),

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'headline', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'subheadline', type: 'text', rows: 2, validation: (r) => r.required()}),
        defineField({
          name: 'primaryCta',
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'href', type: 'string', validation: (r) => r.required()}),
          ],
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'secondaryCta',
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string'}),
            defineField({name: 'href', type: 'string'}),
          ],
        }),
        defineField({
          name: 'microProof',
          title: 'Micro proof bullets',
          type: 'array',
          of: [{type: 'string'}],
          validation: (r) => r.max(5),
        }),
      ],
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'valueCards',
      title: 'Value cards',
      type: 'array',
      of: [
        defineType({
          name: 'valueCard',
          title: 'Value card',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'description',
              type: 'text',
              rows: 2,
              validation: (r) => r.required(),
            }),
          ],
        }),
      ],
      validation: (r) => r.min(3).max(6),
    }),

    defineField({
      name: 'featuredUseCases',
      title: 'Featured use cases',
      description: 'If empty — homepage will auto-pick latest use cases.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'useCase'}]}],
      validation: (r) => r.max(9),
    }),

    defineField({
      name: 'howItWorks',
      title: 'How it works (3 steps)',
      type: 'array',
      of: [
        defineType({
          name: 'howItWorksStep',
          title: 'Step',
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'description',
              type: 'text',
              rows: 2,
              validation: (r) => r.required(),
            }),
          ],
        }),
      ],
      validation: (r) => r.min(3).max(3),
    }),

    defineField({
      name: 'evidence',
      title: 'Evidence blocks',
      type: 'array',
      of: [
        defineType({
          name: 'homeEvidence',
          title: 'Evidence',
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              type: 'string',
              options: {list: ['screenshot', 'demo', 'benchmark', 'case-study', 'calculator']},
              validation: (r) => r.required(),
            }),
            defineField({name: 'claim', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'measurement', type: 'string'}),
            defineField({name: 'href', type: 'string'}),
          ],
        }),
      ],
      validation: (r) => r.max(6),
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        defineType({
          name: 'homeFaq',
          title: 'FAQ item',
          type: 'object',
          fields: [
            defineField({name: 'q', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'a', type: 'text', rows: 3, validation: (r) => r.required()}),
          ],
        }),
      ],
      validation: (r) => r.max(10),
    }),

    defineField({
      name: 'finalCta',
      title: 'Final CTA',
      type: 'object',
      fields: [
        defineField({name: 'headline', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'subheadline', type: 'text', rows: 2}),
        defineField({
          name: 'primaryCta',
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'href', type: 'string', validation: (r) => r.required()}),
          ],
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'secondaryCta',
          type: 'object',
          fields: [
            defineField({name: 'label', type: 'string'}),
            defineField({name: 'href', type: 'string'}),
          ],
        }),
      ],
    }),
  ],
})
