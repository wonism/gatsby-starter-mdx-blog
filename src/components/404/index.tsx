import React from 'react';
import { css } from '@emotion/core';

import Title from '@shared/Title';
import Seo from '@shared/Seo';

const content = 'You just hit a route that doesn\'t exist... the sadness.';

const NotFound: React.FC<{}> = () => (
  <>
    <Title>
      <Seo title="Page not found" description={content} showTitle />
    </Title>
    <p css={css`margin-top: 40px;`}>
      {content}
    </p>
  </>
);

export default NotFound;
