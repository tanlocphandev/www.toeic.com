import { QUERY_KEYS } from "@/constants";
import examService from "@/services/exam.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetExamDetails = (detailsId, select) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.EXAM.DETAILS, detailsId }),
        queryFn: async () => {
            await sleep();
            return await examService.getById(detailsId);
        },
        enabled: Boolean(detailsId),
        select,
    });
};
