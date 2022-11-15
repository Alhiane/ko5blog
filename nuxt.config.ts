// ./nuxt.config.ts

import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  pageTransition: { name: 'page', mode: 'out-in' },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  plugins: [
    '~/plugins/gtm'
  ],
  gtm: {
    id: process.env.GTM_ID || 'G-NWPTHZCQDH',
    scriptDefer: true,
    pageTracking: true,
    // layer: 'test',
    variables: {
      test: '1'
    }
  },
  publicRuntimeConfig: {
    gtm: {
      id: 'G-NWPTHZCQDH&runtime'
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-dark',
      },
      preload: [
        'python','graphql','php','javascript','json','cpp','java','c'
      ]
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
