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
        return instance.post(`auth/login`, {...payload})
    },
    recoverPass(payload: RecoverPassPayloadType) {
        return instance.post('auth/forgot', {...payload})
    },
    register(payload: RegisterPayloadType) {
        return instance.post('auth/register', {...payload})

    },
    checkMe(payload: {}) {
        return instance.post('auth/me', payload)
    },
    logout() {
        return instance.delete('auth/me')
    },
    setNewPassword(data: { password: string, resetPasswordToken: string }) {
        return instance.post('auth/set-new-password', data)
    },
    getPacks(page: number, pageCount: number) {
        return instance.get(`cards/pack/?page=${page}&pageCount=${pageCount}`)
    },
    addNewPack() {
        return instance.post('/cards/pack/', {cardsPack: {name: 'XAXAXA'}})
    },
    deletePack(id: string) {
        return instance.delete(`/cards/pack?id=${id}`)
    },
    updatePack(id: string) {
        return instance.put(`/cards/pack`, {cardsPack: {_id: id, name: 'XOXOXO'}})
    },

    getCards(page: number, pageCount: number, id:string) {
        return instance.get(`/cards/card/?page=${page}&pageCount=${pageCount}&cardsPack_id=${id}`)
    },
    addNewCard(id:string) {
        return instance.post('/cards/card', {card: {cardsPack_id:id,question: "WHO ARE YOU?", grade: 4}})
    },
    deleteCard(id: string) {
        return instance.delete(`/cards/card?id=${id}`)
    },
    updateCard(id: string) {
        return instance.put(`/cards/card`, {card: {_id: id, question: 'WHAT`s GOING ON?'}})
    },
}


