import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Mdx, Context } from '@utils/types';
import Seo from '@shared/Seo';
import Article from '@shared/Article';
import LocalNavigation from '@shared/LocalNavigation';
import Pagination from '@shared/Pagination';

const TagsPosts = ({
  data: {
    allMdx: {
      edges: posts,
    },
  },
  pageContext: {
    currentPage,
    pageCount,
    fieldValue,
    categories,
    tags,
  },
}: PageProps<{ allMdx: { edges: { node: Mdx }[] } }, Context>) => (
  <>
    <Seo
      title={`Posts those are related with ${fieldValue}`}
      description={`These are posts about ${fieldValue} that were written by me.`}
    />
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
    <Pagination currentPage={currentPage} pageCount={pageCount} base={`tags/${fieldValue}`} />
  </>
);

export const pageQuery = graphql`
  query($fieldValue: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      skip: $skip
      limit: $limit
      filter: {
        frontmatter: {
          draft: { ne: true }
          tags: { eq: $fieldValue }
        }
      }
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

export default TagsPosts;
