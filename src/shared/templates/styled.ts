import styled from '@emotion/styled';

export const RendererWrapper = styled.div`
  padding: 40px 0;
  line-height: 1.6;
  font-size: 24px;
  word-break: break-word;
  color: rgba(85, 85, 85, .85);

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 36px;
  }

  h4 {
    font-size: 32px;
  }

  h5 {
    font-size: 28px;
  }

  strong,
  em,
  b {
    font-weight: 700;
  }

  i {
    font-style: italic;
  }

  s,
  del,
  strike {
    text-decoration: line-through;
  }

  ol {
    list-style: decimal;
    list-style-position: inside;
  }

  ul {
    list-style: square;
    list-style-position: inside;
  }

  pre {
    display: block;
    position: relative;
    padding: 20px 0px 0px;
    color: rgb(220, 220, 220);
    background-color: rgb(38, 50, 56);
    border-radius: 5px;
    overflow-y: hidden;
    font-family: Inconsolata, monospace;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 20px;
      width: 10px;
      height: 10px;
      background-color: rgb(255, 95, 86);
      border-radius: 50%;
    }

    &::after {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 40px;
      width: 10px;
      height: 10px;
      background-color: rgb(255, 189, 46);
      content: '';
      border-radius: 50%;
    }

    code {
      display: inline-block;
      white-space: inherit;
      overflow-wrap: normal;
      background: none;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      border-radius: 3px;
      overflow: inherit;
      padding: 1.58333rem;
      font-size: 14px;

      &::before {
        display: inline-block;
        position: absolute;
        top: 15px;
        left: 60px;
        width: 10px;
        height: 10px;
        background-color: rgb(39, 201, 63);
        content: '';
        border-radius: 50%;
      }
    }
  }

  & > * {
    &:not(:first-child) {
      margin-top: 40px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    flex: 1;
  }
`;
