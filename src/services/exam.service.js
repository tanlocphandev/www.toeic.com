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

    getStatisticByDate() {
        return this.httpInstance.get(`${this.ENDPOINT}/statistic-by-date`);
    }
}

export default new ExamService("/exam");
