/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Settings from '../utils/Settings';

const StyledSilder = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-active.slick-current {
    padding-left: 0.8rem;
  }

  .slick-slide.slick-active {
    padding-left: 0.5rem;
    margin-right: -0.3rem;
  }
`;

function Silder({ children }) {
  return <StyledSilder {...Settings}>{children}</StyledSilder>;
}

export default Silder;
