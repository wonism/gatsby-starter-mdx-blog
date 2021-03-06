import styled from '@emotion/styled';

import { mainColor } from '@constants/styles';

const Title = styled.div`
  line-height: 1.1;
  color: ${mainColor};
  font-size: 60px;
  font-weight: 700;

  h1::before {
    color: #a9a9a9;
    content: '* ';
  }
`;

export default Title;
