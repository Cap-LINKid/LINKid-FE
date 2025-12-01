import { useEffect, useState } from "react";
import { videoStatus } from "../api/video";
import { useReportStore } from "../store/useReportStore";

export const useVideoStatusPolling = (videoId: number) => {
    const [status, setStatus] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [isDone, setIsDone] = useState(false);
    const [reportId, setReportId] = useState<number | null>(null);

    const { setReport } = useReportStore();

    useEffect(() => {
        if (!videoId) return;

        const interval = setInterval(async () => {
            try {
                const res = await videoStatus(videoId);
                const data = res.data;

                setStatus(data.status);
                setMessage(data.message);

                if (data.status === "COMPLETED") {
                    setIsDone(true);
                    setReportId(data.reportId);
                    setReport(data.result);
                    clearInterval(interval);
                }
            } catch (err) {
                console.error("분석 상태 조회 실패", err);
            }
        }, 2500); // 2.5초마다 Polling

        return () => clearInterval(interval);
    }, [videoId]);

    return { status, message, isDone, reportId };
};