import testService from "@/services/test.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddTest = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return testService.createWithUploadQuestion(data);
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
};

export const useMutationEditTest = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return testService.update(data.test_id, data);
        },
    });
};

export const useMutationDeleteTest = () => {
    return useMutation({
        mutationFn: (id) => {
            return testService.delete(id);
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
};
