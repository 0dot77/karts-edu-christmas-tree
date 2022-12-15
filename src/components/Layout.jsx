import styled from 'styled-components';

const LayoutContainer = styled.main`
  width: 100vw;
  height: 100vh;
`;

export default function Layout({ children }) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
