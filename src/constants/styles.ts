import { css } from '@emotion/core';

export const mobileWidth = 414;

export const gnbHeight = 48;
export const footerHeight = 32;

export const border = `
  content: '';;
  display: block;
  height: 1px;
  background: linear-gradient(to top, rgba(85, 85, 85, .3), transparent);
`;

export const visuallyHidden = css`
  position: absolute;
  padding: 0;
  width: 1px;
  height: 1px;
  border: 0;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
  appearance: none;
`;

export const maxWidth = css`
  margin: auto;
  padding-right: 50px;
  padding-left: 50px;
  max-width: calc(800px - (50px * 2));
`;
