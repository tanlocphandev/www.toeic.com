import BaseService from "@/services/base.service";

class TestPartService extends BaseService {
    getByPartId(partId) {
        return this.httpInstance.get(`${this.ENDPOINT}/part/${partId}`);
    }

    getById({ testId, partId }) {
        return this.httpInstance.get(`${this.ENDPOINT}/${testId}/${partId}`);
    }
}

export default new TestPartService("/test-part");
