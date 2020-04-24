import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import Head from '@shared/Head';
import Title from '@shared/Title';
import Article from '@shared/Article';
import { Mdx } from '@utils/types';

const Home = (): React.ReactElement => (
  <StaticQuery
    query={homeQuery}
    render={(data) => {
      const { title } = data.site.siteMetadata;
      const posts = data.allMdx.edges as { node: Mdx }[];

      return (
        <>
          <Title>
            <Head title={title} />
            <hr />
          </Title>
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

const homeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }

    allMdx(
      limit: 3
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

export default Home;
