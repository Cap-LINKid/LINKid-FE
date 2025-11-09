import styled from "styled-components";
import UploadCard from "./components/UploadCard";
import ReportSection from "./components/ReportSection";
import ChallengeSection from "./components/ChallengeSection";
import GuideCard from "./components/GuideCard";

const DashboardPage = () => {
    return (
        <Wrapper>
            <UploadCard />
            <ReportSection />
            <ChallengeSection />
            <GuideCard />
        </Wrapper>
    );
};

export default DashboardPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;