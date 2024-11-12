import http from "../../shared/services/http-common.js";

export class VaccineApiService{
    getVaccines(idSerialAnimal){
        return http.get(`/vaccines/${idSerialAnimal}`);
    }

    putVaccine(resourceVaccine,idSerialAnimal){
        return http.post(`/vaccines/${idSerialAnimal}`,resourceVaccine);
    }
}