import {Dispatch} from "redux"
import {userApi} from "../../api/api";

export type UserInitialStateType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    update: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
    token: string
}
export type ActionsType = ReturnType<typeof LoginAC>

const initialState = {} as UserInitialStateType
export const loginReducer = (state: UserInitialStateType = initialState, action: ActionsType): UserInitialStateType => {
    switch (action.type) {
        case 'auth/LOGIN': {
            let stateCopy = {...state}
            stateCopy = action.data
            return stateCopy
        }
        default:
            return state
    }
}

export const LoginAC = (data: UserInitialStateType) => {
    return ({type: 'auth/LOGIN', data} as const)
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    userApi.login({email, password, rememberMe}).then((res) => {
        dispatch(LoginAC(res.data))
    }).catch((err) => {
        console.log(err)
    })
}