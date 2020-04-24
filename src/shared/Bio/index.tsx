import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { author } = data.site.siteMetadata;

      return (
        <div css={css`display: flex; align-items: center;`}>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            css={css`border-radius: 50%;`}
          />
          <p css={css`margin-left: 1em; font-style: italic;`}>
            {'Written by '}
            <strong>
              {author}
            </strong>
            .
            <br />
            Describe your self.
          </p>
        </div>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.[jpe?g|png|gif|bmp]/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
