import styled from 'styled-components';

import { usePlayerContext } from '../../contexts/PlayerContextProvider';
import { useUserContext } from '../../contexts/UserContextProvider';
import useVideoPlayer from '../../hooks/useVideoPlayer';
import fetchPostData from '../../utils/fetchPostData';
import shortenTitle from '../../utils/generateTitle';
import getImageSrc from '../../utils/getImageSrc';
import { PLAYER_API } from '../../utils/routes';
import Image from '../../elements/Image';
import Title from '../../elements/Title';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: var(--size16px) 0.3rem;
  margin: 0rem -0.8rem;
  width: 100%;
`;

function MediaItem({ mediaItem }) {
  const {
    userContextValue: {
      AuthorizationToken: { Token },
    },
  } = useUserContext();
  const { setPlayerContextValue } = usePlayerContext();
  const { handleVideoPlayer } = useVideoPlayer();
  const imageSrc = getImageSrc(mediaItem.Images);
  const title = shortenTitle(mediaItem.Title);

  const handleMediaItem = async () => {
    const body = {
      MediaId: mediaItem.Id,
      StreamType: 'TRIAL',
    };
    const data = await fetchPostData(PLAYER_API, {
      body,
      Token,
    });
    // status code might be 403 status code no content
    if (data?.ContentUrl) {
      setPlayerContextValue(data);
      handleVideoPlayer();
    }
  };

  return (
    <Item key={mediaItem.Id}>
      <Image imageSrc={imageSrc} alt={title} />
      <Title text={title} onClick={handleMediaItem} />
    </Item>
  );
}

export default MediaItem;
