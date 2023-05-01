import { Outlet } from "react-router";
import Header from "../Header";
import styled from "styled-components";
export default function Layout() {
  return (
    <StyledContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 1080px;
  margin: 0 auto;
`;
