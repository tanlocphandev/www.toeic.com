import { QUERY_KEYS } from "@/constants";
import testPartService from "@/services/testPart.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetTestPartByPartId = (partId, select) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.TEST_PART.GET_BY_PART_ID, partId }),
        queryFn: async () => {
            await sleep();
            return await testPartService.getByPartId(partId);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        select,
        enabled: Boolean(partId),
    });
};

export const useGetTestPartById = ({ partId, testId, select }) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.TEST_PART.GET_BY_ID, partId, testId }),
        queryFn: async () => {
            await sleep();
            return await testPartService.getById({ partId, testId });
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        select,
        enabled: Boolean(partId && testId),
    });
};
