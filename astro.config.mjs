// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://bl4d3.dev",
  trailingSlash: "never",

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Uncut Sans",
      cssVariable: "--font-uncut-sans",
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
        },
      },
    }),
  ],

  adapter: cloudflare({
    imageService: "compile",
  }),
});
