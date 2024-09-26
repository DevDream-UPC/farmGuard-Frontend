import http from "../../shared/services/http-common.js";

export class AnimalApiService {
    getAll(){
        return http.get(`/animals`);
    }

    postAnimal(resource){
        return http.post(`/animals`,resource);
    }

    deleteAnimal(id){

    }
}