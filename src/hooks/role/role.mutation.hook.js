import rbacService from "@/services/rbac.service";
import { sleep } from "@/utils";
import { useMutation } from "@tanstack/react-query";

export const useMutationRemoveRoleGrant = () => {
    return useMutation({
        mutationFn: async (values) => {
            await sleep();
            return await rbacService.removeGrantToRole(values);
        },
    });
};

export const useMutationAddRoleGrant = () => {
    return useMutation({
        mutationFn: async (values) => {
            await sleep();
            return await rbacService.addGrantToRole(values);
        },
    });
};
