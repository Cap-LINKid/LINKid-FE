import styled from "styled-components";
import Button from "../common/Button";

interface UploadActionsProps {
    isVideoUploaded: boolean;
    selectedSituation: string | null;
    onAnalyzeClick: () => void;
    disabled?: boolean;
}

const UploadActions = ({
    isVideoUploaded,
    selectedSituation,
    onAnalyzeClick,
    disabled = false
}: UploadActionsProps) => {
    const canAnalyze = isVideoUploaded && selectedSituation && !disabled;

    return (
        <>
            {!canAnalyze ? (
                <DisabledButton variant="disabled">
                    영상 및 상황을 먼저 선택해 주세요
                </DisabledButton>
            ) : (
                <AnalyzeButton variant="primary" onClick={onAnalyzeClick}>
                    영상 분석하기
                </AnalyzeButton>
            )}
        </>
    );
};

export default UploadActions;

const DisabledButton = styled(Button)``

const AnalyzeButton = styled(Button)``