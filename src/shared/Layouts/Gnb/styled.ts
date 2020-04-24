import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { gnbHeight, border } from '@constants/styles';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${gnbHeight}px;
  font-size: 16px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  a {
    padding: 0 .5em;
  }
`;

export const Border = styled.div`
  &::after {
    ${border}
  }
`;
