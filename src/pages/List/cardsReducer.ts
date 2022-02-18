import {Dispatch} from "redux"
import {api} from "../../api/api";


export type PacksType = {
    cardPacks: CardsPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}
export type CardsPackType = {
    cardsCount: number
    created?: string
    grade?: number
    more_id?: string
    name?: string
    path: string
    private?: boolean
    rating?: number
    shots?: number
    type?: string
    updated: string
    user_id: string
    user_name: string
    __v?: number
    _id: string
}
export type ActionsType = ReturnType<typeof setPacksAC>

const initialState = {} as PacksType
export const cardsReducer = (state: PacksType = initialState, action: ActionsType): PacksType => {
    switch (action.type) {
        case 'SET_PACKS': {
            let stateCopy = {...state}
            stateCopy = action.data
            console.log(stateCopy)
            return stateCopy
        }
        default:
            return state
    }
}

export const setPacksAC = (data: PacksType) => {
    return ({type: 'SET_PACKS', data} as const)
}

export const getCardsPackTC = (page: number, pageCount: number) => (dispatch: Dispatch): void => {
    api.getPacks(page, pageCount).then((res) => {
        dispatch(setPacksAC(res.data))
    }).catch((err) => {
        console.log(err)

    })
}

export const addNewPackTC = (page: number, pageCount: number) => (dispatch: Dispatch): void => {
    api.addNewPack().then((res) => {
        console.log(res)
        api.getPacks(page, pageCount).then((res) => {
            dispatch(setPacksAC(res.data.cardPacks))
        })
    }).catch((err) => {
        console.log(err)

    })
}

export const deletePackTC = (id: string, page: number, pageCount: number) => (dispatch: Dispatch): void => {
    api.deletePack(id).then((res) => {
        console.log(res)
        api.getPacks(page, pageCount).then((res) => {
            dispatch(setPacksAC(res.data.cardPacks))
        })
    }).catch((err) => {
        console.log(err)

    })
}

export const updatePackTC = (id: string, page: number, pageCount: number) => (dispatch: Dispatch): void => {
    api.updatePack(id).then((res) => {
        console.log(res)
        api.getPacks(page, pageCount).then((res) => {
            dispatch(setPacksAC(res.data.cardPacks))
        })
    }).catch((err) => {
        console.log(err)

    })
}