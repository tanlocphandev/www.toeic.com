import commentService from "@/services/comment.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddComment = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await commentService.create(data);
        },
    });
};

export const useMutationEditComment = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await commentService.update(data.comment_id, data);
        },
    });
};

export const useMutationDeleteComment = () => {
    return useMutation({
        mutationFn: (id) => {
            return commentService.delete(id);
        },
    });
};
