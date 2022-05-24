import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    head: {
        titleTemplate: "Stas Zelenko • Minsk based Freelance Full Stack Web Developer",
        viewport: "width=device-width, initial-scale=1, maximum-scale=1",
        charset: "utf-8",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                property: "og:image",
                content: "https://zelen-co.com/og-image.png"
            }
        ],
        link: [
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
            }
        ]
    },
    css: ["@/assets/styles/index.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/theme.scss";'
                }
            }
        }
    },
    buildModules: ["@pinia/nuxt"],
    publicRuntimeConfig: {
        graphcmsUrl: process.env.GRAPHCMS_URL
    },
    runtimeConfig: {
        graphcmsUrl: process.env.GRAPHCMS_URL,
    }
});
