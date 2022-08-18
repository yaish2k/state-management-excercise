import { createContext } from 'react';

const StoreContext = createContext(null);

const StoreProvider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
export { StoreProvider, StoreContext};
