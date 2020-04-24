import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';

import Context, { initialState, State } from '@contexts/themes';

const ThemesContainer = ({ children }: RouteComponentProps<{ children: React.ReactNode }>): React.ReactElement => {
  const [state, setState] = useState<State>(initialState);

  return (
    <Context.Provider value={[state, setState]}>
      {children}
    </Context.Provider>
  );
};

export default ThemesContainer;
