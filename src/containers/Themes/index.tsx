import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { ThemeProvider } from 'emotion-theming';

import Context, { initialState, State } from '@contexts/themes';
import { themes } from '@constants/styles';

const ThemesContainer = ({ children }: RouteComponentProps<{ children: React.ReactNode }>): React.ReactElement => {
  const [state, setState] = useState<State>(initialState);

  return (
    <Context.Provider value={[state, setState]}>
      <ThemeProvider theme={themes[state.theme]}>
        {children}
      </ThemeProvider>
    </Context.Provider>
  );
};

export default ThemesContainer;
