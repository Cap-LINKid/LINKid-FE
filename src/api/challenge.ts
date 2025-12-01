import { api } from "./axios";

export const getMyChallenge = async (status: string) => {
    const res = await api.get(`/challenges`, {
        params: { status: status }
    });
    return res.data.data;
}