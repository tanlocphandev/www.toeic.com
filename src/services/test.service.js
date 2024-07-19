import BaseService from "@/services/base.service";

class TestService extends BaseService {
    createWithUploadQuestion(payload) {
        return this.httpInstance.post(`${this.ENDPOINT}/with-questions`, payload);
    }
}

export default new TestService("/test");
