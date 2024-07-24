import { PAGINATION, QUERY_KEYS } from "@/constants";
import questionTypeService from "@/services/questionType.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const queryKeyQuestionType = ({ search, page }) => [
    QUERY_KEYS.QUESTION_TYPE.GET_ALL,
    page,
    PAGINATION.LIMIT,
    search && `type_name:${search}`,
];

const useDataQuestionType = ({ search, page, select }) => {
    const { data, isFetching } = useQuery({
        queryKey: queryKeyQuestionType({ search, page }),
        queryFn: async () => {
            await sleep();
            return await questionTypeService.getAll({
                page: page,
                limit: PAGINATION.LIMIT,
                order: "type_id",
                ...(search && { queryLike: `type_name:${search}` }),
            });
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        select,
    });

    return { data, isFetching };
};

export const useGetQuestionTypeBySlug = (slug, select) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.QUESTION_TYPE.GET_BY_SLUG,
            slug,
        }),
        queryFn: async () => {
            await sleep();
            return await questionTypeService.getBySlug(slug);
        },
        retry: 0,
        staleTime: 1000 * 10,
        enabled: Boolean(slug),
        select,
    });
};

export default useDataQuestionType;
