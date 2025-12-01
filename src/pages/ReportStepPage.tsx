import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/common/Button";
import StepHeader from "../components/report/StepHeader";
import ReportStep1 from "../components/report/ReportStep1";
import ReportStep2 from "../components/report/ReportStep2";
import ReportStep3 from "../components/report/ReportStep3";
import ReportStep4 from "../components/report/ReportStep4";
import ReportStep5 from "../components/report/ReportStep5";

import { useReportStore } from "../store/useReportStore";


const ReportStepPage = () => {
    const { reportId, step } = useParams<{ reportId: string, step: string }>();
    const navigate = useNavigate();

    if (!reportId) {
        return <Message>잘못된 접근입니다.</Message>;
    }

    // report 정보 가져옴
    const { report } = useReportStore();

    const stepNumber = Number(step);

    if (!(stepNumber <= 5) || !reportId) {
        return <div>잘못된 접근입니다.</div>;
    }

    if (!report) return <Message>리포트를 찾을 수 없습니다.</Message>;

    const summaryDiagnosis = report.summary_diagnosis;
    const keyMoments = report.key_moment_capture.key_moments;
    const styleAnalysis = report.style_analysis;
    const coaching = report.coaching_and_plan.coaching_plan;
    const growthReport = report.growth_report;


    const handleNextStep = () => {
        navigate(`/report/${reportId}/step/${stepNumber + 1}`);
    };

    return (
        <Container>
            <StepHeader
                step={stepNumber}
                parentName={report.username}
                stageName={report.summary_diagnosis?.stage_name ?? ""}
            />
            <StepArea>
                {stepNumber === 1 && <ReportStep1 dashboard={summaryDiagnosis} />}
                {stepNumber === 2 && <ReportStep2 keyMoments={keyMoments} />}
                {stepNumber === 3 && <ReportStep3 styleAnalysis={styleAnalysis} />}
                {stepNumber === 4 && <ReportStep4 coaching={coaching} />}
                {stepNumber === 5 && <ReportStep5 growthReport={growthReport} />}
            </StepArea>

            <ButtonWrapper>
                {stepNumber < 5 && (
                    <Button
                        variant="primary"
                        onClick={handleNextStep}
                    >다음으로</Button>
                )}
                {stepNumber === 5 && (
                    <Button
                        variant="primary"
                        onClick={() => navigate(`/report/${reportId}`)}
                    >모든 분석 한눈에 보기</Button>
                )}
            </ButtonWrapper>
        </Container>
    );
};

export default ReportStepPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 67px 0;
`;

const StepArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
    margin-top: 50px;
    width: 60%;
`;

const Message = styled.p`
    margin-top: 40px;
    text-align: center;
`;