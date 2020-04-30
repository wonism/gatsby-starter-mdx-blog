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

const PAGE_SIZE = 3;

const kebabCase = name => name.replace(/\s+/g, '-').toLowerCase();

const createListPages = (createPage, { component, base, total, pageSize, context = {} }) => {
  const pageCount = Math.ceil(total / pageSize);
  const pages = Array.from({ length: pageCount }).map((_, index) => createPage({
    path: `/${base}/${index + 1}`,
    component,
    context: {
      base,
      pageCount,
      limit: pageSize,
      skip: index * pageSize,
      currentPage: index + 1,
      ...context,
    },
  }));

  return pages;
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter {
      title: String!
      draft: Boolean
      tags: [String]
      thumbnail: String
      categories: [String]
    }
  `;
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
              categories
            }
          }
        }
      }

      allTags: allMdx {
        group(field: frontmatter___tags) {
          field
          fieldValue
          totalCount
        }
      }

      allCategories: allMdx {
        group(field: frontmatter___categories) {
          field
          fieldValue
          totalCount
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

  const { allMdx, allFile, allTags, allCategories } = result.data;

  const tags = allTags.group.map(({ fieldValue }) => fieldValue);
  const categories = allCategories.group.map(({ fieldValue }) => fieldValue);
  const defaultContext = {
    tags,
    categories,
  };

  allMdx.edges.forEach((post, index, posts) => {
    const path = post.node.fields.slug;

    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    const thumbnailData = allFile.edges.find(({ node: { base } }) => base === post.node.frontmatter.thumbnail);
    const thumbnail = thumbnailData != null ? thumbnailData.node.publicURL : null;

    createPage({
      path,
      component: resolve('./src/templates/post.tsx'),
      context: {
        thumbnail,
        slug: post.node.fields.slug,
        categories: post.node.fields.categories,
        tags: post.node.fields.tags,
        previous,
        next,
      },
    });
  });

  createListPages(createPage, {
    component: resolve('./src/templates/posts.tsx'),
    base: 'posts',
    total: allMdx.edges.length,
    pageSize: PAGE_SIZE,
    context: {
      fieldValue: '',
      ...defaultContext,
    },
  });

  allTags.group.forEach((group) => {
    createListPages(createPage, {
      component: resolve('./src/templates/tags.tsx'),
      base: `tags/${kebabCase(group.fieldValue)}`,
      total: group.totalCount,
      pageSize: PAGE_SIZE,
      context: {
        ...defaultContext,
        ...group,
      },
    });
  });

  allCategories.group.forEach((group) => {
    createListPages(createPage, {
      component: resolve('./src/templates/categories.tsx'),
      base: `categories/${kebabCase(group.fieldValue)}`,
      total: group.totalCount,
      pageSize: PAGE_SIZE,
      context: {
        ...defaultContext,
        ...group,
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
