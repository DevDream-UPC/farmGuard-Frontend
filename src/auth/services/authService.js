import http from "../../shared/services/http-common.js";

export class AuthService{
    login(user){
        return http.post("/authentication/sign-in",user)
    };
    logout(){
        localStorage.removeItem(`user`);
    }
    register(newUser){
        return http.post("/authentication/sign-up",newUser)
    }
}