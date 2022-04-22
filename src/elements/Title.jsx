/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h2`
  cursor: pointer;
  font-size: 1rem;
`;

function Title({ text, ...props }) {
  return (
    <StyledTitle data-testid="title-element" {...props}>
      {text}
    </StyledTitle>
  );
}

Title.defaultProps = {
  text: '',
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
