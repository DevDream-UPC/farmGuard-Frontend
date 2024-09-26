import http from "../../shared/services/http-common.js";

export class AnimalApiService {
    getAll(){
        return htpp.get(`/animals`);
    }

    postAnimal(resource){
        return htt.post(`/animals`,resource);
    }

    deleteAnimal(id){

    }
}