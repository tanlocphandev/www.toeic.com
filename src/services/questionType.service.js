import BaseService from "@/services/base.service";

class QuestionTypeService extends BaseService {
    getBySlug(slug) {
        return this.httpInstance.get(`${this.ENDPOINT}/slug/${slug}`);
    }
}

export default new QuestionTypeService("/questionType");
