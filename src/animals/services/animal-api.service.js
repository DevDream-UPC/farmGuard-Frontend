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

    getById(id){
        return http.get(`/animals?id_animal=${id}`)
    }

    newVaccine(vaccineData) {
        return http.post('/vaccines', vaccineData);
    }

    getVaccines() {
        return http.get('/vaccines');
    }

    getVaccineById(id) {
        return http.get(`/vaccines/${id}`);
    }

    updateVaccine(id, vaccineData) {
        return http.put(`/vaccines/${id}`, vaccineData);
    }

    deleteVaccine(id) {
        return http.delete(`/vaccines/${id}`);
    }

    getVaccinesByAnimalId(id) {
        return http.get(`/vaccines?animal_id=${id}`);
    }
}