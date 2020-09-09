// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "مدونة كوخ",
  siteUrl: "https://ko5.netlify.app/",
  icon: {
    favicon: "./src/icon.png",
  },
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-72863512-3",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "author/**/*.md",
        typeName: "Author",
        remark: {},
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "blog/**/*.md",
        remark: {
          plugins: ["@gridsome/remark-prismjs"],
        },
        refs: {
          author: "Author",
          tags: {
            typeName: "tag",
            create: true,
          },
          category: {
            typeName: "category",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/blog/*": {
            changefreq: "daily",
          },
        },
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "مدونة كوخ",
          feed_url: "https://ko5.netlify.app/rss.xml",
          site_url: "https://ko5.netlify.app/",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          url: "https://ko5.netlify.app/blog/" + node.slug,
        }),
        output: {
          dir: "./static",
          name: "rss.xml",
        },
      },
    },
    {
      use: "gridsome-plugin-feed",
      options: {
        contentTypes: ["Post"],
        feedOptions: {
          title: "مدونة كوخ",
          description: "مدونة كوخ التقنية",
        },
        rss: {
          enabled: true,
          output: "/feed.xml",
        },
        maxItems: 25,
        filterNodes: (node) => true,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: node.content,
        }),
      },
    },
{
  use: 'gridsome-plugin-robots-txt',
  options: {
    host: 'https://ko5.netlify.app',
    sitemap: 'https://ko5.netlify.app/sitemap.xml',
    policy: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/search",
        crawlDelay: 2
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/search",
        crawlDelay: 10,
        cleanParam: "ref /articles/"
      }
    ]
  }
}
  ],
  templates: {
    Author: [
      {
        path: "/author/:id",
      },
    ],
    category: [
      {
        path: "/category/:title",
        component: "~/templates/category.vue",
      },
    ],
    tag: [
      {
        path: "/tags/:title",
        component: "~/templates/tag.vue",
      },
    ],
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRet: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
};
