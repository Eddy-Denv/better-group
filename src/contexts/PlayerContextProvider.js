// eslint-disable-next-line object-curly-newline
import { createContext, useContext, useMemo, useState } from 'react';

export const PlayerContext = createContext();

export const usePlayerContext = () => useContext(PlayerContext);

function PlayerContextProvider({ children }) {
  const [PlayerContextValue, setPlayerContextValue] = useState({
    ContentUrl: '',
  });
  const [isPlayerShowing, setIsPlayerShowing] = useState(false);
  // eslint-disable-next-line arrow-body-style
  const memoizedContext = useMemo(() => {
    return {
      PlayerContextValue,
      setPlayerContextValue,
      isPlayerShowing,
      setIsPlayerShowing,
    };
  }, [PlayerContextValue]);

  return (
    <PlayerContext.Provider value={memoizedContext}>
      {children}
    </PlayerContext.Provider>
  );
}

export default PlayerContextProvider;
