import { QUERY_KEYS } from "@/constants";
import questionService from "@/services/question.service";
import { getQueryKeys } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useGetQuestionByTest = (testId, select) => {
    const enabled = useMemo(() => Boolean(testId), [testId]);

    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.QUESTION.GET_BY_TEST,
            testId,
        }),
        queryFn: () => {
            return questionService.getByTest(testId);
        },
        keepPreviousData: true,
        enabled,
        select,
    });
};
