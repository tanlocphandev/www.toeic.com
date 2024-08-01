import noteService from "@/services/note.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddNote = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await noteService.create(data);
        },
    });
};

export const useMutationEditNote = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await noteService.update(data.note_id, data);
        },
    });
};

export const useMutationDeleteNote = () => {
    return useMutation({
        mutationFn: async (id) => {
            await sleep();
            return await noteService.delete(id);
        },
    });
};
