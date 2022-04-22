/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MediaItem from './MediaItem';
import Silder from '../../elements/Slider';

const List = styled.ul`
  color: var(--white);
  padding-inline-start: 0;
  padding: 1rem 0rem;
  list-style: none;
  width: 100%;
`;

function MediaList({ mediaList }) {
  return (
    <List>
      <Silder>
        {mediaList.Entities.map((mediaItem, index) => (
          <MediaItem key={index} mediaItem={mediaItem} />
        ))}
      </Silder>
    </List>
  );
}

export default MediaList;
