import styled from '@emotion/styled';

import { footerHeight, border } from '@constants/styles';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${footerHeight}px;
  font-size: 14px;
`;

export const Border = styled.div`
  &::before {
    ${border}
  }
`;
