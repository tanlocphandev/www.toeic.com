import noteDetailsService from "@/services/noteDetails.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddNoteDetails = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await noteDetailsService.create(data);
        },
    });
};

export const useMutationEditNoteDetails = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await noteDetailsService.update(data.detail_id, data);
        },
    });
};

export const useMutationDeleteNoteDetails = () => {
    return useMutation({
        mutationFn: async (id) => {
            await sleep();
            return await noteDetailsService.delete(id);
        },
    });
};
