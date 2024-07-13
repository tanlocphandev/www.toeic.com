import BaseService from "@/services/base.service";

class UploadService extends BaseService {
    uploadQuestion(payload) {
        const formData = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return this.httpInstance.post(`${this.ENDPOINT}/local/question`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }
}

export default new UploadService("/upload");
