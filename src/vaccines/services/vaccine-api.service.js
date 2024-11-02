import http from "../../shared/services/http-common.js";

export class VaccineApiService{
    getVaccines(){
        return http.get(`/vaccines`);
    }
}