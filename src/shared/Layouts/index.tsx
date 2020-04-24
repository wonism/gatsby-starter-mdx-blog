import React from 'react';
import { Global } from '@emotion/core';

import ThemesContainer from '@containers/Themes';
import { maxWidth } from '@constants/styles';

import Gnb from './Gnb';
import Footer from './Footer';
import { globalStyles, Main } from './styled';

interface Props {
  element: React.ReactNode;
}

const Layouts = ({ element }: Props): React.ReactElement => (
  <ThemesContainer>
    <Global styles={globalStyles} />
    <Gnb />
    <Main css={maxWidth}>
      {element}
    </Main>
    <Footer />
  </ThemesContainer>
);

export default Layouts;
