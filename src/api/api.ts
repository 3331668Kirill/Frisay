import axios from "axios";

type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
}
type RecoverPassPayloadType = {
    email: string
    html1?: string
    html2?: string
    message: string
    from: string
}
type RegisterPayloadType = {
    email: string
    password: string
}

const instance = axios.create({
    //baseURL: "http://localhost:7542/2.0/",
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})

export const api = {
    login(payload: LoginPayloadType) {
        return instance.post(`auth/login`, { ...payload })
    },
    recoverPass(payload: RecoverPassPayloadType) {
        return instance.post('auth/forgot', { ...payload })
    },
    register(payload: RegisterPayloadType) {
        return instance.post('auth/register', { ...payload })

    },
    logout() {
        return instance.delete('auth/me')
    },
    setNewPassword(data: { password: string, resetPasswordToken: string }) {
        return instance.post('auth/set-new-password', data)
    },
    getPacks(){
      return instance.get('/cards/pack?pageCount=20')
    },
    addNewPack(){
        return instance.post('/cards/pack/',{cardsPack: {name:'XAXAXA'}})
    },
    deletePack(id:string){
        return instance.delete(`/cards/pack?id=${id}`)
    },
    updatePack(id:string){
        return instance.put(`/cards/pack`,{cardsPack: {_id:id, name:'XOXOXO'}})
    },
}