import userService from "@/services/user.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationAddTeacher = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await userService.addTeacher(data);
        },
    });
};

export const useMutationUpdateProfile = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await userService.updateProfile(data);
        },
    });
};

export const useMutationChangeStatus = () => {
    return useMutation({
        mutationFn: async (data) => {
            await sleep();
            return await userService.changeStatus(data);
        },
    });
};
