import PlayerContextProvider from './contexts/PlayerContextProvider';
import UserContextProvider from './contexts/UserContextProvider';
import Home from './Pages/Home';

function App() {
  return (
    <UserContextProvider>
      <PlayerContextProvider>
        <Home />
      </PlayerContextProvider>
    </UserContextProvider>
  );
}

export default App;
