import {defineField, defineType} from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'SEO Title', type: 'string'}),
    defineField({name: 'description', title: 'SEO Description', type: 'text', rows: 2}),

    defineField({name: 'nav', title: 'Navigation', type: 'landingNav'}),
    defineField({name: 'hero', title: 'Hero', type: 'landingHero'}),

    defineField({
      name: 'offers',
      title: 'Offers',
      type: 'array',
      of: [{type: 'landingOffer'}],
      validation: (r) => r.min(3).max(6),
    }),

    defineField({name: 'split', title: 'Split section', type: 'landingSplit'}),
    defineField({name: 'trusted', title: 'Trusted section', type: 'landingTrusted'}),
    defineField({name: 'testimonials', title: 'Testimonials section', type: 'landingTestimonials'}),
    defineField({name: 'pricing', title: 'Pricing section', type: 'landingPricing'}),
    defineField({name: 'finalCta', title: 'Final CTA', type: 'landingCta'}),
    defineField({name: 'footer', title: 'Footer', type: 'landingFooter'}),
  ],
})
