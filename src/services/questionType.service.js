import http from "@/lib/http";

const ENDPOINT = "/questionType";

class QuestionTypeService {
    static getAll(params) {
        return http.get(`${ENDPOINT}`, { params });
    }
}

export default QuestionTypeService;
