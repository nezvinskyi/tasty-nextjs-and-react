'use client';

import { createContext, useReducer, ReactNode, Dispatch } from 'react';

type State = {
  selectedCuisine?: string;
};

const initialState: State = {
  selectedCuisine: '',
};

type ActionType = {
  type: string;
  payload: any;
};

const recipeReducer = (state: State, { type, payload }: ActionType): State => {
  switch (type) {
    case 'SELECTED_CUISINE':
      return { ...state, selectedCuisine: payload.selectedCuisine };

    default:
      return state;
  }
};

type RecipeContextType = {
  state: State;
  dispatch: Dispatch<ActionType>;
};

export const RecipeContext = createContext<RecipeContextType>({
  state: initialState,
  dispatch: () => null,
});

export default function RecipeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}
