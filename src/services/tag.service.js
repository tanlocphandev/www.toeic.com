import http from "@/lib/http";

const ENDPOINT = "/tag";

class TagService {
    static getAll(params) {
        return http.get(`${ENDPOINT}`, { params });
    }
}

export default TagService;
