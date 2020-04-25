import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { visuallyHidden } from '@constants/styles';

interface Props {
  title: string;
  description: string;
  keywords?: string[];
  showTitle?: boolean;
}

const Seo = ({ title, description, keywords, showTitle = false }: Props): React.ReactElement => (
  <StaticQuery
    query={seoQuery}
    render={(data) => {
      const keywordsContent = (keywords ?? data.site.siteMetadata.keywords).join(', ');

      return (
        <>
          <Helmet
            meta={[{
              name: 'og:title',
              content: title,
            }, {
              name: 'description',
              content: description,
            }, {
              name: 'og:description',
              content: description,
            }, {
              name: 'keywords',
              content: keywordsContent,
            }]}
          >
            <title>
              {title}
            </title>
          </Helmet>
          <h1 css={showTitle ? undefined : visuallyHidden}>
            {title}
          </h1>
        </>
      );
    }}
  />
);

const seoQuery = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        keywords
      }
    }
  }
`;

export default Seo;
