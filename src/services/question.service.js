import BaseService from "@/services/base.service";

class QuestionService extends BaseService {
    getByTest(testId) {
        return this.httpInstance.get(`${this.ENDPOINT}/test/${testId}`);
    }
}

export default new QuestionService("/question");
