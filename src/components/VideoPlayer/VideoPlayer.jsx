import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import device from '../../utils/devices';
import useVideoPlayer from '../../hooks/useVideoPlayer';
import Button from '../../elements/Button';

const CloseButton = styled(Button)`
  position: fixed;
  margin-right: 0.1rem;
  right: 0;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 5;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const PlayerWrapper = styled.div`
  position: relative;
  max-height: 62.5rem;
  max-width: 150rem;
  width: 100%;
  @media ${device.desktopL} {
    max-width: 170rem;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)``;

function VideoPlayer() {
  const { handleVideoPlayer, ContentUrl } = useVideoPlayer();

  return (
    <Wrapper id="player-id">
      <CloseButton onClick={handleVideoPlayer}>X</CloseButton>
      <PlayerWrapper>
        <StyledReactPlayer
          url={ContentUrl}
          width="100%"
          height="100%"
          pip={false}
          controls
          light={false}
          loop={false}
        />
      </PlayerWrapper>
    </Wrapper>
  );
}

export default VideoPlayer;
