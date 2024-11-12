import http from "../../shared/services/http-common.js";
export class ProfileService {
    getProfileById(id){
        return http.get(`/profile/${id}`);
    }
    putProfile(profile,profileId){
        return http.put(`/profile/${profileId}`, profile);
    }
    deleteProfile(id){
        return http.delete(`/profile/${id}`);
    }
}