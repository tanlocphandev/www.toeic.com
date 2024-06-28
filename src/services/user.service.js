import http from "@/lib/http";

const ENDPOINT = "/user";

class UserService {
    static getAll(params) {
        return http.get(`${ENDPOINT}`, { params });
    }
}

export default UserService;
