import {Dispatch} from "redux"
import {api} from "../../api/api";
import {AxiosError} from "axios";

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
export type ActionsType = ReturnType<typeof LoginAC> | ReturnType<typeof SetErrorAC> | ReturnType<typeof LogoutAC>

const initialState = {} as UserInitialStateType
export const loginReducer = (state: UserInitialStateType = initialState, action: ActionsType): UserInitialStateType => {
    switch (action.type) {
        case 'auth/LOGIN': {
            let stateCopy = {...state}
            stateCopy = action.data
            return stateCopy
        }
        case 'auth/LOGOUT': {
            let stateCopy = {...state}
            stateCopy = {} as UserInitialStateType
            return stateCopy
        }
        case 'auth/SET-ERROR': {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export const LoginAC = (data: UserInitialStateType) => {
    return ({type: 'auth/LOGIN', data} as const)
}
export const LogoutAC = () => {
    return ({type: 'auth/LOGOUT'} as const)
}
export const SetErrorAC = (error: string) => {
    return ({type: 'auth/SET-ERROR', error} as const)
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    api.login({email, password, rememberMe}).then((res) => {
        dispatch(LoginAC(res.data))
    }).catch((err: AxiosError) => {
        const error = err.response ? err.response.data.error :
            (err.message + 'more details about error in the console')
        dispatch(SetErrorAC(error))
    })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    api.logout().then((res) => {
       dispatch(LogoutAC())
    }).catch((err) => {
        console.log(err)
    })
}
