// eslint-disable-next-line object-curly-newline
import { createContext, useContext, useMemo, useState } from 'react';

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
  const [userContextValue, setUserContextValue] = useState();

  const memoizedContext = useMemo(
    () => ({ userContextValue, setUserContextValue }),
    [userContextValue],
  );

  return (
    <UserContext.Provider value={memoizedContext}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
