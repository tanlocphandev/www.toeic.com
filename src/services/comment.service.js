import BaseService from "@/services/base.service";

class CommentService extends BaseService {
    changeStatus(id, payload) {
        return this.httpInstance.patch(`${this.ENDPOINT}/status/${id}`, payload);
    }

    delete({ commentId, testId }) {
        return this.httpInstance.delete(`${this.ENDPOINT}`, {
            data: {
                commentId,
                testId,
            },
        });
    }
}

export default new CommentService("/comment");
