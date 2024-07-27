import { QUERY_KEYS } from "@/constants";
import questionService from "@/services/question.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useGetQuestions = ({ params, select, enabled }) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.QUESTION.GET_ALL, ...params }),
        queryFn: async () => {
            await sleep();
            return await questionService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        select,
        enabled,
    });
};

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

export const useGetQuestionByTestPartId = ({ testId, partId, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.QUESTION.GET_BY_TEST_PART_ID,
            testId,
            partId,
        }),
        queryFn: async () => {
            await sleep();
            return await questionService.getByTestPartId({ testId, partId });
        },
        keepPreviousData: true,
        enabled: Boolean(testId && partId),
        select,
    });
};

export const useGetQuestionByTestQuestionTypeId = ({ testId, questionTypeId, select }) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.QUESTION.GET_BY_TEST_PART_ID,
            testId,
            questionTypeId,
        }),
        queryFn: async () => {
            await sleep();
            return await questionService.getByTestQuestionTypeId({ testId, questionTypeId });
        },
        keepPreviousData: true,
        enabled: Boolean(testId && questionTypeId),
        select,
    });
};
