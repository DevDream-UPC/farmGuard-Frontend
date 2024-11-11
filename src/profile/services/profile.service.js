import http from "../../shared/services/http-common.js";
export class ProfileService {
    getProfileById(id){
        return http.get(`/profile/${id}`);
    }
}