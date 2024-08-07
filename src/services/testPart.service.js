import BaseService from "@/services/base.service";

class TestPartService extends BaseService {
    getByPartId({ partId, slug }) {
        return this.httpInstance.get(`${this.ENDPOINT}/part/${partId}?slug=${slug}`);
    }

    getById({ testId, partId }) {
        return this.httpInstance.get(`${this.ENDPOINT}/${testId}/${partId}`);
    }
}

export default new TestPartService("/test-part");
