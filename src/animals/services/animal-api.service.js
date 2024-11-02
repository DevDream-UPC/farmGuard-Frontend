import http from "../../shared/services/http-common.js";

export class AnimalApiService {
    getAll(){
        return http.get(`/animals`);
    }

    putAnimal(resource){
        return http.put(`/animals/${resource.id}`, resource);
    }

    postAnimal(resource){
        return http.post(`/animals`,resource);
    }

    deleteAnimal(id){

    }

    getById(id){
        return http.get(`/animals?id_animal=${id}`)
    }
}