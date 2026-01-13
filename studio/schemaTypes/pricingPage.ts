import {defineField, defineType} from 'sanity'

export const pricingPage = defineType({
  name: 'pricingPage',
  title: 'Pricing Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'SEO Title', type: 'string'}),
    defineField({name: 'description', title: 'SEO Description', type: 'text', rows: 2}),

    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({name: 'headline', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'subheadline', type: 'text', rows: 2}),
        defineField({
          name: 'billingDefault',
          type: 'string',
          options: {list: ['monthly', 'yearly']},
          initialValue: 'monthly',
        }),
      ],
      validation: (r) => r.required(),
    }),

    defineField({
      name: 'plans',
      type: 'array',
      of: [
        defineType({
          name: 'pricingPlan',
          title: 'Plan',
          type: 'object',
          fields: [
            defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'badge', type: 'string'}),
            defineField({
              name: 'description',
              type: 'text',
              rows: 2,
              validation: (r) => r.required(),
            }),

            defineField({
              name: 'price',
              type: 'object',
              fields: [
                defineField({name: 'monthly', type: 'string', validation: (r) => r.required()}),
                defineField({name: 'yearly', type: 'string'}),
                defineField({name: 'note', type: 'string'}),
              ],
              validation: (r) => r.required(),
            }),

            defineField({
              name: 'features',
              type: 'array',
              of: [{type: 'string'}],
              validation: (r) => r.min(4).max(20),
            }),

            defineField({
              name: 'cta',
              type: 'object',
              fields: [
                defineField({name: 'label', type: 'string', validation: (r) => r.required()}),
                defineField({name: 'href', type: 'string', validation: (r) => r.required()}),
              ],
              validation: (r) => r.required(),
            }),

            defineField({name: 'isPrimary', type: 'boolean', initialValue: false}),
          ],
        }),
      ],
      validation: (r) => r.min(2).max(4),
    }),

    defineField({
      name: 'comparison',
      title: 'Comparison table',
      type: 'object',
      fields: [
        defineField({
          name: 'rows',
          type: 'array',
          of: [
            defineType({
              name: 'pricingRow',
              title: 'Row',
              type: 'object',
              fields: [
                defineField({name: 'feature', type: 'string', validation: (r) => r.required()}),
                defineField({
                  name: 'values',
                  type: 'array',
                  of: [{type: 'string'}],
                  validation: (r) => r.required().min(2).max(4),
                  description: "Match number of plans (same order). Use '✓', '—', or text.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'faq',
      type: 'array',
      of: [
        defineType({
          name: 'pricingFaq',
          title: 'FAQ item',
          type: 'object',
          fields: [
            defineField({name: 'q', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'a', type: 'text', rows: 3, validation: (r) => r.required()}),
          ],
        }),
      ],
      validation: (r) => r.max(12),
    }),
  ],
})
