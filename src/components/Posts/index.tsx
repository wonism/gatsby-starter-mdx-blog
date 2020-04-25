import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import Seo from '@shared/Seo';
import Article from '@shared/Article';
import { Mdx } from '@utils/types';

const Posts = (): React.ReactElement => (
  <StaticQuery
    query={postsQuery}
    render={(data) => {
      const posts = data.allMdx.edges as { node: Mdx }[];

      return (
        <>
          <Seo title="Posts" description="These are posts that were written by me." />
          {posts.map((post, index, arr) => (
            <Article key={post.node.id}>
              <h2>
                <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
                </Link>
              </h2>
              <div>
                <small>
                  {post.node.frontmatter.date}
                </small>
              </div>
              <p>
                {post.node.excerpt}
              </p>
            </Article>
          ))}
        </>
      );
    }}
  />
);

const postsQuery = graphql`
  query PostsQuery {
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
            date(formatString: "YYYY.MM.DD HH:mm:ss")
          }
          excerpt
        }
      }
    }
  }
`;

export default Posts;
