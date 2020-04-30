import React from 'react';
import { Link } from 'gatsby';

import { Mobile, NonMobile } from '@shared/Responsive';
import { maxWidth } from '@constants/styles';

import { Border, Navigation, List } from './styled';

const GlobalNavigation = (): React.ReactElement => (
  <Border>
    <Navigation css={maxWidth}>
      <Link to="/">
        <Mobile>
          /
        </Mobile>
        <NonMobile>
          SITE NAME
        </NonMobile>
      </Link>
      <List>
        <li>
          <Link to="/about">
            about
          </Link>
        </li>
        <li>
          <Link to="/posts/1">
            posts
          </Link>
        </li>
        <li>
          <Link to="/contacts">
            contacts
          </Link>
        </li>
      </List>
    </Navigation>
  </Border>
);

export default GlobalNavigation;
