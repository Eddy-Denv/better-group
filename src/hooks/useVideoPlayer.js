import { usePlayerContext } from '../contexts/PlayerContextProvider';

const useVideoPlayer = () => {
  const {
    PlayerContextValue: { ContentUrl },
    isPlayerShowing,
    setIsPlayerShowing,
    setPlayerContextValue,
  } = usePlayerContext();

  const handleVideoPlayer = () => {
    const playerId = 'player-id';
    const backDropId = 'backdrop-id';
    const player = document.getElementById(playerId);
    const backdrop = document.getElementById(backDropId);
    const exists = !!(player && backdrop);

    if (!exists) return;

    if (!isPlayerShowing) {
      player.style.display = 'block';
      player.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
      backdrop.style.display = 'block';
      setIsPlayerShowing(true);
      return;
    }

    player.style.display = 'none';
    backdrop.style.display = 'none';

    setIsPlayerShowing(false);
    setPlayerContextValue({ Title: '', ContentUrl: '' });
  };

  return {
    handleVideoPlayer,
    ContentUrl,
  };
};

export default useVideoPlayer;
