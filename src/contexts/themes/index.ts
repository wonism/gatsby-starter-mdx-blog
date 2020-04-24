import { createContext, Dispatch, SetStateAction } from 'react';

import { Pair } from '@utils/types';

type Theme = 'dark' | 'light';

export interface State {
  theme: Theme;
}

export const initialState: State = {
  theme: 'dark',
};

const Context = createContext<Pair<State, Dispatch<SetStateAction<State>>>>(
  [initialState, (): State => initialState]
);

export default Context;
