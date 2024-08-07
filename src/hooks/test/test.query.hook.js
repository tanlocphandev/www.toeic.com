import { QUERY_KEYS } from "@/constants";
import testService from "@/services/test.service";
import { getQueryKeys, sleep } from "@/utils";
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
        enabled: Boolean(id),
        retry: 0,
    });
};

export const useGetTestWithYears = (select) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.TEST.GET_WITH_YEARS,
        }),
        queryFn: async () => {
            await sleep();
            return await testService.getTestWithYears();
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        select,
    });
};

export const useGetPercentExamTest = (select = (data) => data?.metadata) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.TEST.GET_PERCENT_EXAM_TEST,
        }),
        queryFn: async () => {
            await sleep();
            return await testService.getPercentExamTest();
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        select,
    });
};
