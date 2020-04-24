import styled from '@emotion/styled';

const Article = styled.article`
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

export default Article;
