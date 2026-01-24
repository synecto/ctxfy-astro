import {defineField, defineType} from 'sanity'

export const navigationMenuItem = defineType({
  name: 'navigationMenuItem',
  title: 'Navigation Menu Item',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'icon', title: 'Icon', type: 'string', description: 'Icon name (e.g., chartPie, articles)'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
  ],
})

export const navigationMenuSection = defineType({
  name: 'navigationMenuSection',
  title: 'Navigation Menu Section',
  type: 'object',
  fields: [
    defineField({name: 'sectionTitle', title: 'Section Title', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'navigationMenuItem'}],
      validation: (r) => r.min(1),
    }),
  ],
})

export const navigationFeaturesMenu = defineType({
  name: 'navigationFeaturesMenu',
  title: 'Features Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'navigationMenuSection'}],
      validation: (r) => r.min(1),
    }),
  ],
})

export const navigationPlatformItem = defineType({
  name: 'navigationPlatformItem',
  title: 'Platform Item',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2, validation: (r) => r.required()}),
    defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'image', title: 'Image', type: 'string', validation: (r) => r.required()}),
  ],
})

export const navigationPlatformMenu = defineType({
  name: 'navigationPlatformMenu',
  title: 'Platform Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Platform Items',
      type: 'array',
      of: [{type: 'navigationPlatformItem'}],
      validation: (r) => r.min(1),
    }),
  ],
})

export const navigationSupportMenu = defineType({
  name: 'navigationSupportMenu',
  title: 'Support Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'navigationMenuSection'}],
      validation: (r) => r.min(1),
    }),
  ],
})

export const navigationDownloadsMenu = defineType({
  name: 'navigationDownloadsMenu',
  title: 'Downloads Menu',
  type: 'object',
  fields: [
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'navigationMenuSection'}],
      validation: (r) => r.min(1),
    }),
  ],
})

export const navigationSettings = defineType({
  name: 'navigationSettings',
  title: 'Navigation Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'primaryLinks',
      title: 'Primary Navigation Links',
      type: 'array',
      of: [{type: 'navigationMenuItem'}],
      description: 'Main navigation links (About, Contact, etc.)',
    }),
    defineField({
      name: 'featuresMenu',
      title: 'Features Menu',
      type: 'navigationFeaturesMenu',
    }),
    defineField({
      name: 'platformMenu',
      title: 'Platform Menu',
      type: 'navigationPlatformMenu',
    }),
    defineField({
      name: 'supportMenu',
      title: 'Support Menu',
      type: 'navigationSupportMenu',
    }),
    defineField({
      name: 'downloadsMenu',
      title: 'Downloads Menu',
      type: 'navigationDownloadsMenu',
    }),
    defineField({
      name: 'useCasesMenu',
      title: 'Use Cases Menu',
      type: 'navigationFeaturesMenu',
    }),
    defineField({
      name: 'primaryCTA',
      title: 'Primary CTA Button',
      type: 'object',
      fields: [
        defineField({name: 'text', title: 'Text', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'href', title: 'Href', type: 'string', validation: (r) => r.required()}),
      ],
    }),
  ],
})
