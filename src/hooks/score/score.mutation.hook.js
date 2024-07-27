import scoreService from "@/services/score.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddScore = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await scoreService.create(data);
        },
    });
};

export const useMutationEditScore = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await scoreService.update(data.id, data);
        },
    });
};

export const useMutationDeleteScore = () => {
    return useMutation({
        mutationFn: (id) => {
            return scoreService.delete(id);
        },
    });
};
