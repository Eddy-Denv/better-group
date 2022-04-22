import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';

const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--size16px);

  section {
    align-self: center;
    display: flex;
    justify-content: center;
    max-width: 1440px;
    width: 100%;
  }
`;

function Layout({ children }) {
  return (
    <ErrorBoundary fallback={<h1>Something went wrong...</h1>}>
      <LayoutWrapper>
        <section>{children}</section>
      </LayoutWrapper>
    </ErrorBoundary>
  );
}

export default Layout;
