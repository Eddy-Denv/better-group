import styled from 'styled-components';
import { SpinnerDotted } from 'spinners-react';

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Greeting = styled.h1`
  color: var(--white);
  padding: var(--size16px) 0rem var(--size16px) 0rem;
`;

function SplashScreen({ loading, login, isMediaListLoading }) {
  if (loading) {
    return (
      <Wrapper>
        <SpinnerDotted color="var(--spinner-color)" />
      </Wrapper>
    );
  }

  if (!loading && isMediaListLoading) {
    return (
      <Wrapper>
        <Greeting>Hi {login?.User?.FullName}</Greeting>
        <SpinnerDotted color="var(--spinner-color)" />
      </Wrapper>
    );
  }
}

export default SplashScreen;
