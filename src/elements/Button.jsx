/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

import styled from 'styled-components';

const StyledButton = styled.button`
  color: red;
  cursor: pointer;
  border: none;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
