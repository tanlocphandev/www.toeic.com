import { QUERY_KEYS } from "@/constants";
import noteDetailsService from "@/services/noteDetails.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetNoteDetails = ({ params, enabled, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.NOTE_DETAILS.GET_ALL,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await noteDetailsService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        enabled,
        select,
    });
};

export const useGetNoteById = ({ id, params, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.NOTE_DETAILS.DETAILS,
            id,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await noteDetailsService.getById(id, params);
        },
        enabled: Boolean(id),
        select,
    });
};
