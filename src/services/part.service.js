import http from "@/lib/http";

const ENDPOINT = "/part";

class PartService {
    static getAll(params) {
        return http.get(`${ENDPOINT}`, { params });
    }
}

export default PartService;
