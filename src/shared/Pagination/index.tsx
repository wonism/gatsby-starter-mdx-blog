import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

interface Props {
  currentPage: number;
  pageCount: number;
  base: string;
}

const Pagination = ({ currentPage, pageCount, base }: Props) => (
  <nav css={css`display: flex; margin-top: 2em; * { flex: 1; }`}>
    {currentPage > 1 ? (
      <Link
        title="Go to previous page"
        to={`/${base}/${currentPage - 1}`}
      >
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <span role="none">
          👈
        </span>
        {/* eslint-enable jsx-a11y/accessible-emoji */}
        Newer Posts
      </Link>
    ) : <span />}
    <span css={css`text-align: center;`}>
      {`Page ${currentPage} of ${pageCount}`}
    </span>
    {currentPage < pageCount ? (
      <Link
        title="Go to next page"
        to={`/${base}/${currentPage + 1}`}
        css={css`text-align: right;`}
      >
        Older Posts
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <span role="none">
          👉
        </span>
        {/* eslint-enable jsx-a11y/accessible-emoji */}
      </Link>
    ) : <span />}
  </nav>
);

export default Pagination;
