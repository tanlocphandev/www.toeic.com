import BaseService from "@/services/base.service";

class QuestionService extends BaseService {
    getByTest(testId) {
        return this.httpInstance.get(`${this.ENDPOINT}/test/${testId}`);
    }

    getByTestPartId({ testId, partId }) {
        return this.httpInstance.get(`${this.ENDPOINT}/${testId}/${partId}`);
    }
    getByTestQuestionTypeId({ testId, questionTypeId }) {
        return this.httpInstance.get(
            `${this.ENDPOINT}/test/${testId}/question-type/${questionTypeId}`
        );
    }
}

export default new QuestionService("/question");
