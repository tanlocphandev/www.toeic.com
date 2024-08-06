import userService from "@/services/user.service";
import { errorMessage, sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddTeacher = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await userService.addTeacher(data);
        },
        onError: errorMessage,
    });
};

export const useMutationUpdateProfile = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await userService.updateProfile(data);
        },
        onError: errorMessage,
    });
};

export const useMutationChangeStatus = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await userService.changeStatus(data);
        },
        onError: errorMessage,
    });
};
