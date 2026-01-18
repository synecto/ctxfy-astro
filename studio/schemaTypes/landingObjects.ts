import {defineField, defineType} from 'sanity'

export const landingNavLink = defineType({
  name: 'landingNavLink',
  title: 'Landing nav link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
  ],
})

export const landingNav = defineType({
  name: 'landingNav',
  title: 'Landing nav',
  type: 'object',
  fields: [
    defineField({name: 'brandName', title: 'Brand name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'brandTagline', title: 'Brand tagline', type: 'string'}),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'landingNavLink'}],
      validation: (r) => r.min(2).max(6),
    }),
    defineField({
      name: 'cta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
      ],
    }),
  ],
})

export const landingHero = defineType({
  name: 'landingHero',
  title: 'Landing hero',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'body',
      title: 'Body copy',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
      ],
    }),
    defineField({
      name: 'bullets',
      title: 'Feature bullets',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.max(4),
    }),
  ],
})

export const landingOffer = defineType({
  name: 'landingOffer',
  title: 'Landing offer card',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
  ],
})

export const landingSplit = defineType({
  name: 'landingSplit',
  title: 'Landing split section',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'body',
      title: 'Body copy',
      type: 'text',
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'bullets',
      title: 'Feature bullets',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.max(4),
    }),
  ],
})

export const landingLogo = defineType({
  name: 'landingLogo',
  title: 'Landing logo',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()}),
  ],
})

export const landingTrusted = defineType({
  name: 'landingTrusted',
  title: 'Landing trusted section',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'body',
      title: 'Body copy',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{type: 'landingLogo'}],
      validation: (r) => r.max(12),
    }),
  ],
})

export const landingTestimonial = defineType({
  name: 'landingTestimonial',
  title: 'Landing testimonial',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (r) => r.required()}),
    defineField({name: 'author', title: 'Author', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'company', title: 'Company', type: 'string'}),
  ],
})

export const landingTestimonials = defineType({
  name: 'landingTestimonials',
  title: 'Landing testimonials section',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'landingTestimonial'}],
      validation: (r) => r.min(1).max(6),
    }),
  ],
})

export const landingPricingPlan = defineType({
  name: 'landingPricingPlan',
  title: 'Landing pricing plan',
  type: 'object',
  fields: [
    defineField({name: 'badge', title: 'Badge', type: 'string'}),
    defineField({name: 'name', title: 'Plan name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'currency', title: 'Currency', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'price', title: 'Price', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'cadence', title: 'Cadence', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({
      name: 'ctaLabel',
      title: 'CTA label',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.max(6),
    }),
  ],
})

export const landingPricing = defineType({
  name: 'landingPricing',
  title: 'Landing pricing section',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'body',
      title: 'Body copy',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'cta',
      title: 'Section CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
      ],
    }),
    defineField({name: 'plan', title: 'Plan', type: 'landingPricingPlan'}),
  ],
})

export const landingCta = defineType({
  name: 'landingCta',
  title: 'Landing final CTA',
  type: 'object',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
      ],
    }),
  ],
})

export const landingFooterLink = defineType({
  name: 'landingFooterLink',
  title: 'Landing footer link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
  ],
})

export const landingFooter = defineType({
  name: 'landingFooter',
  title: 'Landing footer',
  type: 'object',
  fields: [
    defineField({name: 'brandName', title: 'Brand name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'brandTagline', title: 'Brand tagline', type: 'string'}),
    defineField({
      name: 'contactLines',
      title: 'Contact lines',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.max(6),
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick links',
      type: 'array',
      of: [{type: 'landingFooterLink'}],
      validation: (r) => r.max(6),
    }),
    defineField({
      name: 'followLinks',
      title: 'Follow links',
      type: 'array',
      of: [{type: 'landingFooterLink'}],
      validation: (r) => r.max(6),
    }),
    defineField({
      name: 'newsletterLabel',
      title: 'Newsletter label',
      type: 'string',
    }),
    defineField({
      name: 'legalNote',
      title: 'Footer legal note',
      type: 'string',
    }),
  ],
})
