import { css } from '@emotion/core';
import styled, { CreateStyled } from '@emotion/styled';

import { Theme } from '@contexts/themes';

export const mainColor = '#ff3636';

interface Colors {
  backgroundColor: string;
  inputBackgroundColor: string;
  placeholderColor: string;
  chipColor: string;
  contentColor: string;
}

type ThemedStyle = Record<Theme, Colors>;

export const themes: ThemedStyle = {
  dark: {
    backgroundColor: '#fff',
    inputBackgroundColor: 'rgba(80, 80, 80, .4)',
    placeholderColor: 'rgba(255, 255, 255, .8)',
    chipColor: '#555',
    contentColor: 'rgba(211, 211, 211, .85)',
  },
  light: {
    backgroundColor: '#3e3e3e',
    inputBackgroundColor: 'rgba(222, 222, 222, .4)',
    placeholderColor: 'rgba(50, 50, 50, .8)',
    chipColor: '#e5e5e5',
    contentColor: 'rgba(85, 85, 85, .85)',
  },
};

export default styled as CreateStyled<Colors>;

export const mobileWidth = 414;

export const gnbHeight = 48;
export const footerHeight = 32;

export const border = `
  content: '';
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

export const codeHighlight = css`
  /**
   * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
   * Based on https://github.com/chriskempson/tomorrow-theme
   * @author Rose Pritchard
   */

  code[class*="language-"],
  pre[class*="language-"] {
    color: #ccc;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    /* font-size: 1em; */
    font-size: 14px;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2d2d2d;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;
