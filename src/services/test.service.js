import BaseService from "@/services/base.service";

class TestService extends BaseService {
    createWithUploadQuestion(payload) {
        return this.httpInstance.post(`${this.ENDPOINT}/with-questions`, payload);
    }
    getTestWithYears() {
        return this.httpInstance.get(`${this.ENDPOINT}/with/years`);
    }

    getPercentExamTest() {
        return this.httpInstance.get(`${this.ENDPOINT}/percent-join-exam-test`);
    }
}

export default new TestService("/test");
