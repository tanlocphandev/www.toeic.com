import http from "@/lib/http";

class BaseService {
    constructor(endpoint) {
        this.ENDPOINT = endpoint;
    }

    /**
     * Retrieves all resources from the API endpoint.
     *
     * @param {Object} params - The query parameters to be included in the request.
     * @return {Promise} A promise that resolves to the response data.
     */
    getAll(params) {
        return http.get(`${this.ENDPOINT}`, { params });
    }

    /**
     * Retrieves a specific resource by ID from the API endpoint.
     *
     * @param {number | string} id - The ID of the resource to retrieve.
     * @param {Object} params - The query parameters to be included in the request.
     * @return {Promise} A promise that resolves to the response data.
     */
    getById(id, params) {
        return http.get(`${this.ENDPOINT}/${id}`, { params });
    }

    /**
     * Creates a new resource by sending a POST request to the API endpoint.
     *
     * @param {Object} payload - The data to be sent in the request body.
     * @return {Promise} A promise that resolves to the response data.
     */
    create(payload) {
        return http.post(`${this.ENDPOINT}`, payload);
    }

    /**
     * Updates a resource by sending a PATCH request to the API endpoint.
     *
     * @param {string | number} id - The identifier of the resource to update.
     * @param {Object} payload - The data to be updated in the resource.
     * @return {Promise} A promise that resolves to the updated resource data.
     */
    update(id, payload) {
        return http.patch(`${this.ENDPOINT}/${id}`, payload);
    }

    /**
     * Deletes a specific resource by ID from the API endpoint.
     *
     * @param {number | string} id - The ID of the resource to delete.
     * @return {Promise} A promise that resolves to the deletion response.
     */
    delete(id) {
        return http.delete(`${this.ENDPOINT}/${id}`);
    }

    /**
     * Uploads a file to the server using a POST request.
     *
     * @param {File} payload - The file to be uploaded.
     * @return {Promise<Response>} A promise that resolves to the server's response.
     */
    upload(payload) {
        const formData = new FormData();

        formData.append("file", payload);

        return http.post(`${this.ENDPOINT}/multiple`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    get httpInstance() {
        return http;
    }
}

export default BaseService;
