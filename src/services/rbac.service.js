import BaseService from "@/services/base.service";

class RbacService extends BaseService {
    removeGrantToRole(payload) {
        return this.httpInstance.delete(`${this.ENDPOINT}/grant-role`, {
            data: payload,
        });
    }

    addGrantToRole(payload) {
        return this.httpInstance.post(`${this.ENDPOINT}/grant-role`, payload);
    }
}

export default new RbacService("/rbac");
