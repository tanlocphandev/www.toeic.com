import { PAGINATION, QUERY_KEYS } from "@/constants";
import tagService from "@/services/tag.service";
import { sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const queryKeyTag = ({ search, page }) => [
    QUERY_KEYS.TAG.GET_ALL,
    page,
    PAGINATION.LIMIT,
    search && `tag_name:${search}`,
];

const useDataTag = ({ search, page }) => {
    const { data, isFetching } = useQuery({
        queryKey: queryKeyTag({ search, page }),
        queryFn: async () => {
            await sleep();
            return await tagService.getAll({
                page: page,
                limit: PAGINATION.LIMIT,
                order: "tag_name",
                ...(search && { queryLike: `tag_name:${search}` }),
            });
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
    });

    return { data, isFetching };
};

export default useDataTag;
