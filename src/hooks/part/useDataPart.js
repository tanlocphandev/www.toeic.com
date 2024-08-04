import { PAGINATION, QUERY_KEYS } from "@/constants";
import partService from "@/services/part.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const queryKeyPart = ({ page, search }) => [
    QUERY_KEYS.PART.GET_ALL,
    page,
    PAGINATION.LIMIT,
    search && `part_name:${search}`,
];

export const useGetPart = ({ params = {}, select, enabled }) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.PART.GET_ALL, ...params }),
        queryFn: async () => {
            await sleep();
            return await partService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        select,
        enabled,
    });
};

const useDataPart = ({ search, page }) => {
    const { data, isFetching } = useQuery({
        queryKey: queryKeyPart({ search, page }),
        queryFn: async () => {
            await sleep();
            return await partService.getAll({
                page: page,
                limit: PAGINATION.LIMIT,
                order: "part_name",
                ...(search && { queryLike: `part_name:${search}` }),
            });
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
    });

    return { data, isFetching };
};

export default useDataPart;
