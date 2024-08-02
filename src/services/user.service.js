import BaseService from "@/services/base.service";

class UserService extends BaseService {
    addTeacher(teacher) {
        return this.httpInstance.post(`${this.ENDPOINT}/teacher`, teacher);
    }
}

export default new UserService("/user");
