import {Dispatch} from "redux"
import {api} from "../../api/api";
import {AxiosError, AxiosResponse} from "axios";
import {SetStateAction , Dispatch as ReactDispatch} from "react";

export type UserInitialStateType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: string
    update: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
    token: string
}
export type ActionsType = ReturnType<typeof LoginAC>
    | ReturnType<typeof SetErrorAC>
    | ReturnType<typeof LogoutAC>
    | ReturnType<typeof CheckMeAC>

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
        case "auth/CHECK_ME": {
            return {...action.payload}
        }
        default:
            return state
    }
}

export const CheckMeAC = (payload: UserInitialStateType) => {
    return ({type: 'auth/CHECK_ME', payload} as const)
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

export const loginTC = (email: string, password: string, rememberMe: boolean, setIsLoading: ReactDispatch<SetStateAction<boolean>>) => (dispatch: Dispatch) => {
    setIsLoading(true)
    api.login({email, password, rememberMe}).then((res) => {
        dispatch(LoginAC(res.data))
    }).catch((err: AxiosError) => {
        const error = err.response ? err.response.data.error :
            (err.message + 'more details about error in the console')
        dispatch(SetErrorAC(error))
    }).finally(() => setIsLoading(false))
}

export const logoutTC = () => (dispatch: Dispatch) => {
    api.logout().then(() => {
       dispatch(LogoutAC())
    }).catch((err) => {
        console.log(err)
    })
}
export const checkMeTC = (payload: {}, setIsLoading: ReactDispatch<SetStateAction<boolean>>) => (dispatch: Dispatch) => {
    setIsLoading(true)
    api.checkMe(payload).then((res: AxiosResponse<UserInitialStateType>) => {
        console.log(res.data)
        dispatch(CheckMeAC(res.data))
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        setIsLoading(false)
    })
}
