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

    uploadAudio(payload) {
        const formData = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return this.httpInstance.post(`${this.ENDPOINT}/local/audio`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    uploadImage(payload) {
        const formData = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return this.httpInstance.post(`${this.ENDPOINT}/local/image`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    uploadPdf(payload) {
        const formData = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return this.httpInstance.post(`${this.ENDPOINT}/local/pdf`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    uploadVideo(payload) {
        const formData = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return this.httpInstance.post(`${this.ENDPOINT}/local/video`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    uploadScore(payload) {
        const formData = new FormData();

        Object.entries(payload).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return this.httpInstance.post(`${this.ENDPOINT}/local/score`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }
}

export default new UploadService("/upload");
