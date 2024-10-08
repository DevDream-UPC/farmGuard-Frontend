import http from "../../shared/services/http-common.js";

export class SpecieApiService {
    getSpecies() {
        return http.get(`/species`);
    }
}