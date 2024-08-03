import BaseService from "@/services/base.service";

class RoleService extends BaseService {
    viewRolesById(id, isSelectNotInRoleId = false) {
        return this.httpInstance.get(`${this.ENDPOINT}/view/${id}`, {
            params: {
                isSelectNotInRoleId,
            },
        });
    }
}

export default new RoleService("/role");
