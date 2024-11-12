import axios from "axios";
import getAuthHeader from "../../auth/services/authHeader.js";

const URL_BASE = 'https://farmguard-backend-915898677282.us-west4.run.app/api/v1'
const http = axios.create({

    baseURL: URL_BASE,
    headers: {
        'Content-type':'application/json'
    }
});

http.interceptors.request.use(
    config => {
        const authHeader = getAuthHeader();
        config.headers = { ...config.headers, ...authHeader };
        return config;
    },
    error => Promise.reject(error)
);



export default http;