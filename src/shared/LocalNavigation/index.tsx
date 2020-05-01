import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import styled from '@constants/styles';
import { kebabCase } from '@utils/string';

const Nav = styled.nav`
  &:last-child {
    margin-bottom: 20px;
  }
`;

const Chip = styled.span`
  display: inline-block;
  margin: 4px 4px 4px 0;
  padding: 2px 8px;
  background-color: ${(props) => props.theme.chipColor};
  border-radius: 8px;
  font-size: 85%;
`;

interface Props {
  tags: string[];
  categories: string[];
}

const LocalNavigation = ({ tags, categories }: Props) => (
  <div>
    {tags.length > 0 ? (
      <Nav>
        <span css={css`margin-right: 6px;`}>
          TAGS:
        </span>
        {tags.map((tag) => (
          <Link key={tag} to={`/tags/${kebabCase(tag)}/1`}>
            <Chip>
              {tag}
            </Chip>
          </Link>
        ))}
      </Nav>
    ) : null}
    {categories.length > 0 ? (
      <Nav>
        <span css={css`margin-right: 8px;`}>
          CATEGORIES:
        </span>
        {categories.map((category) => (
          <Link key={category} to={`/categories/${kebabCase(category)}/1`}>
            <span
              css={css`
                display: inline-block;
                margin: 4px 8px 0 0;
                text-decoration: inherit;
              `}
            >
              {category}
            </span>
          </Link>
        ))}
      </Nav>
    ) : null}
  </div>
);

export default LocalNavigation;
