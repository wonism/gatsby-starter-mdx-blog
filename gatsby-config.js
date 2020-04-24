const isProd = process.env.NODE_MODE === 'production';

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter MDX Blog',
    description: 'Gatsby Starter for Blog with MDX',
    author: 'wonism',
    mail: 'yocee57@gmail.com',
    siteUrl: 'https://example.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/contents/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/contents/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        plugins: [
          'gatsby-remark-images',
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    /*
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '<<YOUR_OWN_KEY>>',
      },
    },
    */
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  filter: {
                    frontmatter: {
                      draft: { ne: true }
                    }
                  }
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  edges {
                    node {
                      fields { slug }
                      html
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Gatsby RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        // host: '<<YOUR_SITE>>',
        sitemap: '/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    isProd ? 'gatsby-plugin-webpack-bundle-analyzer' : null,
  ].filter(Boolean),
};
