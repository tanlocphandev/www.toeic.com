import { QUERY_KEYS } from "@/constants";
import userService from "@/services/user.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (params) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.USER.GET_ALL,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await userService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
    });
};
