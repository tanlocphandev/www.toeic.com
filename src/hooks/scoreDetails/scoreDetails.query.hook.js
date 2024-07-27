import { QUERY_KEYS } from "@/constants";
import scoreDetailsService from "@/services/scoreDetails.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetScoreDetails = ({ params, enabled, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.SCORE_DETAILS.GET_ALL,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await scoreDetailsService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        enabled,
        select,
    });
};

export const useGetScoreDetailsById = ({ id, params, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.SCORE_DETAILS.DETAILS,
            id,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await scoreDetailsService.getById(id, params);
        },
        enabled: Boolean(id),
        select,
    });
};
