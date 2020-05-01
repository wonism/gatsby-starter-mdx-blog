import React, { useContext, useCallback, useEffect } from 'react';
import { css } from '@emotion/core';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import Context from '@contexts/themes';
import { themeKey } from '@constants/storage';
import { mainColor } from '@constants/styles';
import { shadeColor } from '@utils/string';

const ThemesSwitch = () => {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    const storedTheme = localStorage.getItem(themeKey);

    if (storedTheme === 'dark' || storedTheme === 'light') {
      setState({ theme: storedTheme });
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      setState({ theme: 'dark' });
    } else {
      setState({ theme: 'light' });
    }
  }, [setState]);

  useEffect(() => {
    if (state.theme === 'dark') {
      document.body.classList?.remove('light-mode');
      document.body.classList?.add('dark-mode');
      localStorage.setItem(themeKey, 'dark');
    } else {
      document.body.classList?.remove('dark-mode');
      document.body.classList?.add('light-mode');
      localStorage.setItem(themeKey, 'light');
    }
  }, [state.theme]);

  const handleChange = useCallback((e) => {
    if (e.target.checked) {
      setState({ theme: 'dark' });
    } else {
      setState({ theme: 'light' });
    }
  }, [setState]);

  return (
    <div
      role="presentation"
      css={css`
        position: absolute;
        top: 0;
        right: 50px;
        left: 50px;
        margin-top: 10px;
        height: 24px;
        text-align: right;
      `}
    >
      <Toggle
        css={css`
          .react-toggle-track {
            transition: background-color .2s ease-in 0s;

            & > * {
              margin-bottom: 2px;
              width: 1em;
              height: 1em;
              line-height: 1em;
            }
          }

          .react-toggle-track-x {
            right: 8px;
          }

          &.react-toggle--checked:hover:not(.react-toggle--disabled) {
            .react-toggle-thumb {
              border-color: ${shadeColor(mainColor, -50)};
            }

            .react-toggle-track {
              background-color: ${shadeColor(mainColor, -50)};
            }
          }

          &.react-toggle--checked {
            .react-toggle-thumb {
              border-color: ${mainColor};
            }

            .react-toggle-track {
              background-color: ${mainColor};
            }
          }
        `}
        checked={state.theme === 'dark'}
        onChange={handleChange}
        icons={{
          checked: '🌙',
          unchecked: '☀️',
        }}
      />
    </div>
  );
};

export default ThemesSwitch;
