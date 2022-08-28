import React, { Dispatch, SetStateAction } from 'react';
import ModType from '../types/modType';

export type Query = {
  title: string;
  tags: string[];
  sort: string;
  order: string;
  limit: number;
  page: number;
};

type ModsContextType = {
  mods: ModType[];
  modsCount: number;
  setMods: (Mods: ModType[]) => void;
  query: Query;
  setQuery: Dispatch<SetStateAction<Query>>;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const ModsContext = React.createContext<ModsContextType>({
  mods: [],
  modsCount: 0,
  setMods: () => {},
  query: {
    title: '',
    tags: [],
    sort: '',
    order: '',
    limit: 20,
    page: 0,
  },
  setQuery: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export const ModsProvider = ModsContext.Provider;
export const useMods = () => React.useContext(ModsContext);
