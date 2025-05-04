import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [tipoDeBusca, setTipoDeBusca] = useState(null);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, tipoDeBusca, setTipoDeBusca }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
