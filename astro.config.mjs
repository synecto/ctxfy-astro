// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import markdoc from "@astrojs/markdoc";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // The `site` property specifies the base URL for your site.
  // Be sure to update this to your own domain (e.g., "https://yourdomain.com") before deploying.
  site: "https://data-nova.vercel.app",
  prefetch: true,
  trailingSlash: "never",
  experimental: {
    clientPrerender: true,
    fonts: [
      {
        provider: fontProviders.google(),
        name: "DM Sans",
        cssVariable: "--font-dm-sans",
        weights: ["300 700"],
      },
      {
        provider: fontProviders.google(),
        name: "Work Sans",
        cssVariable: "--font-work-sans",
        weights: ["400 700"],
      },
    ],
  },
  integrations: [
    markdoc(),
    ...(process.env.SKIP_KEYSTATIC ? [] : []),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel(),
});
