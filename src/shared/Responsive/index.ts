import styled from '@emotion/styled';

import { mobileWidth } from '@constants/styles';

interface OnlyScreen {
  onlyScreen?: boolean;
}

export const NonMobile = styled.div<OnlyScreen>`
  @media ${p => (p.onlyScreen ?? false) ? 'screen' : 'all'} and (max-width: ${mobileWidth}px) {
    display: none;
  }
`;

export const Mobile = styled.div<OnlyScreen>`
  @media ${p => (p.onlyScreen ?? false) ? 'screen' : 'all'} and (min-width: ${mobileWidth + 1}px) {
    display: none;
  }
`;
