import { useEffect, useState } from "react";

export const useReport = (reportId: string) => {
    const [report, setReport] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                // 실제 API 호출
                // const res = await fetch(`/api/reports/${reportId}`);
                // const json = await res.json();
                // setReport(json.data);

                // Mock 데이터
                const mock = {
                    dashboard: {
                        piScore: 70,
                        ndiScore: 30,
                        relationshipStatus: "공감적 협력",
                        summaryText: "길동님과 아이의 오늘 대화는 ‘공감적 협력’ 단계에 가까워요."
                    },
                    content: {
                        keyMoments: {
                            bestMoment: {
                                diagnosis: "긍정적 상호작용",
                                conversation: ["아이: 싫어!", "부모: 많이 속상하구나."],
                                aiComment: "아이가 부정적 감정을 표현했을 때, 부모님이 이를 지시로 억누르지 않고 감정을 그대로 읽어주셨어요. 아이의 감정 조절 능력을 키우는 최고의 순간입니다.",
                                reference: "오은영 박사 연구"
                            },
                            growthOpportunity: {
                                diagnosis: "긍정적 기회",
                                conversation: ["아이: 나 이거 다 만들었어!", "부모: 오, 고생했구나!"],
                                aiComment: "아이가 자신의 성과를 공유하며 관심을 보낸 결정적 순간입니다. 이때 부모님의 질문은 아이의 성취감을 반감시킬 수 있습니다.",
                                suggestion: "우와, 혼자서 멋진 성을 완성했네!",
                                reference: "오은영 박사 연구"
                            },
                            detailedPatterns: {
                                patternName: "긍정적 기회 놓치기",
                                count: 2,
                                startTime: "2분 15초",
                                childLine: "나 블록 10개나 쌓았어!",
                                parentLine: "응, 좋아.",
                                why: "아이가 성취를 공유할 때 무관심한 반응은 동기를 떨어뜨립니다.",
                                recommended: "우와, 빨간 블록을 높이 쌓았네! 무너지지 않게 조심했구나."
                            }
                        },
                        styleAnalysis: {
                            parent: {
                                metrics: [
                                    { name: "반영적 듣기", value: 20 },
                                    { name: "칭찬", value: 20 },
                                    { name: "지시형 발화", value: 20 },
                                    { name: "기타", value: 40 }
                                ]
                            },
                            child: {
                                metrics: [
                                    { name: "자발적 발화", value: 20 },
                                    { name: "응답형 발화", value: 20 },
                                    { name: "지시형 발화", value: 20 },
                                    { name: "기타", value: 40 }
                                ],
                                aiComment:
                                    "아이의 ‘자발적 발화'가 14%로 낮습니다. 이는 부모님의 ‘질문형 발화' 비율(40%)이 높아 아이가 주로 ‘대답'하는 역할에 머무르기 때문일 수 있습니다."
                            }
                        },
                        coaching: {
                            summary: "이번 상호작용에서는 아이의 감정을 잘 읽어주셨습니다(긍정 패턴).  아이가 성과를 자랑할 때('긍정적 기회 놓치기' 3회) 이를 놓치는 경향이 발견되었습니다. 이는 부모님의 '반영적 듣기' 비율(20%)이 연령 평균(30%)보다 낮기 때문입니다.",
                            generatedChallenge: {
                                challengeId: 2,
                                title: "'긍정적 기회 놓치기' 3회 도전!",
                                goal: "아이가 성취나 행동을 공유할 때 즉시 긍정적으로 반응하기",
                                period: "2025.01.15. - 2025.01.22.",

                                "preview": [
                                    "아이가 무언가를 보여줄 때 3초 안에 ‘오~ 그랬구나!’ 같은 공감 반응을 해주세요.",
                                    "단순 칭찬 대신 ‘네가 스스로 해낸 게 멋지다!’처럼 구체적 칭찬을 사용해보세요.",
                                    "아이가 말할 때 5초 정도 기다려 여유를 주면 자발적 발화가 증가할 수 있어요."
                                ]
                            },
                            reason: "대화 중 지시나 설명이 많아지는 패턴이 감지되었습니다. 전문가들은 이 패턴이 아이의 표현 의지와 주도성에 영향을 줄 수 있다고 강조합니다. 이에 따라 ‘지시 줄이고 선택권 주기’ 행동을 연습하는 챌린지가 생성되었습니다.",
                        },
                        growthReport: {
                            currentMetrics: [
                                {
                                    label: "반영적 듣기",
                                    before: 15,
                                    after: 35,
                                    diff: 20
                                },
                                {
                                    label: "지시형 발화",
                                    before: 45,
                                    after: 28,
                                    diff: -17
                                },
                                {
                                    label: "긍정적 기회 놓치기",
                                    before: 5,
                                    after: 2,
                                    diff: -3
                                }
                            ],
                            comment: "이번 대화에서는 감정 읽기가 잘 되었고, 지시형 발화를 줄이려는 시도가 보였습니다.",
                            challengeEvaluation: [
                                {
                                    challengeName: "긍정적 기회 놓치기",
                                    detectedCount: 3,
                                    description: "칭찬 문장은 짧게, 즉시 반응하기",
                                    instances: [
                                        {
                                            timestamp: "00:12",
                                            summary: "아이가 슬프다고 말했을 때 감정을 먼저 짚어주셨습니다."
                                        },
                                        {
                                            timestamp: "01:47",
                                            summary: "아이의 말에 ‘그랬구나’라고 반영형으로 응답하셨습니다."
                                        },
                                        {
                                            timestamp: "02:32",
                                            summary: "아이가 선택하려 할 때 선택권을 먼저 제시하셨습니다."
                                        }
                                    ]
                                }
                            ]
                        },
                    }
                };

                setReport(mock);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchReport();
    }, [reportId]);

    return { report, loading };
};