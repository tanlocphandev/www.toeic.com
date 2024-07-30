import { QUERY_KEYS } from "@/constants";
import documentService from "@/services/document.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetDoc = (params, select) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.DOCUMENT.GET_ALL,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await documentService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        select,
    });
};

export const useGetDocById = ({ id, params, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.DOCUMENT.DETAILS,
            id,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await documentService.getById(id, params);
        },
        enabled: Boolean(id),
        select,
    });
};
