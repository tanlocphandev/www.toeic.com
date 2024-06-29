import { PAGINATION, QUERY_KEYS } from "@/constants";
import questionTypeService from "@/services/questionType.service";
import { useQuery } from "@tanstack/react-query";

export const queryKeyQuestionType = ({ search, page }) => [
    QUERY_KEYS.TAG.GET_ALL,
    page,
    PAGINATION.LIMIT,
    search && `type_name:${search}`,
];

const useDataQuestionType = ({ search, page }) => {
    const { data, isFetching } = useQuery({
        queryKey: queryKeyQuestionType({ search, page }),
        queryFn: () =>
            questionTypeService.getAll({
                page: page,
                limit: PAGINATION.LIMIT,
                order: "type_name",
                ...(search && { queryLike: `type_name:${search}` }),
            }),
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
    });

    return { data, isFetching };
};

export default useDataQuestionType;
