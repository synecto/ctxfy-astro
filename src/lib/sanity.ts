import { createClient } from "@sanity/client";

export const sanity = createClient({
    projectId: import.meta.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.SANITY_DATASET,
    apiVersion: import.meta.env.SANITY_API_VERSION || "2026-01-01",
    useCdn: true,
    token: import.meta.env.SANITY_READ_TOKEN, // можно убрать, если контент публичный
});
