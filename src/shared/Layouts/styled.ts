import { css } from '@emotion/core';
import styled from '@emotion/styled';
import emotionReset from 'emotion-reset';

import { gnbHeight, footerHeight, border } from '@constants/styles';

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
    color: #555;
    line-height: 1.5;
  }

  a {
    text-decoration: underline;

    &,
    &:focus,
    &:visited {
      color: #555;
    }

    &:active,
    &:hover {
      color: #ff3636;
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
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: calc(100vh - ${footerHeight}px - ${gnbHeight}px);
`;
