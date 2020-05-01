import React, { useContext, useRef, useEffect } from 'react';
import { css } from '@emotion/core';

import Context from '@contexts/themes';

interface Props {
  id: string;
  repository: string;
}

const Utterances = ({ id, repository }: Props) => {
  const [state] = useContext(Context);
  const container$ = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');

    const config = {
      src: 'https://utteranc.es/client.js',
      repo: `${id}/${repository}`,
      'issue-term': 'pathname',
      label: 'Post Comment',
      theme: `github-${state.theme}`,
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    container$.current?.appendChild(script);
  }, [state.theme, id, repository]);

  return (
    <div ref={container$} css={css`.utterances { margin-top: 40px; }`} />
  );
};

export default Utterances;
