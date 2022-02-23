import {Dispatch} from "redux"
import {api} from "../../api/api";
import {AppRootStateType} from "../../redux/store";


export type PacksType = {
    cardPacks: CardsPackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    searchValue: string
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

export type ActionsType =
    ReturnType<typeof setPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setSearchValueAC>

const initialState: PacksType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 20,
    searchValue: ''
}
export const cardsPackReducer = (state: PacksType = initialState, action: ActionsType): PacksType => {
    switch (action.type) {
        case 'SET_PACKS': {
            let stateCopy = {...state}
            stateCopy = action.data
            return stateCopy
        }
        case "packs/SET-CURRENT-PAGE": {
            return {...state, page: action.page}
        }
        case "packs/SET-PAGE-COUNT": {
            return {...state, pageCount: action.pageCount}
        }
        case "packs/SET-SEARCH-VALUE": {
            return {...state, searchValue: action.searchName}
        }
        default:
            return state
    }
}

export const setPacksAC = (data: PacksType) => {
    return ({type: 'SET_PACKS', data} as const)
}
export const setCurrentPageAC = (page: number) => {
    return ({type: 'packs/SET-CURRENT-PAGE', page} as const)
}
export const setPageCountAC = (pageCount: number) => {
    return ({type: 'packs/SET-PAGE-COUNT', pageCount} as const)
}
export const setSearchValueAC = (searchName: string) => {
    return ({type: 'packs/SET-SEARCH-VALUE', searchName} as const)
}

export const getCardsPackTC = () => (dispatch: Dispatch, getState: () => AppRootStateType): void => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const searchName = getState().packs.searchValue
    api.getPacks(page, pageCount, searchName).then((res) => {
        dispatch(setPacksAC(res.data))
    }).catch((err) => {
        console.log(err)

    })
}

export const addNewPackTC = () => (dispatch: Dispatch, getState: () => AppRootStateType): void => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const searchName = getState().packs.searchValue
    api.addNewPack().then(() => {

        api.getPacks(page, pageCount, searchName).then((res) => {
            dispatch(setPacksAC(res.data))
        })
    }).catch((err) => {
        console.log(err)

    })
}

export const deletePackTC = (id: string) => (dispatch: Dispatch, getState: () => AppRootStateType): void => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const searchName = getState().packs.searchValue
    api.deletePack(id).then(() => {

        api.getPacks(page, pageCount, searchName).then((res) => {
            dispatch(setPacksAC(res.data))
        })
    }).catch((err) => {
        console.log(err)

    })
}

export const updatePackTC = (id: string) => (dispatch: Dispatch, getState: () => AppRootStateType): void => {
    const page = getState().packs.page
    const pageCount = getState().packs.pageCount
    const searchName = getState().packs.searchValue
    api.updatePack(id).then(() => {

        api.getPacks(page, pageCount, searchName).then((res) => {
            dispatch(setPacksAC(res.data))
        })
    }).catch((err) => {
        console.log(err)

    })
}

