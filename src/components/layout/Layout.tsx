import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Main>
        <Outlet />
      </Main>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 440px;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    padding-top: 44px;
`;

const HeaderWrapper = styled.header`
    width: 100%;
    height: 80px;
    flex-shrink: 0;
`;

const Main = styled.main`
    flex: 1;
    width: 100%;
    padding: 18px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }
`;

const FooterWrapper = styled.footer`
    width: 100%;
    height: 80px;
    flex-shrink: 0;
`;