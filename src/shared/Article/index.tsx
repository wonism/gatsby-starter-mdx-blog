import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const StyledArticle = styled.article`
  line-height: 1.25;

  & + & {
    margin-top: 40px;

    &::before {
      content: '';
      display: block;
      margin-bottom: 40px;
      height: 1px;
      background: linear-gradient(to top, rgba(85, 85, 85, .3), transparent);
    }
  }

  h2 {
    margin-bottom: .6em;
    font-size: 40px;
    font-weight: 700;
  }

  p {
    margin-top: .6em;
  }
`;

interface Props {
  to: string;
  title: string;
  date: string;
  excerpt: string;
}

const Article = ({ to, title, date, excerpt }: Props) => (
  <StyledArticle>
    <h2>
      <Link to={to}>
        {title}
      </Link>
    </h2>
    <div>
      <small>
        {date}
      </small>
    </div>
    <p>
      {excerpt}
    </p>
  </StyledArticle>
);

export default Article;
