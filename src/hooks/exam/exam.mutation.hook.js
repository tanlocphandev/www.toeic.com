import examService from "@/services/exam.service";
import { errorMessage, sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationCreateExam = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await examService.create(data);
        },
        onError: errorMessage,
        onSuccess: (data) => {
            console.log(`data:::`, data);
        },
    });
};
