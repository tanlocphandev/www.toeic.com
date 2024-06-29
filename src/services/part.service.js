import http from "@/lib/http";

const ENDPOINT = "/part";

class PartService {
    static getAll(params) {
        return http.get(`${ENDPOINT}`, { params });
    }

    static create(payload) {
        return http.post(`${ENDPOINT}`, payload);
    }

    static update(id, payload) {
        return http.patch(`${ENDPOINT}/${id}`, payload);
    }

    static upload(payload) {
        const formData = new FormData();

        formData.append("file", payload);

        return http.post(`${ENDPOINT}/multiple`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }
}

export default PartService;
