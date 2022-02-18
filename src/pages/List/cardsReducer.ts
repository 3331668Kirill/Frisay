import {Dispatch} from "redux"
import {api} from "../../api/api";

export type CardsDataType = {
    cards: CardsType[]
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
            stateCopy = action.data
            console.log(stateCopy)
            return stateCopy
        }
        default:
            return state
    }
}

export const setCardsAC = (data: CardsDataType) => {
    return ({type: 'SET_CARDS', data} as const)
}
export const getCardsTC = (page: number, pageCount: number, id: string) => (dispatch: Dispatch): void => {
    api.getCards(page, pageCount, id).then((res) => {
        console.log(res)
        dispatch(setCardsAC(res.data))
    }).catch((err) => {
        console.log(err)

    })
}