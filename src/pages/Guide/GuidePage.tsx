import styled from "styled-components";
import AboutServiceSection from "./componenets/AboutServiceSection";
import VideoGuideSection from "./componenets/VideoGuideSection";
import SecuritySection from "./componenets/SecuritySection";

const DashboardPage = () => {
    return (
        <Wrapper>
            <AboutServiceSection />
            <VideoGuideSection />
            <SecuritySection />
        </Wrapper>
    );
};

export default DashboardPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;