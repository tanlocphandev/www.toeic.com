import BaseService from "@/services/base.service";

class ExamService extends BaseService {
    countExamFullTest() {
        return this.httpInstance.get(`${this.ENDPOINT}/count-full-test`);
    }

    sumTotalTimeExam() {
        return this.httpInstance.get(`${this.ENDPOINT}/sum-total-time-exam`);
    }

    getMaxQuestionCorrect() {
        return this.httpInstance.get(`${this.ENDPOINT}/max-question-correct`);
    }
}

export default new ExamService("/exam");
