import { QUERY_KEYS } from "@/constants";
import testService from "@/services/test.service";
import { getQueryKeys } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetTest = (params) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.TEST.GET_ALL,
            ...params,
        }),
        queryFn: () => {
            return testService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
    });
};

export const useGetTestDetails = (id, params) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.TEST.DETAILS,
            id,
            ...params,
        }),
        queryFn: () => {
            return testService.getById(id, params);
        },
        retry: 0,
    });
};
