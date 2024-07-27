import testService from "@/services/test.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddTest = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await testService.create(data);
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
        mutationFn: async (id) => {
            await sleep();
            return testService.delete(id);
        },
    });
};
