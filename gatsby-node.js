const { resolve } = require('path');

const { createFilePath } = require('gatsby-source-filesystem');
const TerserPlugin = require('terser-webpack-plugin');

require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter {
      title: String!
      draft: Boolean
      tags: String
      thumbnail: String
      # TODO: Categorizing
      # category: String
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const component = resolve('./src/shared/templates/blog.tsx');

  const result = await graphql(`
    {
      allMdx(
        limit: 1000
        filter: { frontmatter: { draft: { ne: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              thumbnail
            }
          }
        }
      }

      allFile(
        filter: { base: { eq: "profile.png" } }
      ) {
        edges {
          node {
            base
            publicURL
          }
        }
      }

    }
  `);

  result.data.allMdx.edges.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    const thumbnailData = result.data.allFile.edges.find(({ node: { base } }) => base === post.node.frontmatter.thumbnail);
    const thumbnail = thumbnailData != null ? thumbnailData.node.publicURL : null;

    createPage({
      path: post.node.fields.slug,
      component,
      context: {
        thumbnail,
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `/posts${value}`,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': resolve(__dirname, 'src/components'),
        '@constants': resolve(__dirname, 'src/constants'),
        '@containers': resolve(__dirname, 'src/containers'),
        '@contexts': resolve(__dirname, 'src/contexts'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@shared': resolve(__dirname, 'src/shared'),
        '@utils': resolve(__dirname, 'src/utils'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          sourceMap: false,
          extractComments: 'all',
          terserOptions: {
            mangle: true,
            compress: {
              arrows: false,
              drop_console: false,
              drop_debugger: true,
              typeofs: false,
            },
          },
        }),
      ],
    },
  });
};
