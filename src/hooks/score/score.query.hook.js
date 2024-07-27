import { QUERY_KEYS } from "@/constants";
import scoreService from "@/services/score.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetScore = (params) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.SCORE.GET_ALL,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await scoreService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
    });
};

export const useGetScoreById = ({ id, params, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.SCORE.DETAILS,
            id,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await scoreService.getById(id, params);
        },
        enabled: Boolean(id),
        select,
    });
};
