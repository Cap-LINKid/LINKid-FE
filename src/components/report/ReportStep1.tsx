import styled from "styled-components";
import SectionCard from "../common/SectionCard";
import HeartIcon from "../../assets/icons/heart.svg?react";
import ProgressBar from "../common/PercentBar";

interface DashboardProps {
    dashboard: {
        piScore: number;
        ndiScore: number;
        relationshipStatus: string;
        summaryText: string;
    }
}

const ReportStep1 = ({ dashboard }: DashboardProps) => {
    return (
        <Wrapper>
            <SectionCard
                icon={<HeartIcon />}
                title="오늘의 상호작용 진단"
                alignment="top"
                iconBg="#FAEFEF"
                size={45}
            >
                <Description>
                    현재 두 분의 관계는 '{dashboard.relationshipStatus}' 단계입니다
                </Description>
                <ProgressWrapper>
                    <ProgressBar label="긍정 상호작용" value={dashboard.piScore} variant="pink" />
                    <ProgressBar label="부정 상호작용" value={dashboard.ndiScore} variant="green" />
                </ProgressWrapper>
            </SectionCard>
        </Wrapper >
    );
};

export default ReportStep1;

const Wrapper = styled.div`
    > SectionCard {
        padding: 24px 22px;
    }
`;

const Description = styled.p`
    text-align: center;
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.typography.weights.medium};

    margin-top: 6px;
    margin-bottom: 20px;
`;

const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`