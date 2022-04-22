/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';

import MediaList from './MediaList';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 1;
`;

function MediaLists({ mediaLists }) {
  if (!mediaLists) {
    return null;
  }

  return (
    <Section>
      {mediaLists.map((mediaList, index) => (
        <MediaList key={index} mediaList={mediaList} />
      ))}
    </Section>
  );
}

export default MediaLists;
