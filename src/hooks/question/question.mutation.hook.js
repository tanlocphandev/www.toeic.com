import testService from "@/services/test.service";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddTest = () => {
    return useMutation({
        mutationFn: (data) => {
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
        mutationFn: (id, data) => {
            return testService.update(id, data);
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
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
