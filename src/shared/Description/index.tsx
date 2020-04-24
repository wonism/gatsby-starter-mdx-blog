import React from 'react';
import { Helmet } from 'react-helmet';

import { visuallyHidden } from '@constants/styles';

interface Props {
  description: string;
}

const Description = ({ description }: Props): React.ReactElement => (
  <Helmet
    meta={[{
      name: 'description',
      content: description,
    }, {
      name: 'og:description',
      content: description,
    }]}
  />
);

export default Description;
