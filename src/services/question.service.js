import BaseService from "@/services/base.service";

class QuestionService extends BaseService {
    getByTest(testId) {
        return this.httpInstance.get(`${this.ENDPOINT}/test/${testId}`);
    }

    getByTestPartId({ testId, partId }) {
        return this.httpInstance.get(`${this.ENDPOINT}/${testId}/${partId}`);
    }
}

export default new QuestionService("/question");
