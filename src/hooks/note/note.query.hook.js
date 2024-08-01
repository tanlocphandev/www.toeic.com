import { QUERY_KEYS } from "@/constants";
import noteService from "@/services/note.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetNote = ({ params, enabled, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.NOTE.GET_ALL,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await noteService.getAll(params);
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
            key: QUERY_KEYS.NOTE.DETAILS,
            id,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await noteService.getById(id, params);
        },
        enabled: Boolean(id),
        select,
    });
};
