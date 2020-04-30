import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Mdx, Context } from '@utils/types';
import Seo from '@shared/Seo';
import Article from '@shared/Article';
import LocalNavigation from '@shared/LocalNavigation';
import Pagination from '@shared/Pagination';

const Posts = ({
  data: {
    allMdx: {
      edges: posts,
    },
  },
  pageContext: {
    currentPage,
    pageCount,
    categories,
    tags,
  },
}: PageProps<{ allMdx: { edges: { node: Mdx }[] } }, Context>) => (
  <>
    <Seo title="Posts" description="These are posts that were written by me." />
    <LocalNavigation tags={tags} categories={categories} />
    {posts.map((post) => (
      <Article
        key={post.node.id}
        to={post.node.fields.slug}
        title={post.node.frontmatter.title}
        date={post.node.frontmatter.date}
        excerpt={post.node.excerpt}
      />
    ))}
    <Pagination currentPage={currentPage} pageCount={pageCount} base="posts" />
  </>
);

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      skip: $skip
      limit: $limit
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
            date(formatString: "YYYY.MM.DD HH:mm:ss")
          }
          excerpt
        }
      }
    }
  }
`;

export default Posts;
