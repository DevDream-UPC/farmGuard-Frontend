import http from "../../shared/services/http-common.js";
import axios from "axios";



export class VaccineApiService  {
    // Obtener todas las vacunas de un animal
    getVaccinesByAnimal(animalId) {
        return axios.get(`${http()}/animal/${animalId}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error al obtener las vacunas:', error);
                throw error;
            });
    }

    // Agregar una nueva vacuna a un animal
    addVaccine(animalId, vaccineData) {
        return axios.post(`${http()}/animal/${animalId}/add`, vaccineData)
            .then(response => response.data)
            .catch(error => {
                console.error('Error al agregar vacuna:', error);
                throw error;
            });
    }

    // Actualizar una vacuna de un animal
    updateVaccine(vaccineId, vaccineData) {
        return axios.put(`${http()}/update/${vaccineId}`, vaccineData)
            .then(response => response.data)
            .catch(error => {
                console.error('Error al actualizar vacuna:', error);
                throw error;
            });

    }

    // Eliminar una vacuna
    deleteVaccine(vaccineId) {
        return axios.delete(`${http()}/delete/${vaccineId}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error al eliminar vacuna:', error);
                throw error;
            });
    }
    // Obtener todas las vacunas
    getAllVaccines() {
        return axios.get(`${http()}/vaccines`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error al obtener las vacunas:', error);
                throw error;
            });
    }
    // Agregar una nueva vacuna
    addVaccine(vaccineData) {
        return axios.post(`${http()}/add`, vaccineData)
            .then(response => response.data)
            .catch(error => {
                console.error('Error al agregar vacuna:', error);
                throw error;
            });
    }
}
