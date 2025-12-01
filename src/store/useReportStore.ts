import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ReportStore {
    report: any | null;
    setReport: (data: any) => void;
    clearReport: () => void;
}

export const useReportStore = create<ReportStore>()(
    persist(
        (set) => ({
            report: null,
            setReport: (report) => set({ report }),
            clearReport: () => set({ report: null }),
        }),
        {
            name: "report-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);