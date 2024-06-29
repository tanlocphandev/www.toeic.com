import { PAGINATION, QUERY_KEYS } from "@/constants";
import PartService from "@/services/part.service";
import { useQuery } from "@tanstack/react-query";

const useDataPart = ({ search, page }) => {
    const { data, isFetching } = useQuery({
        queryKey: [
            QUERY_KEYS.PART.GET_ALL,
            page,
            PAGINATION.LIMIT,
            search && `part_name:${search}`,
        ],
        queryFn: () =>
            PartService.getAll({
                page: page,
                limit: PAGINATION.LIMIT,
                order: "part_name",
                ...(search && { queryLike: `part_name:${search}` }),
            }),
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
    });

    return { data, isFetching };
};

export default useDataPart;
