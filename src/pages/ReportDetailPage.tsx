import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useReport } from "../api/useReport";
import ReportStep1 from "../components/report/ReportStep1";
import ReportStep2 from "../components/report/ReportStep2";
import ReportStep3 from "../components/report/ReportStep3";
import ReportStep4 from "../components/report/ReportStep4";
import ReportStep5 from "../components/report/ReportStep5";

const ReportDetailPage = () => {
    const { reportId } = useParams<{ reportId: string }>();

    if (!reportId) return <Message>잘못된 접근입니다.</Message>;

    const { report, loading } = useReport(reportId);

    const [activeTab, setActiveTab] = useState<"highlight" | "detail" | "coaching">(
        "highlight"
    );

    // 섹션 refs
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const tabs = [
        { key: "highlight", label: "하이라이트", ref: section2Ref },
        { key: "detail", label: "상세 분석", ref: section3Ref },
        { key: "coaching", label: "코칭", ref: section4Ref },
    ] as const;

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY + 10; // offset

            if (section4Ref.current && y >= section4Ref.current.offsetTop) {
                setActiveTab("coaching");
            } else if (section3Ref.current && y >= section3Ref.current.offsetTop) {
                setActiveTab("detail");
            } else {
                setActiveTab("highlight");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    if (loading) return <Message>로딩 중…</Message>;
    if (!report) return <Message>리포트가 없습니다.</Message>;

    return (
        <Wrapper>
            <Section>
                <ReportStep1 dashboard={report.dashboard} />
            </Section>

            <TabContainer>
                {tabs.map((t) => (
                    <TabButton
                        key={t.key}
                        $active={activeTab === t.key}
                        onClick={() => {
                            setActiveTab(t.key);
                            scrollToSection(t.ref);
                        }}
                    >
                        {t.label}
                    </TabButton>
                ))}
            </TabContainer>


            <ContentContainer>
                <Section ref={section2Ref}>
                    <ReportStep2 keyMoments={report.content.keyMoments} />
                </Section>
                <Section ref={section3Ref}>
                    <ReportStep3 styleAnalysis={report.content.styleAnalysis} />
                </Section>
                <Section ref={section4Ref}>
                    <ReportStep4 coaching={report.content.coaching} />
                </Section>
                <Section>
                    <ReportStep5 growthReport={report.content.growthReport} />
                </Section>
            </ContentContainer>
        </Wrapper>
    );
};

export default ReportDetailPage;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TabContainer = styled.div`
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    padding: 4px 5px;
    border-radius: 15px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
`;

const TabButton = styled.button<{ $active: boolean }>`
    width: 33%;
    padding: 10px 0;
    border: none;
    border-radius: 15px;
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.typography.weights.semibold};
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;

    background-color: ${({ $active, theme }) =>
        $active ? theme.colors.primary[500] : "white"};

    color: ${({ $active, theme }) =>
        $active ? "#fff" : theme.colors.textSecondary};

    &:active {
        background: #e5e5e5;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Section = styled.div`
    margin-bottom: 20px;
    scroll-margin-top: 100px;
`;

const Message = styled.p`
    margin-top: 60px;
    text-align: center;
`;