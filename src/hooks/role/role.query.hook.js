import { QUERY_KEYS } from "@/constants";
import roleService from "@/services/role.service";
import { getQueryKeys, sleep } from "@/utils";
import { useQuery } from "@tanstack/react-query";

export const useGetRoles = (params, select) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.ROLE.GET_ALL,
            ...params,
        }),
        queryFn: async () => {
            await sleep();
            return await roleService.getAll(params);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        select,
    });
};

export const useGetViewRoles = ({
    roleId,
    select,
    enabled = true,
    isSelectNotInRoleId = false,
}) => {
    return useQuery({
        queryKey: getQueryKeys({
            key: QUERY_KEYS.ROLE.GET_ALL,
            roleId,
            isSelectNotInRoleId,
        }),
        queryFn: async () => {
            await sleep();
            return await roleService.viewRolesById(roleId, isSelectNotInRoleId);
        },
        keepPreviousData: true,
        staleTime: 1000 * 10,
        retry: 0,
        enabled,
        select,
    });
};
