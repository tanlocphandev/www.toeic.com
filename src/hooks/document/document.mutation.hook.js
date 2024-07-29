import documentService from "@/services/document.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddDocument = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await documentService.create(data);
        },
    });
};

export const useMutationEditDocument = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await documentService.update(data.doc_id, data);
        },
    });
};

export const useMutationDeleteDocument = () => {
    return useMutation({
        mutationFn: async (id) => {
            await sleep();
            return documentService.delete(id);
        },
    });
};
