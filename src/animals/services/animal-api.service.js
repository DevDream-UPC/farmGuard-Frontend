import http from "../../shared/services/http-common.js";

export class AnimalApiService {
    getAll(inventoryId){
        return http.get(`/animals/inventory/${inventoryId}`);
    }

    putAnimal(resource,idSerialAnimal){
        return http.put(`/animals/${idSerialAnimal}`, resource);
    }

    postAnimal(resource){
        return http.post(`/animals`,resource);
    }

    deleteAnimal(id){

    }

    getById(idSerialAnimal){
        return http.get(`/animals/${idSerialAnimal}`)
    }
}