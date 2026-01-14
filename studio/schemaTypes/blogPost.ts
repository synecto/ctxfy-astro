// studio/schemas/blogPost.ts
import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(280),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "blogCategory" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogTag" }] }],
      validation: (r) => r.unique(),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "blogAuthor" }],
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "updatedAt",
      type: "datetime",
    }),

    defineField({
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
        {
          type: "object",
          name: "callout",
          title: "Callout",
          fields: [
            defineField({
              name: "tone",
              type: "string",
              options: { list: ["info", "warning", "success", "danger"] },
              initialValue: "info",
            }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 3 }),
          ],
        },
        {
          type: "object",
          name: "ctaBlock",
          title: "CTA block",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "text", type: "text", rows: 3 }),
            defineField({ name: "ctaLabel", type: "string", initialValue: "Try free" }),
            defineField({ name: "ctaHref", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "ctaEvent",
              type: "string",
              description: "Amplitude event name (optional)",
            }),
          ],
        },
      ],
    }),

    // Связка с GTM-структурой:
    defineField({
      name: "relatedUseCases",
      title: "Related use cases",
      type: "array",
      of: [{ type: "reference", to: [{ type: "useCase" }] }],
    }),

    // SEO
    defineField({
      name: "seo",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", type: "string" }),
        defineField({ name: "metaDescription", type: "text", rows: 2 }),
        defineField({ name: "canonicalUrl", type: "url" }),
        defineField({ name: "ogImage", type: "image", options: { hotspot: true } }),
      ],
    }),

    // Фича-флаги/эксперименты (опционально, но полезно)
    defineField({
      name: "growthbook",
      title: "GrowthBook",
      type: "object",
      fields: [
        defineField({ name: "experimentKey", type: "string" }),
        defineField({ name: "variant", type: "string" }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "excerpt",
      media: "coverImage",
    },
  },
});
