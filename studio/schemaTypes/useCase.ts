import { defineField, defineType } from "sanity";

export const useCase = defineType({
    name: "useCase",
    title: "Use Case",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (r) => r.required().min(8),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 80 },
            validation: (r) => r.required(),
        }),

        // Hero / messaging
        defineField({
            name: "heroHeadline",
            title: "Hero Headline",
            type: "string",
            validation: (r) => r.required().min(10),
        }),
        defineField({
            name: "subheadline",
            title: "Subheadline",
            type: "text",
            rows: 2,
            validation: (r) => r.required().min(20),
        }),
        defineField({
            name: "proofPoints",
            title: "Proof points",
            type: "array",
            of: [{ type: "string" }],
            validation: (r) => r.max(5),
        }),

        // JTBD moment / problem
        defineField({
            name: "momentBullets",
            title: "Moment / Trigger bullets",
            type: "array",
            of: [{ type: "string" }],
            validation: (r) => r.min(3).max(8),
        }),
        defineField({
            name: "stakes",
            title: "Stakes",
            type: "string",
            options: { list: ["low", "medium", "high", "critical"] },
            initialValue: "high",
            validation: (r) => r.required(),
        }),

        // Activation
        defineField({
            name: "ahaMoment",
            title: "Aha Moment",
            type: "string",
            validation: (r) => r.required().min(10),
        }),
        defineField({
            name: "timeToValue",
            title: "Time to value",
            type: "string",
            description: `e.g. "< 10 minutes"`,
            validation: (r) => r.required(),
        }),
        defineField({
            name: "firstRunChecklist",
            title: "First run checklist",
            type: "array",
            of: [{ type: "string" }],
            validation: (r) => r.min(3).max(8),
        }),

        // How it works
        defineField({
            name: "howItWorks",
            title: "How it works (3 steps)",
            type: "array",
            of: [
                defineType({
                    name: "howStep",
                    title: "Step",
                    type: "object",
                    fields: [
                        defineField({ name: "title", type: "string", validation: (r) => r.required() }),
                        defineField({ name: "description", type: "text", rows: 2, validation: (r) => r.required() }),
                    ],
                }),
            ],
            validation: (r) => r.required().min(3).max(4),
        }),

        // Evidence blocks
        defineField({
            name: "evidenceBlocks",
            title: "Evidence blocks",
            type: "array",
            of: [
                defineType({
                    name: "evidenceBlock",
                    title: "Evidence",
                    type: "object",
                    fields: [
                        defineField({
                            name: "type",
                            type: "string",
                            options: { list: ["screenshot", "demo", "benchmark", "case-study", "calculator"] },
                            validation: (r) => r.required(),
                        }),
                        defineField({ name: "claim", type: "string", validation: (r) => r.required() }),
                        defineField({ name: "measurement", type: "string" }),
                        defineField({ name: "asset", type: "image" }),
                        defineField({
                            name: "linkToExample",
                            type: "reference",
                            to: [{ type: "example" }],
                        }),
                    ],
                }),
            ],
        }),

        // Objections / FAQ
        defineField({
            name: "faq",
            title: "FAQ",
            type: "array",
            of: [
                defineType({
                    name: "faqItem",
                    title: "FAQ item",
                    type: "object",
                    fields: [
                        defineField({ name: "q", type: "string", validation: (r) => r.required() }),
                        defineField({ name: "a", type: "text", rows: 3, validation: (r) => r.required() }),
                    ],
                }),
            ],
        }),

        // CTAs
        defineField({
            name: "primaryCta",
            title: "Primary CTA",
            type: "object",
            fields: [
                defineField({ name: "label", type: "string", validation: (r) => r.required() }),
                defineField({ name: "href", type: "string", validation: (r) => r.required() }),
            ],
            validation: (r) => r.required(),
        }),
        defineField({
            name: "secondaryCta",
            title: "Secondary CTA",
            type: "object",
            fields: [
                defineField({ name: "label", type: "string" }),
                defineField({ name: "href", type: "string" }),
            ],
        }),

        // Relations
        defineField({
            name: "relatedUseCases",
            title: "Related use cases",
            type: "array",
            of: [{ type: "reference", to: [{ type: "useCase" }] }],
            validation: (r) => r.max(6),
        }),

        // Optional: внутренняя “истина” (ваш большой JTBD JSON)
        defineField({
            name: "jtbdJson",
            title: "JTBD JSON (internal)",
            type: "text",
            description: "Optional. Store the full GTM-ready JTBD object as JSON for internal tooling.",
        }),
    ],
});
