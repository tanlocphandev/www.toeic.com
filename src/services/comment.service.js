import BaseService from "@/services/base.service";

class CommentService extends BaseService {
    changeStatus(id, status) {
        return this.httpInstance.patch(`${this.ENDPOINT}/status/${id}`, { comment_status: status });
    }
}

export default new CommentService("/comment");
