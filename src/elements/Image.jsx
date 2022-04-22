/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PLACEHOLDER } from '../utils/constants';

const ImageWrapper = styled.div`
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
  overflow: hidden;
`;
const StyledImage = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
`;

function Image({ imageSrc, alt, ...props }) {
  return (
    <ImageWrapper>
      {!!imageSrc && <StyledImage src={imageSrc} alt={alt} {...props} />}
      {!imageSrc && <StyledImage src={PLACEHOLDER} alt={alt} {...props} />}
    </ImageWrapper>
  );
}

Image.defaultProps = {
  imageSrc: '',
  alt: '',
};

Image.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
