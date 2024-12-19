import { createContext, useContext, useMemo, useState } from "react";
import type { FC, PropsWithChildren } from "react";

interface SearchContextType {
  searchTerm: string;
  page: number;
  setSearchTerm: (term: string) => void;
  setPage: (page: number) => void;
}

const initialState: SearchContextType = {
  searchTerm: "",
  page: 0,
  setSearchTerm: () => {},
  setPage: () => {},
};

const SearchContext = createContext<SearchContextType>(initialState);

const Provider = SearchContext.Provider;

const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const value: SearchContextType = useMemo(() => {
    return {
      searchTerm,
      page,
      setSearchTerm,
      setPage,
    };
  }, [searchTerm, page]);

  return <Provider value={value}>{children}</Provider>;
};

export default SearchContextProvider;

export const useSearchContext = () => useContext(SearchContext);
