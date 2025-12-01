import { api } from "./axios";

export const requestPresignedUrl = async (fileName: string, fileType: any, contextTag: string, duration: number) => {
    const res = await api.post("/videos/presign", {
        fileName: fileName,
        contentType: fileType,
        contextTag: contextTag,
        duration: duration
    });

    return res.data.data;
};

export const startVideoAnalysis = async (videoId: number) => {
    return api.post(`/videos/${videoId}/start`);
};