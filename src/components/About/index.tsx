import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

import Title from '@shared/Title';
import Seo from '@shared/Seo';

const bio = `Write your biography.
Identify your purpose and audience.
Before you get started writing, you need to know who you're writing for.
Your bio is your first introduction to your audience.
It should quickly and effectively communicate who you are and what you do.`;

const About = (): React.ReactElement => (
  <StaticQuery
    query={aboutQuery}
    render={(data) => (
      <section>
        <Title>
          <Seo title="About" description={bio} showTitle />
          <hr />
        </Title>
        <p css={css`font-size: 20px; line-height: 1.4;`}>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={data.site.siteMetadata.author}
            css={css`float: right; margin-left: 0.5em; border-radius: 50%;`}
          />
          {bio}
        </p>
      </section>
    )}
  />
);

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/profile.[jpe?g|png|gif|bmp]/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
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

export default About;
