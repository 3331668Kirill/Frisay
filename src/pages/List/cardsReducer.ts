import {Dispatch} from "redux"
import {api} from "../../api/api";



export type CardsDataType = {
    cards: CardsType[]
    id:string
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    packUserId: string
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}

export type CardsType = {
    answer: string
    cardsPack_id: string
    comments: string
    created: string
    grade: number
    more_id: string
    question: string
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    __v: number
    _id: string
}


export type ActionsType = ReturnType<typeof setCardsAC>

const initialState = {} as CardsDataType
export const cardsReducer = (state: CardsDataType = initialState, action: ActionsType): CardsDataType => {
    switch (action.type) {
        case 'SET_CARDS': {
            let stateCopy = {...state}
            stateCopy = {...action.data,id:action.id}
            console.log(stateCopy)
            return stateCopy
        }
        default:
            return state
    }
}

export const setCardsAC = (data: CardsDataType, id:string) => {
    return ({type: 'SET_CARDS', data, id} as const)
}
export const getCardsTC = (page: number, pageCount: number, id: string) => (dispatch: Dispatch): void => {
    api.getCards(page, pageCount, id).then((res) => {
        console.log(res)
        dispatch(setCardsAC(res.data, id))
    }).catch((err) => {
        console.log(err)

    })
}

export const addNewCardTC = (page: number, pageCount: number, idPack: string) => (dispatch: Dispatch): void => {
    api.addNewCard(idPack).then(() => {

        api.getCards(page, pageCount, idPack).then((res) => {
            dispatch(setCardsAC(res.data, idPack))
        })
    }).catch((err) => {
        console.log(err)
    })
}

export const deleteCardTC = (page: number, pageCount: number,idCard: string, idPack:string) => (dispatch: Dispatch): void => {
    api.deleteCard(idCard).then(() => {

        api.getCards(page, pageCount, idPack).then((res) => {
            dispatch(setCardsAC(res.data, idPack))
        })
    }).catch((err) => {
        console.log(err)

    })
}

export const updateCardTC = (idCard: string, idPack:string, page: number, pageCount: number) => (dispatch: Dispatch): void => {
    api.updateCard(idCard).then(() => {

        api.getCards(page, pageCount, idPack).then((res) => {
            dispatch(setCardsAC(res.data, idPack))
        })
    }).catch((err) => {
        console.log(err)

    })
}