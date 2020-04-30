import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Seo from '@shared/Seo';
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
            <Seo
              title={title}
              description="Welcome to my personal blog."
              showTitle
            />
            <hr />
          </Title>
          {posts.map((post) => (
            <Article
              key={post.node.id}
              to={post.node.fields.slug}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
            />
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
