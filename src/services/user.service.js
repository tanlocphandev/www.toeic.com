import BaseService from "@/services/base.service";

class UserService extends BaseService {
    addTeacher(teacher) {
        return this.httpInstance.post(`${this.ENDPOINT}/teacher`, teacher);
    }

    updateProfile(payload) {
        return this.httpInstance.patch(`${this.ENDPOINT}`, payload);
    }
}

export default new UserService("/user");
