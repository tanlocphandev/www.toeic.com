import { QUERY_KEYS } from "@/constants";
import commentService from "@/services/comment.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetComment = ({ params, select, enabled }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.COMMENT.GET_ALL,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await commentService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        enabled,
        select,
    });
};

export const useGetScoreById = ({ id, params, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.COMMENT.DETAILS,
            id,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await commentService.getById(id, params);
        },
        enabled: Boolean(id),
        select,
    });
};
