import http from "../../shared/services/http-common.js";
export class NotificationService {
    getByIdInventory(id){
        return http.get(`/notifications/${id}`);
    }
    postNotification(notification){
        return http.post(`/notifications}`, notification);
    }
}