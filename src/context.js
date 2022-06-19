import { useContext, useState, createContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <AppContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
