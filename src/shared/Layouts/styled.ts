import { css } from '@emotion/core';
import styled from '@emotion/styled';
import emotionReset from 'emotion-reset';

import { mainColor, gnbHeight, footerHeight, border } from '@constants/styles';

export const globalStyles = css`
  ${emotionReset}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  body {
    line-height: 1.5;
    transition: all .4s ease-in .1s;

    &,
    &.light-mode {
      color: #3e3e3e;
      background: #fff;
    }

    &.dark-mode {
      color: #fff;
      background: #3e3e3e;
    }

    @media (prefers-color-scheme: dark) {
      color: #fff;
      background: #3e3e3e;
    }
  }

  a {
    text-decoration: underline;

    &,
    &:focus,
    &:visited {
      color: inherit;
    }

    &:active,
    &:hover {
      color: ${mainColor};
      text-decoration: underline;
    }
  }

  small {
    font-size: 75%;
  }

  hr {
    border: 0;
    ${border}
  }
`;

export const Main = styled.main`
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: calc(100vh - ${footerHeight}px - ${gnbHeight}px);
`;
