import axios from "axios";

type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
}
const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/"
})

export const api = {
    login(payload: LoginPayloadType) {
        return instance.post(`auth/login`, {...payload})
    }
}