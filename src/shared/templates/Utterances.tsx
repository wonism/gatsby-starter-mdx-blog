import React, { useRef, useEffect } from 'react';

interface Props {
  id: string;
  repository: string;
}

const useUtterances = ({ id, repository }: Props) => {
  const container$ = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');

    const config = {
      src: 'https://utteranc.es/client.js',
      repo: `${id}/${repository}`,
      ['issue-term']: 'pathname',
      label: 'Post Comment',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    container$.current?.appendChild(script);
  }, [id, repository]);

  useEffect(() => {
    const pid = setInterval(() => {
      const iframe$ = container$.current?.querySelector('iframe');

      if (iframe$ != null) {
        clearInterval(pid);
      }
    }, 17);

    return () => {
      clearInterval(pid);
    };
  }, []);

  return (
    <div ref={container$} />
  );
};

export default useUtterances;
