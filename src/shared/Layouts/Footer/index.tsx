import React from 'react';

import { maxWidth } from '@constants/styles';
import { Border, Footer as Foot } from './styled';

const Footer = (): React.ReactElement => (
  <Border>
    <Foot css={maxWidth}>
      Built with&nbsp;
      <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
        Gatsby
      </a>
      &nbsp;&amp;&nbsp;
      <a href="https://github.com/wonism/gatsby-starter-mdx-blog" target="_blank" rel="noopener noreferrer">
        Gatsby Starter MDX Blog
      </a>
      .&nbsp;
      <a href="https://github.com/wonism" target="_blank" rel="noopener noreferrer">
        &copy;wonism
      </a>
    </Foot>
  </Border>
);

export default Footer;
