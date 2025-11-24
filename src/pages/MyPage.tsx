import styled from "styled-components";
import { useState } from "react";
import StarIcon from "../assets/icons/family-star.svg?react";
import EditIcon from "../assets/icons/edit.svg?react";
import EditChildModal from "../components/mypage/EditChildModal";

const MyPage = () => {
    // mock 사용자 정보
    const user = {
        name: "홍길동님",
        child: {
            name: "홍유라",
            birth: "2010-10-31",
            gender: "여아"
        },
        reportCount: 3,
        challengeCount: 3
    };

    const [openEditModal, setOpenEditModal] = useState(false);

    return (
        <Wrapper>
            {/* 상단 유저 정보 */}
            <ProfileSection>
                <ProfileIcon><StarIcon /></ProfileIcon>
                <UserName>{user.name}</UserName>
                <EditTitle>내 정보 수정</EditTitle>
            </ProfileSection>

            {/* 아이 정보 */}
            <Card>
                <CardHeader>
                    <CardTitle>우리 아이 정보</CardTitle>
                    <EditIcon style={{ cursor: "pointer" }} onClick={() => setOpenEditModal(true)} />
                </CardHeader>

                <InfoRow>
                    <Label>이름</Label>
                    <Value>{user.child.name}</Value>
                </InfoRow>

                <InfoRow>
                    <Label>생년월일</Label>
                    <Value>{user.child.birth}</Value>
                </InfoRow>

                <InfoRow>
                    <Label>성별</Label>
                    <Value>{user.child.gender}</Value>
                </InfoRow>
            </Card>

            {/* 활동 요약 */}
            <SummaryTitle>나의 활동 요약</SummaryTitle>

            <SummaryBox>
                <SummaryCard>
                    <SummaryNumber>{user.reportCount}</SummaryNumber>
                    <SummaryLabel>생성된 리포트</SummaryLabel>
                </SummaryCard>

                <SummaryCard>
                    <SummaryNumber>{user.challengeCount}</SummaryNumber>
                    <SummaryLabel>생성된 챌린지</SummaryLabel>
                </SummaryCard>
            </SummaryBox>

            <EditChildModal
                open={openEditModal}
                onClose={() => setOpenEditModal(false)}
                child={user.child}
                onSave={(updated) => {
                    console.log("저장된 값:", updated);
                    setOpenEditModal(false);
                }}
            />
        </Wrapper>
    );
};

export default MyPage;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 40px;
`;

const ProfileIcon = styled.div`
    width: 55px;
    height: 55px;
    background: ${({ theme }) => theme.colors.primary[400]};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const UserName = styled.p`
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.typography.weights.semibold};
`;

const EditTitle = styled.div`
    background: white;
    padding: 10px 24px;
    border-radius: 20px;
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.weights.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
`;

const Card = styled.div`
    background: white;
    border-radius: 15px;
    padding: 24px 23px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`;

const CardTitle = styled.p`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.weights.bold};
`;

const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Label = styled.p`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    color: ${({ theme }) => theme.colors.textSecondary};
`;

const Value = styled.p`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const SummaryTitle = styled.p`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    margin-left: 23px;
    margin-bottom: 10px;
`;

const SummaryBox = styled.div`
    display: flex;
    gap: 20px;
`;

const SummaryCard = styled.div`
    flex: 1;
    background: white;
    border-radius: 15px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border: 1px solid ${({ theme }) => theme.colors.primary[500]};
`;

const SummaryNumber = styled.p`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.weights.semibold};
`;

const SummaryLabel = styled.p`
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.typography.weights.medium};
`;