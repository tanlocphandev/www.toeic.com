import { QUERY_KEYS } from "@/constants";
import examService from "@/services/exam.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetExamDetails = (examId, select) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.EXAM.DETAILS, examId }),
        queryFn: async () => {
            await sleep();
            return await examService.getById(examId);
        },
        enabled: Boolean(examId),
        select,
    });
};

export const useGetExams = ({ params, select }) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.EXAM.GET_EXAMS, params }),
        queryFn: async () => {
            await sleep(1000);
            return await examService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        select,
    });
};

export const useGetCountExamFullTest = () => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.EXAM.COUNT_FULL_TEST }),
        queryFn: async () => {
            await sleep();
            return await examService.countExamFullTest();
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        select: (data) => data?.metadata,
    });
};

export const useGetSumExamFullTest = () => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.EXAM.SUM_FULL_TEST_TIMER }),
        queryFn: async () => {
            await sleep();
            return await examService.sumTotalTimeExam();
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        select: (data) => data?.metadata,
    });
};

export const useGetMaxQuestionCorrect = (select = (data) => data?.metadata) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.EXAM.GET_MAX_QUESTION_CORRECT }),
        queryFn: async () => {
            await sleep();
            return await examService.getMaxQuestionCorrect();
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        select,
    });
};

export const useGetStatisticByDate = (select = (data) => data?.metadata) => {
    return useQuery({
        queryKey: getQueryKeys({ key: QUERY_KEYS.EXAM.GET_STATISTIC_BY_DATE }),
        queryFn: async () => {
            await sleep();
            return await examService.getStatisticByDate();
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        select,
    });
};
