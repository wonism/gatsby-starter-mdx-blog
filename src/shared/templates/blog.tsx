import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';

import { Mdx } from '@utils/types';
import Seo from '@shared/Seo';
import Title from '@shared/Title';
import Bio from '@shared/Bio';

import { RendererWrapper, Navigation } from './styled';

const Blog = ({
  data: {
    mdx: {
      frontmatter: {
        title,
        date,
        tags,
      },
      body,
      excerpt,
    },
  },
  pageContext: {
    previous,
    next,
  },
}: PageProps<{ mdx: Mdx }, { previous: Mdx | null, next: Mdx | null }>) => (
  <>
    <Title>
      <Seo title={title} description={excerpt} keywords={tags?.split(',')} showTitle />
    </Title>

    <small css={css`display: block; margin: 24px auto 12px;`}>
      {date}
    </small>

    <Bio />

    <RendererWrapper>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </RendererWrapper>

    {previous != null || next != null ? (
      <Navigation>
        {previous != null ? (
          <div>
            <Link to={previous.fields.slug}>
              <span role="img" aria-label="previous post">
                👈
              </span>
              &nbsp;
              {previous.frontmatter.title}
            </Link>
          </div>
        ) : null}
        {next != null ? (
          <div>
            <Link to={next.fields.slug}>
              {next.frontmatter.title}
              &nbsp;
              <span role="img" aria-label="next post">
                👉
              </span>
            </Link>
          </div>
        ) : null}
      </Navigation>
    ) : null}
  </>
);

export default Blog;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 100)
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD HH:mm:ss")
        tags
      }
      body
    }
  }
`
