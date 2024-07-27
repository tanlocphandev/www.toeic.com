import scoreDetailsService from "@/services/scoreDetails.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddScoreDetails = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await scoreDetailsService.create(data);
        },
    });
};

export const useMutationEditScoreDetails = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await scoreDetailsService.update(data.details_id, data);
        },
    });
};

export const useMutationDeleteScoreDetails = () => {
    return useMutation({
        mutationFn: (id) => {
            return scoreDetailsService.delete(id);
        },
    });
};
