/* eslint-disable operator-linebreak */
import styled from 'styled-components';

const StyledBackDrop = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  background-color: rgba(31, 31, 31, 0.4);
`;

function BackDrop() {
  return <StyledBackDrop id="backdrop-id" />;
}

export default BackDrop;
