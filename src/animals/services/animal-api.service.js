import http from "../../shared/services/http-common.js";

export class AnimalApiService {
    getAll(inventoryId){
        return http.get(`/animals/inventory/${inventoryId}`);
    }

    putAnimal(resource,idSerialAnimal){
        return http.put(`/animals/${idSerialAnimal}`, resource);
    }

    postAnimal(resource,idInventory){
        return http.post(`/animals/${idInventory}`,resource);
    }

    deleteAnimal(idSerialAnimal){
        return http.delete(`/animals/${idSerialAnimal}`);
    }

    getById(idSerialAnimal){
        return http.get(`/animals/${idSerialAnimal}`)
    }
}